//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

grammar Sequence;

// Defines two custom tokens to deal with the whitespace significance
tokens { INDENT, DEDENT }

//
// The IDENT+DEDENT support is a copy from the Python3 grammar by Bart Kiers
// licenced under MIT.
// 
// See:
// https://github.com/antlr/grammars-v4/blob/master/python3-js/Python3.g4
//
@lexer::members {
  let CommonToken = require('antlr4/Token').CommonToken;
  let SequenceParser = require('./SequenceParser').SequenceParser;
  let old_lexer = SequenceLexer;
  SequenceLexer = function() {
    old_lexer.apply(this, arguments);
    this.reset.call(this);
  }

  SequenceLexer.prototype = Object.create(old_lexer.prototype);
  SequenceLexer.prototype.constructor = SequenceLexer;


  SequenceLexer.prototype.reset = function() {
    // A queue where extra tokens are pushed on (see the NEWLINE lexer rule).
    this.token_queue = [];
    // The stack that keeps track of the indentation level.
    this.indents = [];
    // The amount of opened braces, brackets and parenthesis.
    this.opened = 0;
    antlr4.Lexer.prototype.reset.call(this);
  };

  SequenceLexer.prototype.emitToken = function(token) {
    this._token = token;
    this.token_queue.push(token);
  };

  /**
   * Return the next token from the character stream and records this last
   * token in case it resides on the default channel. This recorded token
   * is used to determine when the lexer could possibly match a regex
   * literal.
   *
   */
  SequenceLexer.prototype.nextToken = function() {
    // Check if the end-of-file is ahead and there are still some DEDENTS expected.
    if (this._input.LA(1) === SequenceParser.EOF && this.indents.length) {
      // Remove any trailing EOF tokens from our buffer.
      this.token_queue = this.token_queue.filter(function(val) {
        return val.type !== SequenceParser.EOF;
      });

      // First emit an extra line break that serves as the end of the statement.
      this.emitToken(this.commonToken(SequenceParser.NEWLINE, "\n"));

      // Now emit as much DEDENT tokens as needed.
      while (this.indents.length) {
        this.emitToken(this.createDedent());
        this.indents.pop();
      }

      // Put the EOF back on the token stream.
      this.emitToken(this.commonToken(SequenceParser.EOF, "<EOF>"));
    }

    let next = antlr4.Lexer.prototype.nextToken.call(this);
    return this.token_queue.length ? this.token_queue.shift() : next;
  };

  SequenceLexer.prototype.createDedent = function() {
    return this.commonToken(SequenceParser.DEDENT, "");
  }

  SequenceLexer.prototype.commonToken = function(type, text) {
    let stop = this.getCharIndex() - 1;
    let start = text.length ? stop - text.length + 1 : stop;
    return new CommonToken(this._tokenFactorySourcePair, type, antlr4.Lexer.DEFAULT_TOKEN_CHANNEL, start, stop);
  }

  // Calculates the indentation of the provided spaces, taking the
  // following rules into account:
  //
  // "Tabs are replaced (from left to right) by one to eight spaces
  //  such that the total number of characters up to and including
  //  the replacement is a multiple of eight [...]"
  //
  //  -- https://docs.python.org/3.1/reference/lexical_analysis.html#indentation
  SequenceLexer.prototype.getIndentationCount = function(whitespace) {
    let count = 0;
    for (let i = 0; i < whitespace.length; i++) {
      if (whitespace[i] === '\t') {
        count += 8 - count % 8;
      } else {
        count++;
      }
    }
    return count;
  }

  SequenceLexer.prototype.atStartOfInput = function() {
    return this.getCharIndex() === 0;
  }
}

// The root rule is where it all starts. This rule states what constructs that
// is allowed on the root level. The EOF indicates that the full input should
// be read and matched by the parser, else an error will be thrown.
root
    : NEWLINE* documentMeta definitions EOF
    ;

// The document meta requires at least name. Any other field is optional and
// might have any order
documentMeta
    : documentName
    ;

// Rule for defining the name of this set of sequence diagrams
documentName
    : DOCUMENT_NAME string NEWLINE?
    ;

// Rule for defining participants (actors and objects)
definitions
    : (NEWLINE | actorDefinition | objectDefinition | sequenceDefinition)*
    ;

