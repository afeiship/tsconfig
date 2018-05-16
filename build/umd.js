(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('umd', function() {
  return gulp.src('src/next-store.js')
      .pipe($.umd({
        exports:function(){
          return 'Store';
        },
        namespace: function(file) {
          return 'nx.Store';
        },
        dependencies: function(file) {
          return [
            {
              name: 'nx',
              amd: '',
              cjs: 'next-js-core2',
              global: 'nx'
            }
          ];
        }
      }))
      .pipe(gulp.dest('dist'));
  });


}());
