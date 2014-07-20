module.exports = function (grunt) {

    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jslint: {

            client: {
                src: ['iknowishouldnt.js'],
                directives: {
                    nomen: true,
                    globals: {
                        'document': true,
                        'define': true,
                        'module': true,
                        'require': true,
                        'window': true
                    }
                }
            }

        },

        uglify: {

            my_target: {
                options: {
                    mangle: true,
                    report: 'gzip',
                    banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("isoDateTime") %>\n * https://github.com/neogeek/iknowishouldnt.js\n * \n * Copyright (c) <%= grunt.template.today("yyyy") %> Scott Doxey\n * Released under the MIT license.\n */\n'
                },
                files: {
                    'iknowishouldnt.min.js': ['iknowishouldnt.js']
                }
            }

        },

        jasmine: {
            test: {
                src: 'iknowishouldnt.min.js',
                options: {
                    specs: 'tests/*.js'
                }
            }
        },

        watch: {

            default: {
                files: ['iknowishouldnt.js'],
                tasks: ['jslint', 'uglify']
            }

        }

    });

    grunt.registerTask('default', [ 'jslint', 'uglify' ]);
    grunt.registerTask('test', [ 'jasmine' ]);

};
