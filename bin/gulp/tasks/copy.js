var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var config = require('../configs/config.js');

gulp.task('copy', function() {

    // Copy css
    gulp.src(config.dev.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(config.prod.css));


    gulp.src(config.dev.jsFile)
        .pipe(uglify())
        .pipe(rename('jquery.modawow.js'))
        .pipe(gulp.dest(config.prod.js));

});