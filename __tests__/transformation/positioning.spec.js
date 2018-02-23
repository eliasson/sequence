//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { parse } from '../../src/index';
import { SVGTransformer } from '../../src/transformer';


describe('AST transformation positioning', () => {
    let trans;

    const positionX = (p) =>  {
        let x = (trans.size.participantWidth + trans.size.participantMargin) * (p-1);
        return x;
    }
    
    describe('with actors first', () => {
        let context;
        beforeEach(() => {
            const result = parse(
                'Name "Testing positions"\n' +
                'Actor Alice\n' +
                'Actor Bob\n' +
                'Object Alpha\n' +
                'Object Bravo\n' +
                '');
                trans = new SVGTransformer(result.ast);
            context = trans.generateContext();
        });

        it('should position first actor at the first position', () => {
            const x = positionX(1);
            expect(context.actors[0].position).toEqual({ x: x, y: 0 });
        });

        it('should position second actor at the second position', () => {
            const x = positionX(2);
            expect(context.actors[1].position).toEqual({ x: x, y: 0 });
        });

        it('should position first object at the third position', () => {
            const x = positionX(3);
            expect(context.objects[0].position).toEqual({ x: x, y: 0 });
        });

        it('should position second object at the fourth position', () => {
            const x = positionX(4);
            expect(context.objects[1].position).toEqual({ x: x, y: 0 });
        });
    });

    describe('sequence with multiple message types', () => {
        let context, sequence;
        beforeEach(() => {
            const result = parse(
                'Name "Testing messages"\n' +
                'Object Alpha\n' +
                'Object Bravo\n' +
                '\n' +
                'Sequence One\n' +
                '  Alpha tell Bravo "Hi"\n' +
                '  Alpha ask Bravo "Are you ok"\n' +
                '  Bravo replies Alpha "Yes"\n' +
                '');
            trans = new SVGTransformer(result.ast);
            context = trans.generateContext();
            sequence = context.sequences[0];
        });

        it('should have the sequence baslined at Y = 0', () => {
            expect(sequence.baseY).toEqual(0);
        });

        it('should contain the list of messages with relative positions', () => {
            const messages = sequence.messages.map(a => { return { source: a.source, startPosition: a.startPosition, endPosition: a.endPosition } });
            expect(messages).toEqual([
                { source: 'Alpha', startPosition: { x:  60, y: 120 }, endPosition: { x: 260, y: 120 } },
                { source: 'Alpha', startPosition: { x:  60, y: 200 }, endPosition: { x: 260, y: 200 } },
                { source: 'Bravo', startPosition: { x: 260, y: 280 }, endPosition: { x:  60, y: 280 } },
            ]);
        });

        it('should state message direction', () => {
            const messages = sequence.messages.map(a => { return { source: a.source, directionRight: a.directionRight } });
            expect(messages).toEqual([
                { source: 'Alpha', directionRight: true },
                { source: 'Alpha', directionRight: true },
                { source: 'Bravo', directionRight: false },
            ]);
        });
    });

    describe('with a single sequence', () => {
        let context, sequence;
        beforeEach(() => {
            const result = parse(
                'Name "Testing messages"\n' +
                'Object Alpha\n' +
                'Object Bravo\n' +
                'Object Charlie\n' +
                'Object Delta\n' +
                '\n' +
                'Sequence One\n' +
                '  Alpha tell Bravo "One"\n' +
                '  Bravo tell Charlie "Twp"\n' +
                '  Charlie tell Delta "three"\n' +
                '');
            trans = new SVGTransformer(result.ast);
            context = trans.generateContext();
            sequence = context.sequences[0];
        });

        it('should contain the list of messages with relative positions', () => {
            const messages = sequence.messages.map(a => { return { source: a.source, startPosition: a.startPosition, endPosition: a.endPosition } });
            expect(messages).toEqual([
                { source: 'Alpha',   startPosition: { x:  60, y: 120 }, endPosition: { x: 260, y: 120 } },
                { source: 'Bravo',   startPosition: { x: 260, y: 200 }, endPosition: { x: 460, y: 200 } },
                { source: 'Charlie', startPosition: { x: 460, y: 280 }, endPosition: { x: 660, y: 280 } },
            ]);
        });
    });

    describe('with mulitple sequences', () => {
        let context;
        beforeEach(() => {
            const result = parse(
                'Name "Testing messages"\n' +
                'Object Alpha\n' +
                'Object Bravo\n' +
                '\n' +
                'Sequence One\n' +
                '  Alpha tell Bravo "Hi"\n' +
                '  Alpha ask Bravo "Are you ok"\n' +
                '  Bravo replies Alpha "Yes"\n' +
                '\n' +
                'Sequence Two\n' +
                '  Alpha tell Bravo "Hi"\n' +
                '');
            trans = new SVGTransformer(result.ast);
            context = trans.generateContext();
        });

        describe('the first sequence', () => {
            let sequence;
            beforeEach(() => {
                sequence = context.sequences[0];
            });
            it('should have the sequence baslined at Y = 0', () => {
                expect(sequence.baseY).toEqual(0);
            });
            it('should have height of 360 px', () => {
                expect(sequence.height).toEqual(360)
            });
        });

        describe('the second sequence', () => {
            let sequence;
            beforeEach(() => {
                sequence = context.sequences[1];
            });
            it('should have the sequence baslined at Y = 440', () => {
                expect(sequence.baseY).toEqual(440);
            });
            it('should have height of 200 px', () => {
                expect(sequence.height).toEqual(200)
            });
        });
    });
});
