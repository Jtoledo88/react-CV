var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('default', function(){
    return browserify('./source/cv.js')
    .transform(babelify, { presets: [ 'es2015', 'react' ] })
    .bundle()
    .pipe(source('./js/cv.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/'));
});