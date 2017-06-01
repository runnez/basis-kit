module.exports = function(gulp, config, callback) {
  return gulp.src('./src/images/*')
    .pipe(gulp.dest('build/assets'))
}
