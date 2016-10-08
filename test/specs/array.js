const assert = require('assert');

require('../../iknowishouldnt.js');

describe('Array.prototype.chunk', () => {

    it('Testing array with 10 values.', () => {

        assert.deepEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].chunk(2), [
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7],
            [8, 9],
            [10]
        ]);

    });

    it('Testing empty array.', () => {

        assert.deepEqual([].chunk(2), []);

    });

});
