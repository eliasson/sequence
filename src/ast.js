//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//
import { SequenceParser } from '../parser/SequenceParser';
import { SequenceListener } from '../parser/SequenceListener';

// This is the Abstract Syntax Tree constructed as a result of parsing, and
// while walking the parser tree. It is a more abstract version of what is
// parsed. Closer to a domain model, but still with attributes refering to
// the parsed text (in order to provide error details or goto defintion).

export class Node {
    constructor() {
        this.children = [];
        this.value = undefined;
        // The first line read by the parser will be 1
        this.line = 0;
        // In contrast with the line value, the column is zero based
        this.column = 0;
    }

    addChild(node) {
        this.children.push(node);
    }

    accept(visitor) {
        visitor.visit(this);
        this.children.forEach(c => c.accept(visitor));
    }
}

/**
 * Not a real node, just a base class for other Nodes (aka. abstract)
 */
class NodeWithIdentifier extends Node {
    constructor() {
        super();
        this.identifier = undefined;
    }

    getIdentifier() {
        return this.identifier;
    }
}

/**
 * The root node represents the sequence document, containing the meta-
 * data information, actors and the defined sequence flows.
 */
export class RootNode extends Node {
    /**
     * Get the NameNode if it exists on this root, else undefined is
     * returned.
     */
    getNameNode() {
        return this.children.find(n => n instanceof NameNode);
    }

    getActors() {
        return this.children.filter(n => n instanceof ActorNode);
    }

    getObjects() {
        return this.children.filter(n => n instanceof ObjectNode);
    }

    getSequences() {
        return this.children.filter(n => n instanceof SequenceNode);
    }
}

/**
 * Represents an identifier of something (such as a sequence or a
 * participant).
 *
 * E.g. the name of the actor is an identifier
 *
 *   Actor Alice
 */
export class IdentifierNode extends Node {
}

/**
 * Represents a string value, that can either be from a single line
 * or a multi-line string.
 *
 * The `value` attribute is the string with whatever quotes used in the source
 * while the `getUnquoted` method returns the string without quotes.
 */
