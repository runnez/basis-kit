// You can use 'sprite' task to build
// 1. Need to package.json "gulp.spritesmith": "^6.2.1", "merge-stream": "^1.0.0"
// 2. Create ./src/icons folder

var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var env = {};

require('gulp-require-tasks')({
  gulp: gulp,
  arguments: [env]
});

gulp.task('default', ['build', 'watch', 'server']);
gulp.task('build', ['styles', 'scripts', 'pages', 'images', 'fonts']);
gulp.task('minify', ['production:js', 'production:css', 'production:img'])

gulp.task('server', function() {
 connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function() {
  watch('./src/styles/**', () => gulp.start('styles'));
  watch('./src/images/**', () => gulp.start('images'));
  watch('./src/pages/**', () => gulp.start('pages'));
  watch('./src/fonts/**', () => gulp.start('fonts'));
  watch('./src/scripts/main.js', () => gulp.start('scripts'));

  watch('build/**').pipe(connect.reload());
});
