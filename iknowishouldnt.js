/*!
 * I Know I Shouldn't
 * https://github.com/neogeek/iknowishouldnt.js
 *
 * Copyright (c) 2016 Scott Doxey
 * Released under the MIT license
 */

/**
 * Returns a formated string.
 *
 * @example 'Hello %s'.format('World!'); // Hello World!
 * @param {String|Number} [arguments] Multiple arguments can be passed as either strings or numbers.
 * @return {String} Formatted string.
 * @public
 */

const format = function (...replacements) {

    let value = this;

    (value.match(/(%[sidf])/g) || []).forEach((match, key) => {

        if (typeof replacements[key] !== 'undefined') {

            if (match === '%i' || match === '%d') {

                replacements[key] = parseInt(replacements[key], 10);

            } else if (match === '%f') {

                replacements[key] = parseFloat(replacements[key]);

            }

            value = value.replace(match, replacements[key]);

        }

    });

    return value;

};

Object.defineProperty(String.prototype, 'format', {
    'enumerable': false,
    'value': format
});

/**
 * Splits an array into separate chunks based on the length specified.
 *
 * @example [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].chunk(2); // [ [0, 1], [2, 3], [4, 5], [6, 7], [8, 9] ]
 * @param {Number} num The max size of each chunk.
 * @return {Array} Multidimensional array containing the separated chunks.
 * @public
 */

const chunk = function (num) {

    const array = [];

    while (this.length) {

        array.push(this.splice(0, num));

    }

    return array;

};

Object.defineProperty(Array.prototype, 'chunk', {
    'enumerable': false,
    'value': chunk
});
