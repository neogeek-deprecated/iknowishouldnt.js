/*!
 * I Know I Shouldn't v1
 * https://github.com/neogeek/iknowishouldnt.js
 *
 * Copyright (c) 2014 Scott Doxey
 * Released under the MIT license
 */

(function (undefined) {

    'use strict';

    Object.defineProperty(String.prototype, 'format', {

        enumerable: false,

        value: function () {

            var value = this,
                replacements = Array.prototype.slice.call(arguments);

            value.match(/(%[sif])/g).forEach(function (match, key) {

                if (replacements[key] !== undefined) {

                    if (match === '%i') {

                        replacements[key] = parseInt(replacements[key], 10);

                    } else if (match === '%f') {

                        replacements[key] = parseFloat(replacements[key]);

                    }

                    value = value.replace(match, replacements[key]);

                }

            });

            return value;

        }

    });

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
