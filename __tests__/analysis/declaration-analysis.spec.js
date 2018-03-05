//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//
import { compile } from '../../src/index';
import { SymbolTable, Symbol, ObjectDeclaration, ActorDeclaration, SequenceDeclaration, SymbolTableVisitor } from '../../src/symbols';
import { DiagnosticError } from '../../src/analysis';

describe('Declaration analysis', () => {
    const errorTypes = (result) => result.diagnostics.map(d => d.type);
    const errorCodes = (result) => result.diagnostics.map(d => d.code);
    const errorPos = (result) => result.diagnostics.map(d => { return { line: d.line, column: d.column } });
    const errorOffendingSymbols = (result) => result.diagnostics.map(d => { return { offendingSymbol: d.offendingSymbol } });
    const errorMessages = (result) => result.diagnostics.map(d => { return { message: d.message } });

    describe('for an Actor with already existing identiifer', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Actor Alice\n' +
                'Actor Alice\n' +
                '');
        });

        it('should be classified as an error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError
            ]);
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-001'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 3, column: 6 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Alice' }
            ]);
        });

        it('should use correct error message', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'A existing Actor is declared using this name at line: 2 column: 6' }
            ]);
        });
    });

    describe('for an Object with already existing identiifer', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Object Bob\n' +
                'Object Bob\n' +
                '');
        });

        it('should be classified as an error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError
            ]);
        });

        it('should report error with code SEQ-001', () => {
            const errors = result.diagnostics.map(d => d.code);
            expect( errorCodes(result) ).toEqual([
                'SEQ-001'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 3, column: 7 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Bob' }
            ]);
        });

        it('should use correct error message', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'A existing Object is declared using this name at line: 2 column: 7' }
            ]);
        });
    });

    describe('for an Actor with an existing Object with same identiifer', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                '\n' +
                'Actor Sorry\n' +
                'Object Sorry\n' +
                '');
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-001'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 4, column: 7 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Sorry' }
            ]);
        });

        it('should use correct error message', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'A existing Actor is declared using this name at line: 3 column: 6' }
            ]);
        });
    });

    describe('for a Sequence with already existing identiifer', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Actor Alice\n' +
                'Object Bob\n' +
                '\n' +
                'Sequence Test\n' +
                '    Alice tell Bob "Hello"\n' +
                '\n' +
                'Sequence Test\n' +
                '    Alice tell Bob "Something else"\n' +
                '');
        });

        it('should be classified as an error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError
            ]);
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-001'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 8, column: 9 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Test' }
            ]);
        });

        it('should use correct error message', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'A existing Sequence is declared using this name at line: 5 column: 9' }
            ]);
        });
    });

    describe('for a Sequence with same identiifer as Actor', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Actor Alice\n' +
                'Object Bob\n' +
                '\n' +
                'Sequence Alice\n' +
                '    Alice tell Bob "Hello"\n' +
                '');
        });

        it('should be classified as an error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError
            ]);
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-001'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 5, column: 9 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Alice' }
            ]);
        });
    });

    describe('for multiple usages with already existing identiifer', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Actor Test\n' +
                'Object Test\n' +
                '\n' +
                'Sequence Test\n' +
                '    Test tell Test "Hello"\n' +
                '\n' +
                'Sequence Test\n' +
                '    Test tell Test "Something else"\n' +
                '');
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-001',
                'SEQ-001',
                'SEQ-001',
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 3, column: 7 },
                { line: 5, column: 9 },
                { line: 8, column: 9 },
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Test' },
                { offendingSymbol: 'Test' },
                { offendingSymbol: 'Test' },
            ]);
        });

        it('should use correct error messages', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'A existing Actor is declared using this name at line: 2 column: 6' },
                { message: 'A existing Actor is declared using this name at line: 2 column: 6' },
                { message: 'A existing Actor is declared using this name at line: 2 column: 6' }
            ]);
        });
    });

    describe("for a Message with missing source participant", () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Object One\n' +
                'Object Two\n' +
                '\n' +
                'Sequence Test\n' +
                '    Zero tell One "Plus one"\n' +
                '');
        });

        it('should be classified as an error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError
            ]);
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-002'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 6, column: 4 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Zero' }
            ]);
        });

        it('should use correct error message', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'No participant defined Zero could be found' }
            ]);
        });
    });

    describe("for a Message with missing destination participant", () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Object One\n' +
                'Object Two\n' +
                '\n' +
                'Sequence Test\n' +
                '    Two tell Three "Plus one"\n' +
                '');
        });

        it('should be classified as an error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError
            ]);
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-002'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 6, column: 13 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Three' }
            ]);
        });

        it('should use correct error message', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'No participant defined Three could be found' }
            ]);
        });
    });

    describe("for a Message with missing both participants", () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Test"\n' +
                'Object One\n' +
                'Object Two\n' +
                '\n' +
                'Sequence Test\n' +
                '    Zero tell Three "Failure"\n' +
                '');
        });

        it('should be classified as an error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError,
                DiagnosticError
            ]);
        });

        it('should report error with code SEQ-001', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-002',
                'SEQ-002'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 6, column: 4 },
                { line: 6, column: 14 }
            ]);
        });

        it('should contain the offending symbol name', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: 'Zero' },
                { offendingSymbol: 'Three' }
            ]);
        });

        it('should use correct error message', () => {
            expect( errorMessages(result) ).toEqual([
                { message: 'No participant defined Zero could be found' },
                { message: 'No participant defined Three could be found' }
            ]);
        });
    });
});
