var jade = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');

module.exports = function(gulp, config) {
  return gulp.src(config.pages.build)
    .pipe(jade())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}
