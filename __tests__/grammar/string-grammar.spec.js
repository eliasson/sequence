//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { createParser } from '../test-utils';

describe('String grammar', () => {
    const parse = (src) => createParser(src).string();

    describe('parse a double-quoted string', () => {
        let result;
        beforeEach(() => { 
            result = parse('"this is a string"');
        });

        it('without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('with correct content', () => {
            expect(result.children[0].symbol.text).toEqual('"this is a string"');
        });
    });

    describe('parse a single-quoted string', () => {
        let result;
        beforeEach(() => { 
            result = parse("'this is a string'");
        });

        it('without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('with correct content', () => {
            expect(result.children[0].symbol.text).toEqual("'this is a string'");
        });
    });

    describe('parse a tripple single-quoted string', () => {
        let result;
        beforeEach(() => { 
            result = parse('"""this is a string"""');
        });

        it('without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('with correct content', () => {
            expect(result.children[0].symbol.text).toEqual('"""this is a string"""');
        });
    });

    describe('parse a tripple double-quoted string', () => {
        let result;
        beforeEach(() => { 
            result = parse("'''this is a string'''");
        });

        it('without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('with correct content', () => {
            expect(result.children[0].symbol.text).toEqual("'''this is a string'''");
        });
    });
});
