module.exports = function(gulp, config) {
  return gulp.src(config.images)
    .pipe(gulp.dest('build/assets'))
}
