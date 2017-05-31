var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

module.exports = function(gulp) {
  return gulp.src('./src/styles/main.scss')
    .pipe(watch('./src/styles/**/**'))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/assets'))
}
