//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { createParser } from '../test-utils';

describe('Name grammar', () => {
    const parse = (src) => createParser(src).documentName();

    describe('parse "Name \"foo\""', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Name "foo"\n' +
                '');
        });

        it('without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('with "foo" as the name', () => {
            expect(result.children[1].children[0].symbol.text).toEqual('"foo"');
        });
    });
});
