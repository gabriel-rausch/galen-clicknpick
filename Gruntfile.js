'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    connect: {
      localserver: {
        options: {
          hostname: '*',
          port: 8888,
          base: './',
          keepalive: true
        }
      }
    },
    concat: {
      main: {
        files: {
          'dest/main.js': ['libs/*.js', 'src/*.js']
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      main: {
        files: {
          'dest/main.min.js': ['dest/main.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js', 'libs/**/*.js'],
        tasks: ['default'],
        options: {
          livereload: true
        },
      },
    },
  });

  grunt.registerTask('default', ['concat', 'uglify']);
};
