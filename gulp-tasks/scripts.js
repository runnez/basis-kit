var browserify = require('browserify');
var watchify = require('watchify');
var gulp = require('gulp');
var pugify = require("pugify");
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

var customOpts = {
  entries: ['./src/scripts/main.js'],
  debug: true
};
var opts = Object.assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts)).transform(pugify);
b.on('update', bundle);

function bundle() {
  return b.bundle()
    .on('error', function (err) {
      console.log(err)
      this.emit("end");
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./build/assets/'));
}

module.exports = function() {
  return bundle()
}
