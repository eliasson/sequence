// Generated from ./parser/Sequence.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SequenceListener = require('./SequenceListener').SequenceListener;
var grammarFileName = "Sequence.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011l\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004&\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005,\n\u0005\f\u0005\u000e\u0005/\u000b",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u00066\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006;\n\u0006",
    "\u0005\u0006=\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007D\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007I\n\u0007\u0005\u0007K\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0007\tT\n\t\f\t\u000e\tW\u000b\t\u0003\t",
    "\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n`\n\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\nf\n\n\u0005\nh\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0002\u0003\u0003\u0002\b\n\u0002q\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002",
    "\u0002\b-\u0003\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002\fJ\u0003",
    "\u0002\u0002\u0002\u000eL\u0003\u0002\u0002\u0002\u0010P\u0003\u0002",
    "\u0002\u0002\u0012g\u0003\u0002\u0002\u0002\u0014i\u0003\u0002\u0002",
    "\u0002\u0016\u0018\u0007\u000e\u0002\u0002\u0017\u0016\u0003\u0002\u0002",
    "\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002",
    "\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u001c\u0003\u0002\u0002",
    "\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d\u0005\u0004\u0003",
    "\u0002\u001d\u001e\u0005\b\u0005\u0002\u001e\u001f\u0007\u0002\u0002",
    "\u0003\u001f\u0003\u0003\u0002\u0002\u0002 !\u0005\u0006\u0004\u0002",
    "!\u0005\u0003\u0002\u0002\u0002\"#\u0007\u0003\u0002\u0002#%\u0005\u0014",
    "\u000b\u0002$&\u0007\u000e\u0002\u0002%$\u0003\u0002\u0002\u0002%&\u0003",
    "\u0002\u0002\u0002&\u0007\u0003\u0002\u0002\u0002\',\u0007\u000e\u0002",
    "\u0002(,\u0005\n\u0006\u0002),\u0005\f\u0007\u0002*,\u0005\u000e\b\u0002",
    "+\'\u0003\u0002\u0002\u0002+(\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002+*\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002-+\u0003",
    "\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.\t\u0003\u0002\u0002\u0002",
    "/-\u0003\u0002\u0002\u000201\u0007\u0004\u0002\u000212\u0007\u000b\u0002",
    "\u000223\u0007\u0006\u0002\u000235\u0005\u0014\u000b\u000246\u0007\u000e",
    "\u0002\u000254\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026=\u0003",
    "\u0002\u0002\u000278\u0007\u0004\u0002\u00028:\u0007\u000b\u0002\u0002",
    "9;\u0007\u000e\u0002\u0002:9\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002",
    "\u0002;=\u0003\u0002\u0002\u0002<0\u0003\u0002\u0002\u0002<7\u0003\u0002",
    "\u0002\u0002=\u000b\u0003\u0002\u0002\u0002>?\u0007\u0005\u0002\u0002",
    "?@\u0007\u000b\u0002\u0002@A\u0007\u0006\u0002\u0002AC\u0005\u0014\u000b",
    "\u0002BD\u0007\u000e\u0002\u0002CB\u0003\u0002\u0002\u0002CD\u0003\u0002",
    "\u0002\u0002DK\u0003\u0002\u0002\u0002EF\u0007\u0005\u0002\u0002FH\u0007",
    "\u000b\u0002\u0002GI\u0007\u000e\u0002\u0002HG\u0003\u0002\u0002\u0002",
    "HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002J>\u0003\u0002\u0002",
    "\u0002JE\u0003\u0002\u0002\u0002K\r\u0003\u0002\u0002\u0002LM\u0007",
    "\u0007\u0002\u0002MN\u0007\u000b\u0002\u0002NO\u0005\u0010\t\u0002O",
    "\u000f\u0003\u0002\u0002\u0002PQ\u0007\u000e\u0002\u0002QU\u0007\u0010",
    "\u0002\u0002RT\u0005\u0012\n\u0002SR\u0003\u0002\u0002\u0002TW\u0003",
    "\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002",
    "VX\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002XY\u0007\u0011\u0002",
    "\u0002Y\u0011\u0003\u0002\u0002\u0002Z[\u0007\u000b\u0002\u0002[\\\t",
    "\u0002\u0002\u0002\\]\u0007\u000b\u0002\u0002]_\u0005\u0014\u000b\u0002",
    "^`\u0007\u000e\u0002\u0002_^\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`h\u0003\u0002\u0002\u0002ab\u0007\u000b\u0002\u0002bc\t\u0002",
    "\u0002\u0002ce\u0007\u000b\u0002\u0002df\u0007\u000e\u0002\u0002ed\u0003",
    "\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fh\u0003\u0002\u0002\u0002",
    "gZ\u0003\u0002\u0002\u0002ga\u0003\u0002\u0002\u0002h\u0013\u0003\u0002",
    "\u0002\u0002ij\u0007\r\u0002\u0002j\u0015\u0003\u0002\u0002\u0002\u0010",
    "\u0019%+-5:<CHJU_eg"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Name'", "'Actor'", "'Object'", "'is'", "'Sequence'", 
                     "'ask'", "'tell'", "'replies'" ];

