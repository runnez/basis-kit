// You can use 'sprite' task to build
// 1. Need to package.json "gulp.spritesmith": "^6.2.1", "merge-stream": "^1.0.0"
// 2. Create ./src/icons folder
// 3. And add // gulp.watch(config.sprite, g['sprite']); line in watch task

var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var fs = require('fs');

var config = {
  pages: {
    build: './src/pages/*.jade',
    watch: './src/pages/**',
  },
  images: './src/images/*',
  fonts: './src/fonts/*',
  sprite: './src/icons/*.png'
};

require('gulp-require-tasks')({
  gulp: gulp,
  arguments: [config]
});

gulp.task('default', ['build', 'watch', 'server']);
gulp.task('build', ['styles', 'pages', 'scripts', 'images', 'fonts']);

gulp.task('server', function() {
 connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(config.pages.watch, ['pages']);
  gulp.watch(config.images,      ['images']);
  gulp.watch(config.fonts,       ['fonts']);

  watch('build/**').pipe(connect.reload());
});
