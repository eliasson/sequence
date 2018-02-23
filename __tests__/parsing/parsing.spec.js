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

const readSource = (file) => fs.readFileSync(path.join('./__tests__/parsing/source/', file + '.seq'), 'utf-8');

describe('Integration', () => {
    FILES.forEach(f => {
        it(`should compile ${f}.seq with no expected errors`, () => {
            const source = readSource(f);
            const result = compile(source);
            expect(result.isValid).toBeTruthy();
        });
    });
});
