// Generated from ./parser/Sequence.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000f\u00c2\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0006\nZ\n\n\r\n\u000e\n",
    "[\u0003\n\u0007\n_\n\n\f\n\u000e\nb\u000b\n\u0003\u000b\u0003\u000b",
    "\u0006\u000bf\n\u000b\r\u000b\u000e\u000bg\u0003\u000b\u0003\u000b\u0005",
    "\u000bl\n\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005\fr\n\f",
    "\u0003\r\u0003\r\u0003\r\u0005\rw\n\r\u0003\r\u0003\r\u0005\r{\n\r\u0003",
    "\r\u0005\r~\n\r\u0005\r\u0080\n\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0006\u000f\u0089\n\u000f",
    "\r\u000f\u000e\u000f\u008a\u0003\u0010\u0003\u0010\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0007",
    "\u0013\u0096\n\u0013\f\u0013\u000e\u0013\u0099\u000b\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u009f\n\u0013\f\u0013",
    "\u000e\u0013\u00a2\u000b\u0013\u0003\u0013\u0005\u0013\u00a5\n\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014",
    "\u00ac\n\u0014\f\u0014\u000e\u0014\u00af\u000b\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0007\u0014\u00b9\n\u0014\f\u0014\u000e\u0014\u00bc\u000b\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00c1\n\u0014\u0007",
    "g\u0097\u00a0\u00ad\u00ba\u0002\u0015\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0002\u001f\u0002!\u0002#\u0002%\u0002",
    "\'\u0002\u0003\u0002\b\u0004\u0002\u000b\u000b\"\"\u0004\u0002C\\c|",
    "\u0005\u00022;C\\c|\u0003\u00022;\u0005\u0002\f\f\u000f\u000f$$\u0005",
    "\u0002\f\f\u000f\u000f))\u0002\u00cd\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0003)\u0003\u0002\u0002\u0002\u0005.\u0003\u0002\u0002\u0002\u0007",
    "4\u0003\u0002\u0002\u0002\t;\u0003\u0002\u0002\u0002\u000b>\u0003\u0002",
    "\u0002\u0002\rG\u0003\u0002\u0002\u0002\u000fK\u0003\u0002\u0002\u0002",
    "\u0011P\u0003\u0002\u0002\u0002\u0013Y\u0003\u0002\u0002\u0002\u0015",
    "c\u0003\u0002\u0002\u0002\u0017q\u0003\u0002\u0002\u0002\u0019\u007f",
    "\u0003\u0002\u0002\u0002\u001b\u0083\u0003\u0002\u0002\u0002\u001d\u0088",
    "\u0003\u0002\u0002\u0002\u001f\u008c\u0003\u0002\u0002\u0002!\u008e",
    "\u0003\u0002\u0002\u0002#\u0090\u0003\u0002\u0002\u0002%\u00a4\u0003",
    "\u0002\u0002\u0002\'\u00c0\u0003\u0002\u0002\u0002)*\u0007P\u0002\u0002",
    "*+\u0007c\u0002\u0002+,\u0007o\u0002\u0002,-\u0007g\u0002\u0002-\u0004",
    "\u0003\u0002\u0002\u0002./\u0007C\u0002\u0002/0\u0007e\u0002\u00020",
    "1\u0007v\u0002\u000212\u0007q\u0002\u000223\u0007t\u0002\u00023\u0006",
    "\u0003\u0002\u0002\u000245\u0007Q\u0002\u000256\u0007d\u0002\u00026",
    "7\u0007l\u0002\u000278\u0007g\u0002\u000289\u0007e\u0002\u00029:\u0007",
    "v\u0002\u0002:\b\u0003\u0002\u0002\u0002;<\u0007k\u0002\u0002<=\u0007",
    "u\u0002\u0002=\n\u0003\u0002\u0002\u0002>?\u0007U\u0002\u0002?@\u0007",
    "g\u0002\u0002@A\u0007s\u0002\u0002AB\u0007w\u0002\u0002BC\u0007g\u0002",
    "\u0002CD\u0007p\u0002\u0002DE\u0007e\u0002\u0002EF\u0007g\u0002\u0002",
    "F\f\u0003\u0002\u0002\u0002GH\u0007c\u0002\u0002HI\u0007u\u0002\u0002",
    "IJ\u0007m\u0002\u0002J\u000e\u0003\u0002\u0002\u0002KL\u0007v\u0002",
    "\u0002LM\u0007g\u0002\u0002MN\u0007n\u0002\u0002NO\u0007n\u0002\u0002",
    "O\u0010\u0003\u0002\u0002\u0002PQ\u0007t\u0002\u0002QR\u0007g\u0002",
    "\u0002RS\u0007r\u0002\u0002ST\u0007n\u0002\u0002TU\u0007k\u0002\u0002",
    "UV\u0007g\u0002\u0002VW\u0007u\u0002\u0002W\u0012\u0003\u0002\u0002",
    "\u0002XZ\u0005\u001f\u0010\u0002YX\u0003\u0002\u0002\u0002Z[\u0003\u0002",
    "\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\",
    "`\u0003\u0002\u0002\u0002]_\u0005!\u0011\u0002^]\u0003\u0002\u0002\u0002",
    "_b\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002a\u0014\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ce\u0007",
    "%\u0002\u0002df\u000b\u0002\u0002\u0002ed\u0003\u0002\u0002\u0002fg",
    "\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002",
    "\u0002hk\u0003\u0002\u0002\u0002il\u0005\u0019\r\u0002jl\u0007\u0002",
    "\u0002\u0003ki\u0003\u0002\u0002\u0002kj\u0003\u0002\u0002\u0002lm\u0003",
    "\u0002\u0002\u0002mn\b\u000b\u0002\u0002n\u0016\u0003\u0002\u0002\u0002",
    "or\u0005%\u0013\u0002pr\u0005\'\u0014\u0002qo\u0003\u0002\u0002\u0002",
    "qp\u0003\u0002\u0002\u0002r\u0018\u0003\u0002\u0002\u0002st\u0006\r",
    "\u0002\u0002t\u0080\u0005\u001d\u000f\u0002uw\u0007\u000f\u0002\u0002",
    "vu\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002x{\u0007\f\u0002\u0002y{\u0007\u000f\u0002\u0002zv\u0003\u0002",
    "\u0002\u0002zy\u0003\u0002\u0002\u0002{}\u0003\u0002\u0002\u0002|~\u0005",
    "\u001d\u000f\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002",
    "~\u0080\u0003\u0002\u0002\u0002\u007fs\u0003\u0002\u0002\u0002\u007f",
    "z\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081",
    "\u0082\b\r\u0003\u0002\u0082\u001a\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0005\u001d\u000f\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086",
    "\b\u000e\u0002\u0002\u0086\u001c\u0003\u0002\u0002\u0002\u0087\u0089",
    "\t\u0002\u0002\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0003\u0002\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0003\u0002\u0002\u0002\u008b\u001e\u0003\u0002\u0002\u0002\u008c\u008d",
    "\t\u0003\u0002\u0002\u008d \u0003\u0002\u0002\u0002\u008e\u008f\t\u0004",
    "\u0002\u0002\u008f\"\u0003\u0002\u0002\u0002\u0090\u0091\t\u0005\u0002",
    "\u0002\u0091$\u0003\u0002\u0002\u0002\u0092\u0097\u0007$\u0002\u0002",
    "\u0093\u0096\u000b\u0002\u0002\u0002\u0094\u0096\n\u0006\u0002\u0002",
    "\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0094\u0003\u0002\u0002\u0002",
    "\u0096\u0099\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002",
    "\u0097\u0095\u0003\u0002\u0002\u0002\u0098\u009a\u0003\u0002\u0002\u0002",
    "\u0099\u0097\u0003\u0002\u0002\u0002\u009a\u00a5\u0007$\u0002\u0002",
    "\u009b\u00a0\u0007)\u0002\u0002\u009c\u009f\u000b\u0002\u0002\u0002",
    "\u009d\u009f\n\u0007\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002",
    "\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002",
    "\u00a1\u00a3\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002",
    "\u00a3\u00a5\u0007)\u0002\u0002\u00a4\u0092\u0003\u0002\u0002\u0002",
    "\u00a4\u009b\u0003\u0002\u0002\u0002\u00a5&\u0003\u0002\u0002\u0002",
    "\u00a6\u00a7\u0007$\u0002\u0002\u00a7\u00a8\u0007$\u0002\u0002\u00a8",
    "\u00a9\u0007$\u0002\u0002\u00a9\u00ad\u0003\u0002\u0002\u0002\u00aa",
    "\u00ac\u000b\u0002\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002\u0002\u00ac",
    "\u00af\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ad",
    "\u00ab\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003\u0002\u0002\u0002\u00af",
    "\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007$\u0002\u0002\u00b1",
    "\u00b2\u0007$\u0002\u0002\u00b2\u00c1\u0007$\u0002\u0002\u00b3\u00b4",
    "\u0007)\u0002\u0002\u00b4\u00b5\u0007)\u0002\u0002\u00b5\u00b6\u0007",
    ")\u0002\u0002\u00b6\u00ba\u0003\u0002\u0002\u0002\u00b7\u00b9\u000b",
    "\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003",
    "\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003",
    "\u0002\u0002\u0002\u00bb\u00bd\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003",
    "\u0002\u0002\u0002\u00bd\u00be\u0007)\u0002\u0002\u00be\u00bf\u0007",
    ")\u0002\u0002\u00bf\u00c1\u0007)\u0002\u0002\u00c0\u00a6\u0003\u0002",
    "\u0002\u0002\u00c0\u00b3\u0003\u0002\u0002\u0002\u00c1(\u0003\u0002",
    "\u0002\u0002\u0015\u0002[`gkqvz}\u007f\u008a\u0095\u0097\u009e\u00a0",
    "\u00a4\u00ad\u00ba\u00c0\u0004\b\u0002\u0002\u0003\r\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SequenceLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SequenceLexer.prototype = Object.create(antlr4.Lexer.prototype);
