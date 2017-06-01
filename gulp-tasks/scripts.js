var browserify = require('browserify');
var gulp = require('gulp');
var pugify = require('pugify');
var source = require('vinyl-source-stream');

var b = browserify({
  entries: ['./src/scripts/main.js']
}).transform(pugify);

function bundle() {
  return b.bundle()
    .on('error', function (err) {
      this.emit("end");
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/assets/'));
}

module.exports = function() {
  return bundle()
}
