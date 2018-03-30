//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { parse } from '../../src/index';
import { SVGTransformer } from '../../src/transformer';

describe('AST Transformation context', () => {

    const participantDesc = (participants) => participants.map(p => { return { name: p.name, description: p.description } });

    describe('with many participants', () => {
        let context;
        beforeEach(() => {
            const result = parse(
                'Name "Unit test"\n' +
                'Object Alpha is "Moonbase Alpha"\n' +
                'Object Bravo\n' +
                'Object Charlie\n' +
                'Object Delta is "Delta Force"\n' +
                'Actor Who is "Doctor Who"' +
                'Actor You\n' +
                '\n' +
                'Sequence Alternate\n' +
                '  Alpha ask Bravo "You are fired"\n' +
                '  Alpha ask Charlie "You are fired"\n' +
                '  Alpha ask Delta "You are fired"\n' +
                '');
            context = new SVGTransformer(result.ast).generateContext();
        });

        it('should include the name', () => {
            expect(context.name).toEqual('Unit test');
        });

        it('should include (2) actors', () => {
            const actors = participantDesc(context.actors);
            expect(actors).toEqual([
                { name: 'Who', description: 'Doctor Who' },
                { name: 'You', description: '' }
            ]);
        });

        it('should have (4) objects', () => {
            const objects = participantDesc(context.objects);
            expect(objects).toEqual([
                { name: 'Alpha', description: 'Moonbase Alpha' },
                { name: 'Bravo', description: '' },
                { name: 'Charlie', description: '' },
                { name: 'Delta', description: 'Delta Force' },
            ]);
        });
    });

    describe('with actors first', () => {
        let context;
        beforeEach(() => {
            const result = parse(
                'Name "Unit test"\n' +
                'Actor Who is "Doctor Who"' +
                'Actor Bob\n' +
                'Object Alpha is "Moonbase Alpha"\n' +
                'Object Two\n' +
                '');
            context = new SVGTransformer(result.ast).generateContext();
        });

        it('should include the name', () => {
            expect(context.name).toEqual('Unit test');
        });

        it('should include (2) actors', () => {
            const actors = participantDesc(context.actors);
            expect(actors).toEqual([
                { name: 'Who', description: 'Doctor Who' },
                { name: 'Bob', description: '' }
            ]);
        });

        it('should have (2) object', () => {
            const objects = participantDesc(context.objects);
            expect(objects).toEqual([
                { name: 'Alpha', description: 'Moonbase Alpha' },
                { name: 'Two', description: '' },
            ]);
        });
    });

    describe('with many sequences', () => {
        let context;
        beforeEach(() => {
            const result = parse(
                'Name "Unit test"\n' +
                'Object Alpha is "Moonbase Alpha"\n' +
                'Object Bravo\n' +
                '\n' +
                'Sequence One\n' +
                '  Alpha ask Bravo "Hello 1"\n' +
                '  Bravo ask Alpha "Goodbye 1"\n' +
                'Sequence Two\n' +
                '  Alpha tell Bravo "Hello 2"\n' +
                '  Bravo tell Alpha "Goodbye 2"\n' +
                'Sequence Three\n' +
                '  Alpha replies Bravo "Hello 3"\n' +
                '  Bravo replies Alpha "Goodbye 3"\n' +
                '');
            context = new SVGTransformer(result.ast).generateContext();
        });

        const partialMessages = (messages) => messages.map(a => { return { source: a.source, destination: a.destination, message: a.message, type: a.type } });

        it('should have (3) sequences', () => {
            const sequenceNames = context.sequences.map(s => s.name);
            expect(sequenceNames).toEqual([
                'One','Two','Three'
            ]);
        });

        describe('first sequence', () => {
            it('should have (2) synchrounous messages', () => {
                const messages = partialMessages(context.sequences[0].messages);
                expect(messages).toEqual([
                    { source: 'Alpha', destination: 'Bravo', message: 'Hello 1', type: 'synchronous' },
                    { source: 'Bravo', destination: 'Alpha', message: 'Goodbye 1', type: 'synchronous' },
                ]);
            });
        });

        describe('second sequence', () => {
            it('should have (2) asynchronous messages', () => {
                const messages = partialMessages(context.sequences[1].messages);
                expect(messages).toEqual([
                    { source: 'Alpha', destination: 'Bravo', message: 'Hello 2', type: 'asynchronous' },
                    { source: 'Bravo', destination: 'Alpha', message: 'Goodbye 2', type: 'asynchronous' },
                ]);
            });
        });

        describe('third sequence', () => {
            it('should have (2) reply messages', () => {
                const messages = partialMessages(context.sequences[2].messages);
                expect(messages).toEqual([
                    { source: 'Alpha', destination: 'Bravo', message: 'Hello 3', type: 'reply' },
                    { source: 'Bravo', destination: 'Alpha', message: 'Goodbye 3', type: 'reply' },
                ]);
            });
        });
    });
});
