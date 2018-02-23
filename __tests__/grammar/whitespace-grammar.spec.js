//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { createParser } from '../test-utils';

describe('Whitespace in grammar', () => {
    const parse = (src) => createParser(src, false).root();

    it('should allow multiple newline at start of file', () => {
        const result = parse(
            '\n' +
            '\n' +
            '\n' +
            'Name "FOO"\n' +
            '\n');
        expect(result.parser._syntaxErrors).toEqual(0);
    });

    it('should allow multiple newlines at end of file', () => {
        const result = parse(
            'Name "FOO"\n' +
            '\n' +
            '\n' +
            '\n' +
            '\n');
        expect(result.parser._syntaxErrors).toEqual(0);
    });

    it('should allow newline between Actors', () => {
        const result = parse(
            'Name "FOO"\n' +
            '\n' +
            'Actor Foo\n' +
            '\n' +
            'Actor Bar\n' +
            '\n');
        expect(result.parser._syntaxErrors).toEqual(0);
    });

    it('should allow multiple newlines between Actors and Objects', () => {
        const result = parse(
            'Name "FOO"\n' +
            '\n' +
            'Actor Foo\n' +
            'Actor Bar\n' +
            '\n' +
            '\n' +
            'Object One\n' +
            'Object Two\n' +
            '\n');
        expect(result.parser._syntaxErrors).toEqual(0);
    });

    it('should allow newline before sequence', () => {
        const result = parse(
            'Name "FOO"\n' +
            '\n' +
            'Object One\n' +
            'Object Two\n' +
            '\n' +
            '\n' +
            '\n' +
            'Sequence FOO\n' +
            '    Alice ask Bob\n' +
            '    Alice ask Bob\n' +
            '\n'
        );
        expect(result.parser._syntaxErrors).toEqual(0);
    });

    it('should allow newline within a sequence', () => {
        const result = parse(
            'Name "FOO"\n' +
            '\n' +
            'Object One\n' +
            'Object Two\n' +
            '\n' +
            '\n' +
            '\n' +
            'Sequence FOO\n' +
            '\n' +
            '    Alice ask Bob\n' +
            '\n' +
            '    Alice ask Bob\n' +
            '\n'
        );
        expect(result.parser._syntaxErrors).toEqual(0);
    });
});
