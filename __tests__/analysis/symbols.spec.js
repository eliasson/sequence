//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { parse } from '../../src/index';
import { SymbolTable, Symbol, ObjectDeclaration, ActorDeclaration, SequenceDeclaration, SymbolTableVisitor } from '../../src/symbols';
import { ActorNode } from '../../src/ast';

describe('Symbol', () => {
    it('throws error if name is missing', () => {
        expect(() => {
            new Symbol();
        }).toThrowError('Name is required for symbol');
    });
    it('can contain a Node', () => {
        const node = new ActorNode();
        const symbol = new Symbol("foo", node);
        expect(symbol.node).toEqual(node);
    });
});

describe('Symbol table', () => {
    let table;
    beforeEach(() => {
        table = new SymbolTable();
    });

    it('should be empty when initilized', () => {
        expect(table.size()).toEqual(0);
    });

    describe('when defining a new symbol', () => {
        it('should result increment size', () => {
            table.define(new ObjectDeclaration("bob"));
            expect(table.size()).toEqual(1);
        });

        it('should be successful', () => {
            const result = table.define(new ObjectDeclaration("bob"));
            expect(result).toBeTruthy();
        });
    });

    describe('when adding an identical symbol with an existing name', () => {
        beforeEach(() => {
            table.define(new ObjectDeclaration("bob"));
        });

        it('should be unsuccessful', () => {
            const result = table.define(new ObjectDeclaration("bob"));
            expect(result).toBeFalsy();
        });

        it('should not increment size', () => {
            expect(table.size()).toEqual(1);
        });
    });

    describe('when adding an different type symbol with an existing name', () => {
        beforeEach(() => {
            table.define(new ObjectDeclaration("bob"));
        });

        it('should be unsuccessful', () => {
            const result = table.define(new ActorDeclaration("bob"));
            expect(result).toBeFalsy();
        });

        it('should not increment size', () => {
            expect(table.size()).toEqual(1);
        });
    });

    describe('when adding different named symbols', () => {
        let result1, result2, result3;
        beforeEach(() => {
            result1 = table.define(new ActorDeclaration("Alice"));
            result2 = table.define(new ObjectDeclaration("Bob"));
            result3 = table.define(new SequenceDeclaration("Test"));
        });

        it('should be successful', () => {
            expect(result1).toBeTruthy();
            expect(result2).toBeTruthy();
            expect(result3).toBeTruthy();
        });

        it('should result in a size of three', () => {
            expect(table.size()).toEqual(3);
        });
    });

    describe('when resolving a non-existing symbol', () => {
        it('should return undefined', () => {
            expect(table.resolve("jane")).toBeUndefined();
        });
    });

    describe('when resolving an existing symbol', () => {
        let symbol;
        beforeEach(() => {
            symbol = new ActorDeclaration("jane");
            table.define(symbol);
        });
        it('should return the symbol', () => {
            expect(table.resolve("jane")).toEqual(symbol);
        });

        it('should contain the symbol', () => {
            expect(table.contains("jane")).toBeTruthy();
        });
    });
});

describe('Generation a symbol table', () => {
    describe('for source without definitions', () => {
        let symbols;
        beforeEach(() => {
            const result = parse(
                'Name "Test"\n' +
                '');
            symbols = new SymbolTableVisitor()
                .withAst(result.ast)
                .generate();
        });

        it('should not contain any symbols', () => {
            expect(symbols.size()).toEqual(0);
        });
    });

    describe('for source with participants', () => {
        let result, symbols;
        beforeEach(() => {
            result = parse(
                'Name "Test"\n' +
                'Actor Alice\n' +
                'Object Bob\n' +
                '');
            symbols = new SymbolTableVisitor()
                .withAst(result.ast)
                .generate();
        });

        it('should have an Actor declaration for Alice', () => {
            expect(symbols.resolve('Alice')).toBeInstanceOf(ActorDeclaration);
        });

        it('should have an Object declaration for Bob', () => {
            expect(symbols.resolve('Bob')).toBeInstanceOf(ObjectDeclaration);
        });

        it('should have the Node references in the sybmol', () => {
            expect(symbols.resolve('Alice').node).toEqual(result.ast.getActors()[0]);
        });
    });

    describe('for sequence definition', () => {
        let result, symbols;
        beforeEach(() => {
            result = parse(
                'Name "Test"\n' +
                'Actor Alice\n' +
                'Object Bob\n' +
                '\n' +
                'Sequence Hello\n' +
                '  Alice ask Bob "Hello"\n' +
                '\n' +
                'Sequence Goodbye\n' +
                '  Bob ask Alice "Goodbye"\n' +
                '');
            symbols = new SymbolTableVisitor()
                .withAst(result.ast)
                .generate();
        });

        it('should have a Sequence declaration for Hello', () => {
            expect(symbols.resolve('Hello')).toBeInstanceOf(SequenceDeclaration);
        });
        it('should have a Sequence declaration for Hello', () => {
            expect(symbols.resolve('Goodbye')).toBeInstanceOf(SequenceDeclaration);
        });
    });
});
