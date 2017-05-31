var gzip = require('gulp-gzip');

module.exports = function(gulp, config) {
  return gulp.src('./build/**/*')
    .pipe(gzip())
    .pipe(gulp.dest('./build/'))
}
