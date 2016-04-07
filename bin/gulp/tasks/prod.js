'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var runSequence = require('run-sequence');

var config = require('../configs/config.js');

// Tasks
require('./sass');
require('./copy');

gulp.task('prod', function(callback){

    callback = callback || function() {};
    runSequence(['copy'], callback);

});