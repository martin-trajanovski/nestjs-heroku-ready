const path = require('path');
const gulp = require('gulp');
const util = require('gulp-util');
const plumber = require('gulp-plumber');
const replaces = require('gulp-replaces');
const typescript = require('gulp-typescript');
const rename = require('gulp-rename');
const shell = require('gulp-shell');
const envify = require('process-envify');
const runSequence = require('run-sequence');

const env = require('./env');

const DIST_ROOT = path.join(__dirname, 'build');

gulp.task('build', () => {
	const tsProject = typescript.createProject('tsconfig.api.json');

	return gulp
		.src([
			'src/**/*',
		])
		.pipe(plumber())
		.pipe(replaces(envify(env)))
		.pipe(tsProject())
		.pipe(gulp.dest(DIST_ROOT));
});

gulp.task('copy', () => {
	return gulp
		.src([
			'package.json',
			'yarn.lock',
			'Procfile',
		])
		.pipe(gulp.dest(DIST_ROOT));
});

gulp.task('rename', () => {
	return gulp.src('build/server.js')
		.pipe(shell('rimraf build/server.js'))
		.pipe(rename('index.js'))
		.pipe(gulp.dest(DIST_ROOT));
});

gulp.task('rebuild', (done) => {
	return runSequence('build', 'rename', done);
});

gulp.task('watch', () => {
	gulp.watch([
		'src/server.ts',
		'src/api/**/*',
		'!src/api/**/__tests__/**/*',
	], ['rebuild']);
});

gulp.task('serve', shell.task(`node build/index.js`));

gulp.task('default', (done) => {
	if (util.env.prod) {
		return runSequence('build', ['copy', 'rename'], done);
	}

	return runSequence('build', 'copy', 'rename', 'watch', 'serve', done);
});
