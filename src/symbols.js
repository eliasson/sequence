//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { AstVisitor, ActorNode, ObjectNode, SequenceNode } from "./ast";

export class Symbol {
    constructor(name, node) {
        if(!name) throw new Error('Name is required for symbol');

        this.name = name;
        this.node = node;
    }
}

export class ObjectDeclaration extends Symbol {}
export class ActorDeclaration extends Symbol {}
export class SequenceDeclaration extends Symbol {}

/**
 * Sequence use a global scope. That is all symbols (declarations of
 * actors, objects, sequences) is kept in a single table, so the identifers
 * of these types must be unique.
 */
export class SymbolTable {
    constructor() {
        this.table = new Map();
    }

    size() {
        return this.table.size;
    }

    define(symbol) {
        if(this.table.has(symbol.name)) return false

        this.table.set(symbol.name, symbol);
        return true;
    }

    resolve(name) {
        return this.table.get(name);
    }
}

/**
 * Traverse the full AST and define symbols for all definitions of:
 *
 * - Actor
 * - Object
 * - Sequence
 */
export class SymbolTableVisitor extends AstVisitor {
    constructor() {
        super();
        this.symbols = new SymbolTable();
    }

    withAst(ast) {
        this.ast = ast;
        return this;
    }

    generate() {
        this.ast.accept(this);
        return this.symbols;
    }

    visit(node) {
        if(node instanceof ActorNode) {
            this.symbols.define(new ActorDeclaration(node.identifier.value, node));
        } else if(node instanceof ObjectNode) {
            this.symbols.define(new ObjectDeclaration(node.identifier.value, node));
        } else if(node instanceof SequenceNode) {
            this.symbols.define(new SequenceDeclaration(node.identifier.value, node));
        }
    }
}
