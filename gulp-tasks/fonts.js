module.exports = function(gulp, config) {
  return gulp.src(config.fonts)
    .pipe(gulp.dest('build/assets'))
}
