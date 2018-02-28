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

    // Register our listener used to build the AST while the parsing
    // is being done.
    const listener = new IntSequenceListener();
    parser.addParseListener(listener);

    // Initiate the parsing, and begin with the root rule.
    const parserResult = parser.root();

    return {
        isValid: () => parserResult.parser._syntaxErrors === 0,
        parserResult:  parserResult,
        ast: listener.getRoot()
    };
}

export function compile(source) {
    // 1. Parse the source file to produce an AST
    const result = parse(source);

    // 2. Analyse the AST to find semantic errors
    // Generate a symbol table that can be used in later analysis
    const symbols = new SymbolTableVisitor()
        .withAst(result.ast)
        .generate();

    // 3. Transform the AST into SVG data
    const output = result.isValid() ? new SVGTransformer(result.ast).transform() : '';

    return {
        isValid: result.isValid,
        symbols: symbols,
        output: output
    }
}
