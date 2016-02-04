'use strict';

let gulp = require('gulp');
let eslint = require('gulp-eslint');
let mocha = require('gulp-mocha');
let excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('mocha', () => {
    return gulp.src('test/testAnswers.js')
        .pipe(mocha({reporter: 'spec', timeout: '60000'}));
});

gulp.task('mochaLast', () => {
    return gulp.src('test/testLastAnswer.js')
        .pipe(mocha({reporter: 'spec', timeout: '60000'}));
});

gulp.task('eslint', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['mocha', 'eslint']);
gulp.task('test', ['mocha', 'eslint']);
gulp.task('testLast', ['mochaLast']);
gulp.task('lint', ['eslint']);
