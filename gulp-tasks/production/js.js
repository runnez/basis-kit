var uglify = require('gulp-uglify');

module.exports = function(gulp) {
  return gulp.src('./build/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/'))
}
