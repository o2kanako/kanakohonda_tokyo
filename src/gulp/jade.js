'use strict';

var gulp          = require('gulp');
var $             = [];
var paths         = require('./config.js').paths;

$.data            = require('gulp-data');
$.jade            = require('gulp-jade');
$.plumber         = require('gulp-plumber');


/*------------------------------------------------------------------------------
 * Jade Tasks
------------------------------------------------------------------------------*/
gulp.task('jade', function() {
  return gulp.src(paths.srcJade + '*.jade')
    .pipe($.data(function(file) { return require('../json/setting.json'); }))
    .pipe($.plumber())
    .pipe($.jade({ pretty: true }))
    .pipe(gulp.dest(paths.htmlDir));
});
