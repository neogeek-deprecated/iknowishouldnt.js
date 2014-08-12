/*globals describe, it, expect */

describe('iknowishouldnt.js Tests', function () {

    'use strict';

    describe('String.prototype.format', function () {

        it('Testing string type.', function () {

            expect('Hello %s'.format('World!')).toBe('Hello World!');

        });

        it('Testing integer type with both flags.', function () {

            expect('hsl(%i, 50%, 50%)'.format(125.1)).toBe('hsl(125, 50%, 50%)');
            expect('hsl(%d, 50%, 50%)'.format(125.1)).toBe('hsl(125, 50%, 50%)');

        });

        it('Testing float type.', function () {

            expect('font-size: %fem'.format(1.5)).toBe('font-size: 1.5em');

        });

        it('Testing multiple types.', function () {

            expect('%s(%f, %i%, %i%, %f)'.format('hsla', 150.5, 50.0, 50.0, 0.5)).toBe('hsla(150.5, 50%, 50%, 0.5)');

        });

        it('Testing string with no replacements.', function () {

            expect('Hello World!'.format('Test')).toBe('Hello World!');

        });

    });

    describe('Array.prototype.chunk', function () {

        it('Testing array with 10 values.', function () {

            expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].chunk(2)).toEqual([
                [0, 1],
                [2, 3],
                [4, 5],
                [6, 7],
                [8, 9]
            ]);

        });

        it('Testing empty array.', function () {

            expect([].chunk(2)).toEqual([]);

        });

    });

});
