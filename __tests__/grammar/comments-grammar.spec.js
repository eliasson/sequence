//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { createParser } from '../test-utils';

describe('Comment grammar', () => {
    const parse = (src) => createParser(src).documentName();

    describe('parse # Hello', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Name "FOO"\n' +
                '# Hello !()#"!\n' +
                '');
        });

        it('without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });
    });
});
