//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { createParser } from '../test-utils';

describe('Sequence grammar', () => {
    const parse = (src) => createParser(src, false).sequenceDefinition();

    it('should succeed for the smallest squence', () => {
        const result = parse(
            'Sequence FOO\n' +
            '    Alice tell Bob\n' +
            '    Alice tell Bob\n' +
            '');
        expect(result.parser._syntaxErrors).toEqual(0);
    });

    it('should parse messages with with text', () => {
        const result = parse(
            'Sequence Hello\n' +
            '  Alice ask Bob "Hello"\n' +
            '');
        expect(result.parser._syntaxErrors).toEqual(0);
    });

    it('should parse messages with with multiple text rows', () => {
        const result = parse(
            'Sequence Hello\n' +
            '  Alice ask Bob """\n' +
            '    Hello' +
            '    There' +
            '    """' +
            '');
        expect(result.parser._syntaxErrors).toEqual(0);
    });
});
