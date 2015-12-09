'use strict';

let gulp = require('gulp');
let jscs = require('gulp-jscs');
let eslint = require('gulp-eslint');
let excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('jscs', () => {
	return gulp.src('**/*.js')
		.pipe(excludeGitignore())
		.pipe(jscs.reporter())
		.pipe(jscs.reporter('fail'));
});

gulp.task('eslint', () => {
	gulp.src('**/*.js')
		.pipe(excludeGitignore())
		.pipe(eslint())
		.pipe(eslint.formatEach('compact', process.stderr))
		.pipe(eslint.failAfterError());
});

gulp.task('default', ['jscs', 'eslint']);
gulp.task('lint', ['jscs', 'eslint']);