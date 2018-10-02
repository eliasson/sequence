//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import * as antlr4 from 'antlr4';
import { SequenceLexer } from '../parser/SequenceLexer';
import { SequenceParser } from '../parser/SequenceParser';
import { IntSequenceListener } from './ast';
import { SymbolTable, SymbolTableVisitor } from './symbols';
import { DiagnosticError, AntlrErrorListener, RedeclarationAnalyser, MissingDeclarationAnalyser } from './analysis';
import { SVGTransformer } from './transformer';

/**
 * Wraps the ANTLR parsing to a separate function to be used by unit
 * tests.
 *
 * @param {*string} source The squence input
 * @return {object} The parser result
 */
export function parse(source) {
    const chars = new antlr4.InputStream(source);
    const lexer = new SequenceLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new SequenceParser(tokens);
    parser.buildParseTrees = true;

    // Remove the standard error listener since we do not want to
    // print to stdout, but to capture the errors ourself to present
    // a nice and tidy error message for the end-user.
    parser.removeErrorListeners();
    lexer.removeErrorListeners();

    // Register our listener used to build the AST while the parsing
    // is being done.
    const errorListener = new AntlrErrorListener();
    const listener = new IntSequenceListener();
    parser.addErrorListener(errorListener);
    parser.addParseListener(listener);

    // Initiate the parsing, and begin with the root rule.
    const parserResult = parser.root();

    return {
        isValid: () => parserResult.parser._syntaxErrors === 0,
        parserResult:  parserResult,
        ast: listener.getRoot(),
        diagnostics: errorListener.result
    };
}

/**
 * Compiles the given source code
 * @param {string} source The source to compile and generate SVG for
 * @param {*} templateDirectory The directory that contains the template svg-files
 */
export function compile(source, templateDirectory) {
    // Generate a default empty symbol table
    let symbols = new SymbolTable();
    let diagnostics = [];
    let output = '';

    // Parse the source file to produce an AST
    const result = parse(source);
    diagnostics = diagnostics.concat(result.diagnostics);

    if(result.isValid()) {
        // Generate a new Symbol table by visiting each node in the AST
        symbols = new SymbolTableVisitor()
            .withAst(result.ast)
            .generate();

        // Perform the actual analysis
        diagnostics = []
            .concat(new RedeclarationAnalyser(result.ast, symbols).analyse())
            .concat(new MissingDeclarationAnalyser(result.ast, symbols).analyse());
    }

    if(result.isValid()) {
        output = new SVGTransformer(result.ast, templateDirectory).transform();
    }

    const errors = diagnostics.filter(d => d.type === DiagnosticError);
    return {
        isValid: () => { return result.isValid() && errors.length === 0 },
        symbols: symbols,
        diagnostics: diagnostics,
        output: output
    }
}
