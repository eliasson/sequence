//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

export class ObjectDeclaration {
    constructor(name) {
        this.name = name;
    }
}

export class ActorDeclaration {
    constructor(name) {
        this.name = name;
    }
}

export class SequenceDeclaration {
    constructor(name) {
        this.name = name;
    }
}

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
