//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import * as fs from 'fs';
import * as path from 'path';
import { DiagnosticError } from '../../src/analysis';
import { compile } from '../../src/index';

//
// The list of files that will be read as part of the integration test.
// Each file is expected to have a source and a matching destination file
//
const FILES = [
    'valid-with-comments',
    'valid-with-various-whitespace',
    'valid-sequence-message',
    'valid-participant-description',
    'valid-multi-sequence',
];

const INVALID_FILES = [
    { source: 'invalid-redeclaring-actor', expectedDiagnostics: 1 },
    { source: 'invalid-redeclaring-object', expectedDiagnostics: 1 },
    { source: 'invalid-redeclaring-sequence', expectedDiagnostics: 1 },
    { source: 'invalid-redeclaring-foo', expectedDiagnostics: 1 },
    { source: 'invalid-missing-source-identifier', expectedDiagnostics: 1 },
    { source: 'invalid-multiple-errors', expectedDiagnostics: 3 },
    { source: 'invalid-syntax-missing-identifiers', expectedDiagnostics: 3 },
    { source: 'invalid-syntax-sequence-messages', expectedDiagnostics: 1 }
];

const readSource = (file) => fs.readFileSync(path.join('./__tests__/parsing/source/', file + '.seq'), 'utf-8');

describe('Integration', () => {

    FILES.forEach(f => {
        it(`should compile ${f}.seq with no expected errors`, () => {
            const source = readSource(f);
            const result = compile(source);
            expect(result.isValid()).toBeTruthy();
        });
    });

    INVALID_FILES.forEach(t => {
        describe(`compiling ${t.source}.seq`, () => {
            let result;
            beforeEach(() => {
                const source = readSource(t.source);
                result = compile(source);
            });
            it('should be invalid', () => {
                expect(result.isValid()).toBeFalsy();
            });
            it(`should have ${t.expectedDiagnostics} diagnostic messages`, () => {
                if(result.diagnostics.length > t.expectedDiagnostics) {
                    result.diagnostics.forEach(d => console.log(`    Did not expect: ${d.message}`));
                }
                expect(result.diagnostics.length).toEqual(t.expectedDiagnostics);
            });
        });
    });
});

describe('Compilation result of a valid sequence file', () => {
    let result;
    beforeEach(() => {
        result = compile(
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
    });

    it('should be valid', () => {
        expect(result.isValid).toBeTruthy();
    });

    it('should contain the symbol table', () => {
        // Make sure at least one of the symbol is included
        expect(result.symbols.resolve('Alice')).toBeDefined();
    });

    it('should contain generated output', () => {
        // Just validate that is looks like an SVG
        expect(result.output).toContain('<svg');
    });
});

describe('Parser syntax errors', () => {
    const errorTypes = (result) => result.diagnostics.map(d => d.type);
    const errorCodes = (result) => result.diagnostics.map(d => d.code);
    const errorPos = (result) => result.diagnostics.map(d => { return { line: d.line, column: d.column } });
    const errorOffendingSymbols = (result) => result.diagnostics.map(d => { return { offendingSymbol: d.offendingSymbol } });
    const errorMessages = (result) => result.diagnostics.map(d => { return { message: d.message } });

    describe('fora single error', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Unit test"\n' +
                'Actor\n' +
                '');
        });
        
        it('should be classified as error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError
            ]);
        });

        it('should have code SEQ-000', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-000'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 3, column: 0 }
            ]);
        });

        it('should not contain the offending symbol', () => {
            expect( errorOffendingSymbols(result) ).toEqual([
                { offendingSymbol: undefined }
            ]);
        });

        it('should have some error message', () => {
            // Error messages for syntax is generated by ANTLR, but we append the error position
            expect( errorMessages(result) ).toEqual([
                { message: "no viable alternative at input 'Actor\\n' at line: 3 column: 0" }
            ]);
        });
    });

    describe('for multiple errors', () => {
        let result;
        beforeEach(() => {
            result = compile(
                'Name "Unit test"\n' +
                'Actor Alice\n' +
                'Object\n' + 
                '\n' +
                'Sequence Test\n' +
                '  Alice to Bob "This is malformed"\n');
        });

        it('should be classified as error', () => {
            expect( errorTypes(result) ).toEqual([
                DiagnosticError,
                DiagnosticError
            ]);
        });

        it('should have code SEQ-000', () => {
            expect( errorCodes(result) ).toEqual([
                'SEQ-000',
                'SEQ-000'
            ]);
        });

        it('should contain the position of the offending node', () => {
            expect( errorPos(result) ).toEqual([
                { line: 5, column: 0 },
                { line: 6, column: 8 }
            ]);
        });
    });
});
