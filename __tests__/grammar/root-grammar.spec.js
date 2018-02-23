//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { createParser } from '../test-utils';

describe('Root grammar', () => {
    const parse = (src) => createParser(src).root();

    it('should fail to parse an empty file', () => {
        const result = parse('');
        expect(result.parser._syntaxErrors).toEqual(1);
    });

    it('should succeed on parsing only name', () => {
        const result = parse('Name "FOO"');
        expect(result.parser._syntaxErrors).toEqual(0);
    });
});
