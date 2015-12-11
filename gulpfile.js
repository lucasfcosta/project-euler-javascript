'use strict';

let gulp = require('gulp');
let jscs = require('gulp-jscs');
let eslint = require('gulp-eslint');
let mocha = require('gulp-mocha');
let excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('mocha', () => {
    return gulp.src('test/*.js')
        .pipe(mocha({reporter: 'spec', timeout: '60000'}));
});

gulp.task('jscs', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'));
});

gulp.task('eslint', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.formatEach('compact', process.stderr))
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['mocha', 'jscs', 'eslint']);
gulp.task('test', ['mocha', 'jscs', 'eslint']);
gulp.task('lint', ['jscs', 'eslint']);
