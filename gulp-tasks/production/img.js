var imagemin = require('gulp-imagemin');

module.exports = function(gulp) {
  return gulp.src(['./build/assets/*.jpg', './build/assets/*.png'])
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/'))
}
