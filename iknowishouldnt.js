/*!
 * I Know I Shouldn't
 * https://github.com/neogeek/iknowishouldnt.js
 *
 * Copyright (c) 2014 Scott Doxey
 * Released under the MIT license
 */

(function () {

    'use strict';

    /**
     * Returns a formated string.
     *
     *     'Hello %s'.format('World!'); // Hello World!
     *
     * @param {String|Number} [arguments] Multiple arguments can be passed as either strings or numbers.
     * @return {String} Formatted string.
     * @public
     */

    Object.defineProperty(String.prototype, 'format', {

        enumerable: false,

        value: function () {

            var value = this,
                matches = value.match(/(%[sidf])/g),
                replacements = Array.prototype.slice.call(arguments);

            if (matches) {

                matches.forEach(function (match, key) {

                    if (replacements[key] !== undefined) {

                        if (match === '%i' || match === '%d') {

                            replacements[key] = parseInt(replacements[key], 10);

                        } else if (match === '%f') {

                            replacements[key] = parseFloat(replacements[key]);

                        }

                        value = value.replace(match, replacements[key]);

                    }

                });

            }

            return value;

        }

    });

    /**
     * Splits an array into separate chunks based on the length specified.
     *
     *     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].chunk(2); // [ [0, 1], [2, 3], [4, 5], [6, 7], [8, 9] ]
     *
     * @param {Number} num The max size of each chunk.
     * @return {Array} Multidimensional array containing the separated chunks.
     * @public
     */

    Object.defineProperty(Array.prototype, 'chunk', {

        enumerable: false,

        value: function (num) {

            var array = [];

            while (this.length) {

                array.push(this.splice(0, num));

            }

            return array;

        }

    });

}());