SequenceLexer.prototype.constructor = SequenceLexer;

SequenceLexer.EOF = antlr4.Token.EOF;
SequenceLexer.DOCUMENT_NAME = 1;
SequenceLexer.ACTOR = 2;
SequenceLexer.OBJECT = 3;
SequenceLexer.IS = 4;
SequenceLexer.SEQUENCE = 5;
SequenceLexer.ASK = 6;
SequenceLexer.TELL = 7;
SequenceLexer.REPLIES = 8;
SequenceLexer.IDENTIFIER = 9;
SequenceLexer.COMMENT = 10;
SequenceLexer.STRING = 11;
SequenceLexer.NEWLINE = 12;
SequenceLexer.SKIPPING = 13;

SequenceLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

SequenceLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

SequenceLexer.prototype.literalNames = [ null, "'Name'", "'Actor'", "'Object'", 
                                         "'is'", "'Sequence'", "'ask'", 
                                         "'tell'", "'replies'" ];

SequenceLexer.prototype.symbolicNames = [ null, "DOCUMENT_NAME", "ACTOR", 
                                          "OBJECT", "IS", "SEQUENCE", "ASK", 
                                          "TELL", "REPLIES", "IDENTIFIER", 
                                          "COMMENT", "STRING", "NEWLINE", 
                                          "SKIPPING" ];

SequenceLexer.prototype.ruleNames = [ "DOCUMENT_NAME", "ACTOR", "OBJECT", 
                                      "IS", "SEQUENCE", "ASK", "TELL", "REPLIES", 
                                      "IDENTIFIER", "COMMENT", "STRING", 
                                      "NEWLINE", "SKIPPING", "SPACES", "LETTER", 
                                      "LETTERORDIGIT", "DIGIT", "SINGLE_LINE_STRING", 
                                      "MULTI_LINE_STRING" ];

SequenceLexer.prototype.grammarFileName = "Sequence.g4";


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


SequenceLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 11:
		this.NEWLINE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

SequenceLexer.prototype.NEWLINE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:

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
		   
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};
SequenceLexer.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch (ruleIndex) {
		case 11:
			return this.NEWLINE_sempred(localctx, predIndex);
    	default:
    		throw "No registered predicate for:" + ruleIndex;
    }
};

SequenceLexer.prototype.NEWLINE_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.atStartOfInput();
		default:
			throw "No predicate with index:" + predIndex;
	}
};



exports.SequenceLexer = SequenceLexer;

