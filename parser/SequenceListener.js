// Generated from ./parser/Sequence.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SequenceParser.
function SequenceListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SequenceListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SequenceListener.prototype.constructor = SequenceListener;

// Enter a parse tree produced by SequenceParser#root.
SequenceListener.prototype.enterRoot = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#root.
SequenceListener.prototype.exitRoot = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#documentMeta.
SequenceListener.prototype.enterDocumentMeta = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#documentMeta.
SequenceListener.prototype.exitDocumentMeta = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#documentName.
SequenceListener.prototype.enterDocumentName = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#documentName.
SequenceListener.prototype.exitDocumentName = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#definitions.
SequenceListener.prototype.enterDefinitions = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#definitions.
SequenceListener.prototype.exitDefinitions = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#actorDefinition.
SequenceListener.prototype.enterActorDefinition = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#actorDefinition.
SequenceListener.prototype.exitActorDefinition = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#objectDefinition.
SequenceListener.prototype.enterObjectDefinition = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#objectDefinition.
SequenceListener.prototype.exitObjectDefinition = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#sequenceDefinition.
SequenceListener.prototype.enterSequenceDefinition = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#sequenceDefinition.
SequenceListener.prototype.exitSequenceDefinition = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#sequenceBlock.
SequenceListener.prototype.enterSequenceBlock = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#sequenceBlock.
SequenceListener.prototype.exitSequenceBlock = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#sequenceMessage.
SequenceListener.prototype.enterSequenceMessage = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#sequenceMessage.
SequenceListener.prototype.exitSequenceMessage = function(ctx) {
};


// Enter a parse tree produced by SequenceParser#string.
SequenceListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by SequenceParser#string.
SequenceListener.prototype.exitString = function(ctx) {
};



exports.SequenceListener = SequenceListener;