export class StringNode extends Node {
    getUnquoted() {
        let v = this.value;
        if (v.startsWith('\'')) {
            v = v.replace(/^\'\'\'((.|\n|\r)*)\'\'\'$/, '$1');
            v = v.replace(/^\'(.+)\'$/, '$1');
        } else if (v.startsWith('"')) {
            v = v.replace(/^"""((.|\n|\r)*)"""$/, '$1');
            v = v.replace(/^"(.+)"$/, '$1');
        }
        // Remove any leading whitespace on line within the string
        v = v.replace(/\n(\s)+/g, '\n');
        return v.trim();
    }
}

/**
 * The declaration of the document name.
 */
export class NameNode extends Node {
    getString() {
        const nodes = this.children.filter(n => n instanceof StringNode);
        if (nodes && nodes.length > 0) return nodes[0];
        return undefined;
    }
}

/**
 * The definition of an actor, where the string at the end is the
 * description.
 * 
 *   Actor Alice is "A user"
 */
export class ActorNode extends NodeWithIdentifier {
    getDescription() {
        const nodes = this.children.filter(n => n instanceof StringNode);
        if (nodes && nodes.length > 0) return nodes[0];
        return undefined;
    }
}

/**
 * The definition of an object, where the string at the end is the
 * description.
 * 
 *   Object Bob is "A fake system"
 */
export class ObjectNode extends NodeWithIdentifier {
    getDescription() {
        const nodes = this.children.filter(n => n instanceof StringNode);
        if (nodes && nodes.length > 0) return nodes[0];
        return undefined;
    }
}

/**
 * A Sequence of messages between one or more participants. This is what makes
 * a sequence diagram. Looks like this in the DSL:
 * 
 *      Sequence Hello
 *          Alice tell Bob "Sudo, make me a sandwich"
 *          Alice tell Charlie "Hello"
 */
export class SequenceNode extends NodeWithIdentifier {
    getMessages() {
        return this.children.filter(n => n instanceof MessageNode);
    }
}

// Defines the different types of messages a `MessageNode` can
// represent.
export const SynchronousMessageType = 'synchronous';
export const AsynchronousMessageType = 'asynchronous';
export const ReplyMessageType = 'reply';

/**
 * The message that is exchanged by two participants, both of
 * which are refered to by their identifiers (names)
 * 
 * Looks like this in the DSL:
 * 
 *      Alice ask Bob "Sudo, make me a sandwich"
 * 
 * Three types of messages exists:
 * 
 * - synchronous (default)
 * - asynchronous
 * - reply
 */
export class MessageNode extends Node {
    constructor() {
        super();
        this.messageType = SynchronousMessageType;
    }

    getMessageType() {
        return this.messageType;
    }

    getSourceIdentifier() {
        return this.source;
    }

    getDestinationIdentifier() {
        return this.destination;
    }

    getString() {
        const nodes = this.children.filter(n => n instanceof StringNode);
        if (nodes && nodes.length > 0) return nodes[0];
        return undefined;
    }
}

/**
 * A visitor that is used to traverse the generated Sequence AST. This visitor
 * should be used prior to use any ANTLR visitor, since the ANTÖR visitor is a
 * visitor for the Parser Tree, not the AST.
 * 
 * The visitor is used by calling `node.accept(visitor)` for the AST branch
 * that should be visited.
 */
export class AstVisitor {
    visit(node) {}
}

/**
 * The Sequence listener is a parser listener that gets called by the ANTLR
 * parser for the entering and exiting of each parser rule (not the lexer
 * rules).
 * 
 * This is used to build an AST representation of the sequence flow, using
 * the implementing Node classes.
 * 
 * The AST is later used for semantic analysis and finally for the
 * transformation to an image representation of the sequence flow.
 */
export class IntSequenceListener extends SequenceListener {
    constructor() {
        super();
        // This stack contains the parent hiearchy of the Node currently
        // being parsed. I.e. as new ndes are parsed they gets pushed and
        // later poped from this stack.
        this.stack = [];
    }

    pushNode(node) {
        this.stack.push(node);
    }

    popNode() {
        return this.stack.pop();
    }

    addChild(node) {
        this.stack[this.stack.length-1].addChild(node);
    }

    parent() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length-1];
        }
        else {
            return undefined;
        }
    }

    /**
     * Creates an IdentifierNode from a parser context child of the
     * given position (index)
     */
    toIdentifier(index, ctx) {
        const node = new IdentifierNode();
        node.line = ctx.children[index].symbol.line;
        node.column = ctx.children[index].symbol.column;
        node.value = ctx.children[index].symbol.text;
        return node;
    }

    /**
     * Adds a new node of type T with the common attributes setup
     * to the current stack of nodes
     */
    enter(T, ctx) {
        const n = new T();
        n.line = ctx.start.line;
        n.column = ctx.start.column;
        n.value = ctx.start.text;
        this.pushNode(n);
        return n;
    }

    getRoot() {
        return this.root;
    }

    enterRoot(ctx) {
        this.root = this.enter(RootNode, ctx);
    }

    enterDocumentName(ctx) {
        this.enter(NameNode, ctx);
    }

    exitDocumentName(ctx) {
        const me = this.popNode();
        this.addChild(me);
    }

    enterActorDefinition(ctx) {
        this.enter(ActorNode, ctx);
    }

    exitActorDefinition(ctx) {
        const me = this.popNode();

        if(!ctx.children) return;

        if(ctx.children.length > 1 && ctx.children[1].symbol.type === SequenceParser.IDENTIFIER) {
            me.identifier = this.toIdentifier(1, ctx);
        }
        this.addChild(me);
    }

    enterObjectDefinition(ctx) {
        this.enter(ObjectNode, ctx);
    }

    exitObjectDefinition(ctx) {
        const me = this.popNode();

        if(!ctx.children) return;

        if(ctx.children.length > 1 && ctx.children[1].symbol.type === SequenceParser.IDENTIFIER) {
            me.identifier = this.toIdentifier(1, ctx);
        }
        this.addChild(me);
    }

    enterSequenceDefinition(ctx) {
        this.enter(SequenceNode, ctx);
    }

    exitSequenceDefinition(ctx) {
        const me = this.popNode();

        if(!ctx.children) return;

        if(ctx.children.length > 1 && ctx.children[1].symbol.type === SequenceParser.IDENTIFIER) {
            me.identifier = this.toIdentifier(1, ctx);
        }
        this.addChild(me);
    }

    enterSequenceMessage(ctx) {
        this.enter(MessageNode, ctx);
    }

    exitSequenceMessage(ctx) {
        const me = this.popNode();

        if(!ctx.children) return;

        if(ctx.children.length > 0 && ctx.children[0].symbol.type === SequenceParser.IDENTIFIER) {
            me.source = this.toIdentifier(0, ctx);
        }

        if(ctx.children.length > 1) {
            const type = ctx.children[1].symbol.type || SequenceParser.ASL;
            switch(type) {
                case SequenceParser.TELL:
                    me.messageType = AsynchronousMessageType;
                    break;
                case SequenceParser.REPLIES:
                    me.messageType = ReplyMessageType;
                    break;
                case SequenceParser.ASL:
                default:
                    me.messageType = SynchronousMessageType;
                    break;
            }
        }

        if(ctx.children.length > 2 && ctx.children[2].symbol.type === SequenceParser.IDENTIFIER) {
            me.destination = this.toIdentifier(2, ctx);
        }
        this.addChild(me);
    }

    enterString(ctx) {
        this.enter(StringNode, ctx);
    }

    exitString(ctx) {
        const me = this.popNode();
        this.addChild(me);
    }
}
