const assert = require('assert');

require('../../iknowishouldnt.js');

describe('String.prototype.format', () => {

    it('Testing string type.', () => {

        assert.equal('Hello %s'.format('World!'), 'Hello World!');

    });

    it('Testing integer type with both flags.', () => {

        assert.equal('hsl(%i, 50%, 50%)'.format(125.1), 'hsl(125, 50%, 50%)');
        assert.equal('hsl(%d, 50%, 50%)'.format(125.1), 'hsl(125, 50%, 50%)');

    });

    it('Testing float type.', () => {

        assert.equal('font-size: %fem'.format(1.5), 'font-size: 1.5em');

    });

    it('Testing multiple types.', () => {

        assert.equal('%s(%f, %i%, %i%, %f)'.format('hsla', 150.5, 50.0, 50.0, 0.5), 'hsla(150.5, 50%, 50%, 0.5)');

    });

    it('Testing string with no replacements.', () => {

        assert.equal('Hello World!'.format('Test'), 'Hello World!');

    });

});
