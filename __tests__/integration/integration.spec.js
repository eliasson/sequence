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
    'minimal',
    'participants',
    'greeting',
    'multi-sequences',
    'full',
    'many-participants'
];

const readSource = (file) => fs.readFileSync(path.join('./__tests__/integration/source/', file + '.seq'), 'utf-8');
const readDest = (file) => fs.readFileSync(path.join('./__tests__/integration/dest/', file + '.svg'), 'utf-8');

describe('Integration', () => {
    FILES.forEach(f => {
        it(`should compile ${f}.seq to ${f}.svg`, () => {
            const source = readSource(f);
            const dest = readDest(f);
            const result = compile(source);

            // TODO: Can we match content and ignore whitespace and newline?
            expect(result.output).toEqual(dest);
        });
    });
});
