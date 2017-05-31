var jade = require('gulp-pug');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

module.exports = function(gulp, config) {
  gulp.src(config.templates)
    .pipe(jade({
      client: true
    }))
    .pipe(declare({
      namespace: 'Templates',
      noRedeclare: true // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./build/assets'))
}
