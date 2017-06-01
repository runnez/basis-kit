module.exports = function(gulp, config) {
  return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('build/assets'))
}
