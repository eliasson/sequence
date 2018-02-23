//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { createParser } from '../test-utils';

describe('Definitions grammar', () => {
    const parse = (src) => createParser(src, false).definitions();

    describe('parse single Actor definition', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Actor Jane\n' +
                '');
        });

        it('should parse without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('should have "Jane" as the symbol name', () => {
            expect(result.children[0].children[1].symbol.text).toEqual('Jane');
        });
    });

    describe('parse multiple Actor definition', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Actor Jane\n' +
                'Actor John\n' +
                '');
        });

        it('should parse without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('with "John" as the 2:nd symobl name', () => {
            expect(result.children[1].children[1].symbol.text).toEqual('John');
        });
    });

    describe('parse single Object definition', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Object SystemA\n' + 
                '');
        });

        it('should parse without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('should have "SystemA" as the symbol name', () => {
            expect(result.children[0].children[1].symbol.text).toEqual('SystemA');
        });
    });

    describe('parse multiple Object definition', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Object SystemA\n' +
                'Object SystemB\n' +
                'Object SystemC\n' +
                '');
        });

        it('should parse without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('with "SystemC" as the 3:rd symobl name', () => {
            expect(result.children[2].children[1].symbol.text).toEqual('SystemC');
        });
    });

    describe('order', () => {
        describe('Actor before Object', () => {
            let result;
            beforeEach(() => {
                result = parse(
                    'Actor Foo\n' +
                    'Object Bar\n' +
                    '');
            });

            it('should parse without errors', () => {
                expect(result.parser._syntaxErrors).toEqual(0);
            });

            it('should have Actor Foo first', () => {
                expect(result.children[0].children[1].symbol.text).toEqual('Foo');
            });
        });

        describe('Object before Actor', () => {
            let result;
            beforeEach(() => {
                result = parse(
                    'Object Bar\n' +
                    'Actor Foo\n' +
                    '');
            });

            it('should parse without errors', () => {
                expect(result.parser._syntaxErrors).toEqual(0);
            });

            it('should have Actor Foo last', () => {
                expect(result.children[1].children[1].symbol.text).toEqual('Foo');
            });
        });

        describe('Object and Actor mixed', () => {
            let result;
            beforeEach(() => {
                result = parse(
                    'Object Foo\n' +
                    'Actor Jane\n' +
                    'Object Bar\n' +
                    '');
            });

            it('should parse without errors', () => {
                expect(result.parser._syntaxErrors).toEqual(0);
            });

            it('should have Object Foo first', () => {
                expect(result.children[0].children[1].symbol.text).toEqual('Foo');
            });

            it('should have Actor Jane first', () => {
                expect(result.children[1].children[1].symbol.text).toEqual('Jane');
            });

            it('should have Object Bar third', () => {
                expect(result.children[2].children[1].symbol.text).toEqual('Bar');
            });
        });
    });

    describe('parse participants description', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Actor Jane is "Representing a human user"\n' +
                'Object Payroll is "Cobol payroll system"' +
                '');
        });

        it('should parse without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('should have "Jane" in the parser tree', () => {
            expect(result.children[0].children[1].symbol.text).toEqual('Jane');
        });

        it('should have Janes description in the parser tree', () => {
            expect(result.children[0].children[3].children[0].symbol.text).toEqual('"Representing a human user"');
        });

        it('should have "Payroll" in the parser tree', () => {
            expect(result.children[1].children[1].symbol.text).toEqual('Payroll');
        });

        it('should have Payroll description in the parser tree', () => {
            expect(result.children[1].children[3].children[0].symbol.text).toEqual('"Cobol payroll system"');
        });
    });

    describe('parsing multiple participants', () => {
        let result;
        beforeEach(() => {
            result = parse(
                'Actor Who is "Doctor Who"\n' +
                'Object Alpha is "Moonbase Alpha"\n' +
                'Object Bravo\n' +
                'Object Charlie\n' +
                'Actor Jane is "Representing a human user"\n' +
                'Object Payroll is "Cobol payroll system"' +
                '');
        });

        it('should parse without errors', () => {
            expect(result.parser._syntaxErrors).toEqual(0);
        });

        it('should have (6) children', () => {
            expect(result.children.length).toEqual(6);
        });
    });
});
