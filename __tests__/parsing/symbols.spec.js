//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { SymbolTable, ObjectDeclaration, ActorDeclaration, SequenceDeclaration } from '../../src/symbols';

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
        it('should return the symbol', () => {
            const symbol = new ActorDeclaration("jane");
            table.define(symbol);
            expect(table.resolve("jane")).toEqual(symbol);
        });
    });
});
