//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import * as fs from 'fs';
import * as path from 'path';
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
    { source: 'invalid-multiple-errors', expectedDiagnostics: 3 }
]

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
            '  Alice tell Bob "Hello"\n' +
            '\n' +
            'Sequence Goodbye\n' +
            '  Bob tell Alice "Goodbye"\n' +
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
