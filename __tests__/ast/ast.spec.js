//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { parse } from '../../src/index';
import { IdentifierNode, StringNode } from '../../src/ast';

describe('AST', () => {
    describe('with meta-information', () => {
        let result;

        beforeEach(() => {
            result = parse(
                'Name "FOO"\n' +
                '');
        });

        it('should have a root node', () => {
            expect(result.ast).toBeDefined();
        });

        describe('the name node', () => {
            let node;
            beforeEach(() => node = result.ast.getNameNode());

            it('should start at line 1', () => {
                expect(node.line).toEqual(1);
            });

            it('should start at column 0', () => {
                expect(node.column).toEqual(0);
            });

            it('should have name as an string node', () => {
                expect(node.getString()).toBeInstanceOf(StringNode);
            });

            it('should have an identifier with value "FOO"', () => {
                expect(node.getString().getUnquoted()).toEqual('FOO');
            });

            it('should have an identifier at line 1', () => {
                expect(node.getString().line).toEqual(1);
            });

            it('should have an identifier at column 5', () => {
                expect(node.getString().column).toEqual(5);
            });
        });
    });

    describe('StringNode', () => {
        it('should unquote single-quoted string', () => {
            const node = new StringNode();
            node.value = "'Test'";
            expect(node.getUnquoted()).toEqual('Test');
        });

        it('should unquote double-quoted string', () => {
            const node = new StringNode();
            node.value = '"Test"';
            expect(node.getUnquoted()).toEqual('Test');
        });

        it('should unquote tripple single-quoted string', () => {
            const node = new StringNode();
            node.value = "'''Test'''";
            expect(node.getUnquoted()).toEqual('Test');
        });

        it('should unquote tripple double-quoted string', () => {
            const node = new StringNode();
            node.value = '"""Test"""';
            expect(node.getUnquoted()).toEqual('Test');
        });
    });

    describe('with participant definition', () => {
        let result;

        beforeEach(() => {
            result = parse(
                'Name "FOO"\n' +
                'Actor John\n' +
                'Actor Jane\n' +
                'Object Foo\n' +
                'Object Bar\n' +
                'Object Baz\n' +
                '');
        });

        it('should have a list of two actors', () => {
            expect(result.ast.getActors().length).toEqual(2);
        });

        it('should have a list of three objects', () => {
            expect(result.ast.getObjects().length).toEqual(3);
        });

        it('should have a correct actor names', () => {
            expect(result.ast.getActors().map(a => a.getIdentifier().value )).toEqual(['John', 'Jane']);
        });

        it('should have a correct object names', () => {
            expect(result.ast.getObjects().map(o => o.getIdentifier().value )).toEqual(['Foo', 'Bar', 'Baz']);
        });
    });

    describe('with sequence', () => {
        let result, message, sequence;

        beforeEach(() => {
            result = parse(
                'Name "Test sequence"\n' +
                'Object Alice\n' +
                'Object Bob\n' +
                'Sequence Hello\n' +
                '  Alice ask Bob\n' +
                '');
            sequence = result.ast.getSequences()[0];
            message = sequence.getMessages()[0];
        });

        it('should have a single sequence', () => {
            expect(result.ast.getSequences().length).toEqual(1);
        });

        it('should have a sequence named "Hello"', () => {
            expect(sequence.getIdentifier().value).toEqual('Hello');
        });

        it('should have a single sequence message', () => {
            expect(sequence.getMessages().length).toEqual(1);
        });

        it('should have Alice as message source', () => {
            expect(message.getSourceIdentifier().value).toEqual('Alice');
        });

        it('should have Bob as message destination', () => {
            expect(message.getDestinationIdentifier().value).toEqual('Bob');
        });
    });

    describe('with sequence messages with single word as text', () => {
        let result, message, sequence;

        beforeEach(() => {
            result = parse(
                'Name "Test"\n' +
                'Object Alice\n' +
                'Object Bob\n' +
                'Sequence Hello\n' +
                '  Alice tell Bob "Hello"\n' +
                '');
            sequence = result.ast.getSequences()[0];
            message = sequence.getMessages()[0];
        });

        it('should have a single sequence message', () => {
            expect(sequence.getMessages().length).toEqual(1);
        });

        it('should have Alice as message source', () => {
            expect(message.getSourceIdentifier().value).toEqual('Alice');
        });

        it('should have Bob as message destination', () => {
            expect(message.getDestinationIdentifier().value).toEqual('Bob');
        });

        it('should have Hello as message destination', () => {
            expect(message.getString().getUnquoted()).toEqual('Hello');
        });
    });

    describe('with sequence messages with multi-line string as text', () => {
        let result, message, sequence;

        beforeEach(() => {
            result = parse(
                'Name "Test"\n' +
                'Object Alice\n' +
                'Object Bob\n' +
                'Sequence Hello\n' +
                '  Alice tell Bob """\n' +
                '    Hello there\n' +
                '  """\n' +
                '');
            sequence = result.ast.getSequences()[0];
            message = sequence.getMessages()[0];
        });

        it('should have "Hello there" as message destination', () => {
            expect(message.getString().getUnquoted()).toEqual('Hello there');
        });
    });

    describe('with sequence messages with symbols in text', () => {
        let result, message, sequence;

        beforeEach(() => {
            result = parse(
                'Name "Test"\n' +
                'Object Alice\n' +
                'Object Bob\n' +
                'Sequence Hello\n' +
                '  Alice tell Bob "Hello there!€#!+ ()"\n' +
                '');
            sequence = result.ast.getSequences()[0];
            message = sequence.getMessages()[0];
        });

        it('should have "Hello there" as message destination', () => {
            expect(message.getString().getUnquoted()).toEqual('Hello there!€#!+ ()');
        });
    });

    describe('with sequence messages with symbols in text', () => {
        let result, message, sequence;

        beforeEach(() => {
            result = parse(
                'Name "Test"\n' +
                'Object Alice\n' +
                'Object Bob\n' +
                'Sequence Hello\n' +
                '  Alice tell Bob """\n' +
                '    Messages support line breaks\n' +
                '    for maintaining a multi-line\n' +
                '    string\n' +
                '  """\n' +
                '');
            sequence = result.ast.getSequences()[0];
            message = sequence.getMessages()[0];
        });

        it('should have "Hello there" as message destination', () => {
            expect(message.getString().getUnquoted()).toEqual('Messages support line breaks\nfor maintaining a multi-line\nstring');
        });
    });
});
