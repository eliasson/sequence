//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import * as antlr4 from 'antlr4';
import { SequenceLexer } from '../parser/SequenceLexer';
import { SequenceParser } from '../parser/SequenceParser';

/**
 * Create a parser that can be used for testing parser grammar.
 * 
 * @param {*string} source 
 */
export function createParser(source, silent=true) {
    const chars = new antlr4.InputStream(source);
    const lexer = new SequenceLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new SequenceParser(tokens);
    parser.buildParseTrees = true;

    if (silent) parser.removeErrorListeners(); // To avoid prints to stdout
    return parser;
}
