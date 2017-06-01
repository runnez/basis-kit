var jade = require('gulp-pug');
var htmlmin = require('gulp-htmlmin');

module.exports = function(gulp, config) {
  return gulp.src('./src/pages/*.jade')
    .pipe(jade())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}
