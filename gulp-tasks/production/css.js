var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');

module.exports = function(gulp, config) {
  return gulp.src('./build/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest('./build/'))
}
