var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

module.exports = function(gulp) {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/assets'))
}