// Rule for defining a participating actor (e.g. human, user)
actorDefinition
    : ACTOR IDENTIFIER IS string NEWLINE?
    | ACTOR IDENTIFIER NEWLINE?
    ;

// Rule for identifying the participating objects (e.g. systems, classes)
objectDefinition
    : OBJECT IDENTIFIER IS string NEWLINE?
    | OBJECT IDENTIFIER NEWLINE?
    ;

// Rule for defining a single sequence
sequenceDefinition
    : SEQUENCE IDENTIFIER sequenceBlock
    ;

// Defines the block that constitutes a sequence
sequenceBlock
    : NEWLINE INDENT sequenceMessage* DEDENT
    ;

// The sequence message that represents the message being sent between
// two participants
sequenceMessage
    : IDENTIFIER (ASK|TELL|REPLIES) IDENTIFIER string NEWLINE?
    | IDENTIFIER (ASK|TELL|REPLIES) IDENTIFIER NEWLINE?
    ;

// String exposed as a grammar rule to make it testable directly
// without piggy-back on another rule
string
    : STRING
    ;

// Definition of string tokens
DOCUMENT_NAME                                           : 'Name';
ACTOR                                                   : 'Actor';
OBJECT                                                  : 'Object';
IS                                                      : 'is';
SEQUENCE                                                : 'Sequence';
ASK                                                     : 'ask';
TELL                                                    : 'tell';
REPLIES                                                 : 'replies';

// Captures any word that is not a keyword. Keep this after the keywords
// are defined
IDENTIFIER
    : LETTER+ LETTERORDIGIT*
    ;

// Line comments
COMMENT
    : '#' .+? (NEWLINE | EOF) -> skip
    ;

// Single and multi-line strings
STRING
    : (SINGLE_LINE_STRING | MULTI_LINE_STRING)
    ;

//
// The NEWLINE rule is a copy from the Python3 grammar by Bart Kiers
// licenced under MIT.
// 
// See:
// https://github.com/antlr/grammars-v4/blob/master/python3-js/Python3.g4
//
NEWLINE
 : ( {this.atStartOfInput()}?   SPACES
   | ( '\r'? '\n' | '\r' ) SPACES?
   ) {
     let newLine = this.text.replace(/[^\r\n]+/g, '');
     let spaces = this.text.replace(/[\r\n]+/g, '');
     let next = this._input.LA(1);
     if (this.opened > 0 || next === 13 /* '\r' */ || next === 10 /* '\n' */ || next === 35 /* '#' */) {
       // If we're inside a list or on a blank line, ignore all indents,
       // dedents and line breaks.
       this.skip();
     } else {
       this.emitToken(this.commonToken(SequenceParser.NEWLINE, newLine));
       let indent = this.getIndentationCount(spaces);
       let previous = this.indents.length ? this.indents[this.indents.length - 1] : 0;
       if (indent === previous) {
         // skip indents of the same size as the present indent-size
         this.skip();
       } else if (indent > previous) {
         this.indents.push(indent);
         this.emitToken(this.commonToken(SequenceParser.INDENT, spaces));
       } else {
         // Possibly emit more than 1 DEDENT token.
         while (this.indents.length && this.indents[this.indents.length - 1] > indent) {
           this.emitToken(this.createDedent());
           this.indents.pop();
         }
       }
     }
   }
 ;

SKIPPING
    : SPACES -> skip
    ;

// A fragment itself will (cannot) be interpreted as a token, it is only meant
// to be reused from other lexer rules.
fragment SPACES
    : [ \t]+
    ;

fragment LETTER
    : [a-zA-Z]
    ;

fragment LETTERORDIGIT
    : [a-zA-Z0-9]
    ;

fragment DIGIT
    : [0-9]
    ;

// A traditional string, double- or single-quoted allowing any character but
// newline or the quote
fragment SINGLE_LINE_STRING
    : '"' (. | ~[\r\n"])*? '"'
    | '\'' (. | ~[\r\n'])*? '\''
    ;

// A multi-line string, double- or single-quoted allowing any character but
// the quote
fragment MULTI_LINE_STRING
    : '"""' (.)*? '"""'
    | '\'\'\'' (.)*? '\'\'\''
    ;
