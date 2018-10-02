//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

import { parse } from '../../src/index';
import { SVGTransformer } from '../../src/transformer';

describe.only('AST Transformation template', () => {
    let result;
    beforeEach(() => {
        result = parse(
            'Name "Unit test"\n' +
            'Object Alpha is "Moonbase Alpha"\n' +
            'Object Bravo\n' +
            '\n' +
            'Sequence Alternate\n' +
            '  Alpha ask Bravo "You are fired"\n' +
            '');
    });

    describe('using default template', () => {
        let transformer;

        beforeEach(() => {
            transformer = new SVGTransformer(result.ast);
        });

        it('should resolve to local path', () => {
            expect(transformer.templateDirectory).toEqual('templates');
        });
    });

    describe('using custom template', () => {
        let transformer;

        beforeEach(() => {
            transformer = new SVGTransformer(result.ast, '\\My themes');
        });

        it('should resolve to local path', () => {
            expect(transformer.templateDirectory).toEqual('\\My themes');
        });
    });
});