var symbolicNames = [ null, "DOCUMENT_NAME", "ACTOR", "OBJECT", "IS", "SEQUENCE", 
                      "ASK", "TELL", "REPLIES", "IDENTIFIER", "COMMENT", 
                      "STRING", "NEWLINE", "SKIPPING", "INDENT", "DEDENT" ];

var ruleNames =  [ "root", "documentMeta", "documentName", "definitions", 
                   "actorDefinition", "objectDefinition", "sequenceDefinition", 
                   "sequenceBlock", "sequenceMessage", "string" ];

function SequenceParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SequenceParser.prototype = Object.create(antlr4.Parser.prototype);
SequenceParser.prototype.constructor = SequenceParser;

Object.defineProperty(SequenceParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SequenceParser.EOF = antlr4.Token.EOF;
SequenceParser.DOCUMENT_NAME = 1;
SequenceParser.ACTOR = 2;
SequenceParser.OBJECT = 3;
SequenceParser.IS = 4;
SequenceParser.SEQUENCE = 5;
SequenceParser.ASK = 6;
SequenceParser.TELL = 7;
SequenceParser.REPLIES = 8;
SequenceParser.IDENTIFIER = 9;
SequenceParser.COMMENT = 10;
SequenceParser.STRING = 11;
SequenceParser.NEWLINE = 12;
SequenceParser.SKIPPING = 13;
SequenceParser.INDENT = 14;
SequenceParser.DEDENT = 15;

SequenceParser.RULE_root = 0;
SequenceParser.RULE_documentMeta = 1;
SequenceParser.RULE_documentName = 2;
SequenceParser.RULE_definitions = 3;
SequenceParser.RULE_actorDefinition = 4;
SequenceParser.RULE_objectDefinition = 5;
SequenceParser.RULE_sequenceDefinition = 6;
SequenceParser.RULE_sequenceBlock = 7;
SequenceParser.RULE_sequenceMessage = 8;
SequenceParser.RULE_string = 9;

function RootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_root;
    return this;
}

RootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RootContext.prototype.constructor = RootContext;

RootContext.prototype.documentMeta = function() {
    return this.getTypedRuleContext(DocumentMetaContext,0);
};

RootContext.prototype.definitions = function() {
    return this.getTypedRuleContext(DefinitionsContext,0);
};

RootContext.prototype.EOF = function() {
    return this.getToken(SequenceParser.EOF, 0);
};

RootContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SequenceParser.NEWLINE);
    } else {
        return this.getToken(SequenceParser.NEWLINE, i);
    }
};


RootContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterRoot(this);
	}
};

RootContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitRoot(this);
	}
};




SequenceParser.RootContext = RootContext;

SequenceParser.prototype.root = function() {

    var localctx = new RootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SequenceParser.RULE_root);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SequenceParser.NEWLINE) {
            this.state = 20;
            this.match(SequenceParser.NEWLINE);
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
        this.documentMeta();
        this.state = 27;
        this.definitions();
        this.state = 28;
        this.match(SequenceParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DocumentMetaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_documentMeta;
    return this;
}

DocumentMetaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentMetaContext.prototype.constructor = DocumentMetaContext;

DocumentMetaContext.prototype.documentName = function() {
    return this.getTypedRuleContext(DocumentNameContext,0);
};

DocumentMetaContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterDocumentMeta(this);
	}
};

DocumentMetaContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitDocumentMeta(this);
	}
};




SequenceParser.DocumentMetaContext = DocumentMetaContext;

SequenceParser.prototype.documentMeta = function() {

    var localctx = new DocumentMetaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SequenceParser.RULE_documentMeta);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.documentName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DocumentNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_documentName;
    return this;
}

DocumentNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocumentNameContext.prototype.constructor = DocumentNameContext;

DocumentNameContext.prototype.DOCUMENT_NAME = function() {
    return this.getToken(SequenceParser.DOCUMENT_NAME, 0);
};

DocumentNameContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

DocumentNameContext.prototype.NEWLINE = function() {
    return this.getToken(SequenceParser.NEWLINE, 0);
};

DocumentNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterDocumentName(this);
	}
};

DocumentNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitDocumentName(this);
	}
};




SequenceParser.DocumentNameContext = DocumentNameContext;

SequenceParser.prototype.documentName = function() {

    var localctx = new DocumentNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SequenceParser.RULE_documentName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(SequenceParser.DOCUMENT_NAME);
        this.state = 33;
        this.string();
        this.state = 35;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 34;
            this.match(SequenceParser.NEWLINE);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefinitionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_definitions;
    return this;
}

DefinitionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefinitionsContext.prototype.constructor = DefinitionsContext;

DefinitionsContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SequenceParser.NEWLINE);
    } else {
        return this.getToken(SequenceParser.NEWLINE, i);
    }
};


DefinitionsContext.prototype.actorDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActorDefinitionContext);
    } else {
        return this.getTypedRuleContext(ActorDefinitionContext,i);
    }
};

DefinitionsContext.prototype.objectDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectDefinitionContext);
    } else {
        return this.getTypedRuleContext(ObjectDefinitionContext,i);
    }
};

DefinitionsContext.prototype.sequenceDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SequenceDefinitionContext);
    } else {
        return this.getTypedRuleContext(SequenceDefinitionContext,i);
    }
};

DefinitionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterDefinitions(this);
	}
};

DefinitionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitDefinitions(this);
	}
};




SequenceParser.DefinitionsContext = DefinitionsContext;

SequenceParser.prototype.definitions = function() {

    var localctx = new DefinitionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SequenceParser.RULE_definitions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SequenceParser.ACTOR) | (1 << SequenceParser.OBJECT) | (1 << SequenceParser.SEQUENCE) | (1 << SequenceParser.NEWLINE))) !== 0)) {
            this.state = 41;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case SequenceParser.NEWLINE:
                this.state = 37;
                this.match(SequenceParser.NEWLINE);
                break;
            case SequenceParser.ACTOR:
                this.state = 38;
                this.actorDefinition();
                break;
            case SequenceParser.OBJECT:
                this.state = 39;
                this.objectDefinition();
                break;
            case SequenceParser.SEQUENCE:
                this.state = 40;
                this.sequenceDefinition();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActorDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_actorDefinition;
    return this;
}

ActorDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActorDefinitionContext.prototype.constructor = ActorDefinitionContext;

ActorDefinitionContext.prototype.ACTOR = function() {
    return this.getToken(SequenceParser.ACTOR, 0);
};

ActorDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(SequenceParser.IDENTIFIER, 0);
};

ActorDefinitionContext.prototype.IS = function() {
    return this.getToken(SequenceParser.IS, 0);
};

ActorDefinitionContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ActorDefinitionContext.prototype.NEWLINE = function() {
    return this.getToken(SequenceParser.NEWLINE, 0);
};

ActorDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterActorDefinition(this);
	}
};

ActorDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitActorDefinition(this);
	}
};




SequenceParser.ActorDefinitionContext = ActorDefinitionContext;

SequenceParser.prototype.actorDefinition = function() {

    var localctx = new ActorDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SequenceParser.RULE_actorDefinition);
    try {
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 46;
            this.match(SequenceParser.ACTOR);
            this.state = 47;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 48;
            this.match(SequenceParser.IS);
            this.state = 49;
            this.string();
            this.state = 51;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 50;
                this.match(SequenceParser.NEWLINE);

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 53;
            this.match(SequenceParser.ACTOR);
            this.state = 54;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 56;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
            if(la_===1) {
                this.state = 55;
                this.match(SequenceParser.NEWLINE);

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_objectDefinition;
    return this;
}

ObjectDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectDefinitionContext.prototype.constructor = ObjectDefinitionContext;

ObjectDefinitionContext.prototype.OBJECT = function() {
    return this.getToken(SequenceParser.OBJECT, 0);
};

ObjectDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(SequenceParser.IDENTIFIER, 0);
};

ObjectDefinitionContext.prototype.IS = function() {
    return this.getToken(SequenceParser.IS, 0);
};

ObjectDefinitionContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ObjectDefinitionContext.prototype.NEWLINE = function() {
    return this.getToken(SequenceParser.NEWLINE, 0);
};

ObjectDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterObjectDefinition(this);
	}
};

ObjectDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitObjectDefinition(this);
	}
};




SequenceParser.ObjectDefinitionContext = ObjectDefinitionContext;

SequenceParser.prototype.objectDefinition = function() {

    var localctx = new ObjectDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SequenceParser.RULE_objectDefinition);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.match(SequenceParser.OBJECT);
            this.state = 61;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 62;
            this.match(SequenceParser.IS);
            this.state = 63;
            this.string();
            this.state = 65;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 64;
                this.match(SequenceParser.NEWLINE);

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.match(SequenceParser.OBJECT);
            this.state = 68;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 70;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
            if(la_===1) {
                this.state = 69;
                this.match(SequenceParser.NEWLINE);

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SequenceDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_sequenceDefinition;
    return this;
}

SequenceDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceDefinitionContext.prototype.constructor = SequenceDefinitionContext;

SequenceDefinitionContext.prototype.SEQUENCE = function() {
    return this.getToken(SequenceParser.SEQUENCE, 0);
};

SequenceDefinitionContext.prototype.IDENTIFIER = function() {
    return this.getToken(SequenceParser.IDENTIFIER, 0);
};

SequenceDefinitionContext.prototype.sequenceBlock = function() {
    return this.getTypedRuleContext(SequenceBlockContext,0);
};

SequenceDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterSequenceDefinition(this);
	}
};

SequenceDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitSequenceDefinition(this);
	}
};




SequenceParser.SequenceDefinitionContext = SequenceDefinitionContext;

SequenceParser.prototype.sequenceDefinition = function() {

    var localctx = new SequenceDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SequenceParser.RULE_sequenceDefinition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(SequenceParser.SEQUENCE);
        this.state = 75;
        this.match(SequenceParser.IDENTIFIER);
        this.state = 76;
        this.sequenceBlock();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SequenceBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_sequenceBlock;
    return this;
}

SequenceBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceBlockContext.prototype.constructor = SequenceBlockContext;

SequenceBlockContext.prototype.NEWLINE = function() {
    return this.getToken(SequenceParser.NEWLINE, 0);
};

SequenceBlockContext.prototype.INDENT = function() {
    return this.getToken(SequenceParser.INDENT, 0);
};

SequenceBlockContext.prototype.DEDENT = function() {
    return this.getToken(SequenceParser.DEDENT, 0);
};

SequenceBlockContext.prototype.sequenceMessage = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SequenceMessageContext);
    } else {
        return this.getTypedRuleContext(SequenceMessageContext,i);
    }
};

SequenceBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterSequenceBlock(this);
	}
};

SequenceBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitSequenceBlock(this);
	}
};




SequenceParser.SequenceBlockContext = SequenceBlockContext;

SequenceParser.prototype.sequenceBlock = function() {

    var localctx = new SequenceBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SequenceParser.RULE_sequenceBlock);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.match(SequenceParser.NEWLINE);
        this.state = 79;
        this.match(SequenceParser.INDENT);
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SequenceParser.IDENTIFIER) {
            this.state = 80;
            this.sequenceMessage();
            this.state = 85;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 86;
        this.match(SequenceParser.DEDENT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SequenceMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_sequenceMessage;
    return this;
}

SequenceMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceMessageContext.prototype.constructor = SequenceMessageContext;

SequenceMessageContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SequenceParser.IDENTIFIER);
    } else {
        return this.getToken(SequenceParser.IDENTIFIER, i);
    }
};


SequenceMessageContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

SequenceMessageContext.prototype.ASK = function() {
    return this.getToken(SequenceParser.ASK, 0);
};

SequenceMessageContext.prototype.TELL = function() {
    return this.getToken(SequenceParser.TELL, 0);
};

SequenceMessageContext.prototype.REPLIES = function() {
    return this.getToken(SequenceParser.REPLIES, 0);
};

SequenceMessageContext.prototype.NEWLINE = function() {
    return this.getToken(SequenceParser.NEWLINE, 0);
};

SequenceMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterSequenceMessage(this);
	}
};

SequenceMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitSequenceMessage(this);
	}
};




SequenceParser.SequenceMessageContext = SequenceMessageContext;

SequenceParser.prototype.sequenceMessage = function() {

    var localctx = new SequenceMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SequenceParser.RULE_sequenceMessage);
    var _la = 0; // Token type
    try {
        this.state = 101;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 89;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SequenceParser.ASK) | (1 << SequenceParser.TELL) | (1 << SequenceParser.REPLIES))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 90;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 91;
            this.string();
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SequenceParser.NEWLINE) {
                this.state = 92;
                this.match(SequenceParser.NEWLINE);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 96;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SequenceParser.ASK) | (1 << SequenceParser.TELL) | (1 << SequenceParser.REPLIES))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 97;
            this.match(SequenceParser.IDENTIFIER);
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SequenceParser.NEWLINE) {
                this.state = 98;
                this.match(SequenceParser.NEWLINE);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SequenceParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(SequenceParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof SequenceListener ) {
        listener.exitString(this);
	}
};




SequenceParser.StringContext = StringContext;

SequenceParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SequenceParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(SequenceParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SequenceParser = SequenceParser;
