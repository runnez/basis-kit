var gzip = require('gulp-gzip');

module.exports = {
  deps: ['production:css', 'production:js', 'production:img'],

  fn: function(gulp, config) {
    return gulp.src('./build/**/*')
      .pipe(gzip())
      .pipe(gulp.dest('./build/'))
  }
}
