var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var fs = require('fs');

var config = {
  pages: {
    build: './src/pages/*.jade',
    watch: './src/pages/**',
  },
  templates: './src/templates/*.jade',
  images: './src/images/*',
  fonts: './src/fonts/*',
  sprite: './src/icons/*.png'
};

require('gulp-require-tasks')({
  gulp: gulp,
  arguments: [config]
});

gulp.task('default', ['build', 'watch', 'server']);
// you can add 'sprite' task to build
gulp.task('build', ['styles', 'pages', 'scripts', 'templates', 'images', 'fonts']);

gulp.task('server', function() {
 connect.server({
    root: 'build',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(config.pages.watch, ['pages']);
  gulp.watch(config.templates,   ['templates']);
  gulp.watch(config.images,      ['images']);
  gulp.watch(config.fonts,       ['fonts']);
  // gulp.watch(config.sprite,      ['sprite']);

  watch('build/**').pipe(connect.reload());
});

