module.exports = function(gulp, config) {
  return gulp.src('./src/images/*')
    .pipe(gulp.dest('build/assets'))
}
