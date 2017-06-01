var revAll = require('gulp-rev-all');
var del = require('del');

module.exports = function(gulp, config, callback) {
  var stream = gulp.src('build/**')
    .pipe(revAll.revision({
      dontRenameFile: [/^\/favicon.ico$/g, /^\/index.html/g]
    }))
    .pipe(gulp.dest('build'))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest('build'))

  return new Promise((resolve, reject) => {
    stream.on('end', function() {
      var manifest = require('../../build/rev-manifest.json');
      var arr = [];

      for (var origFileName in manifest) {
        if (origFileName != manifest[origFileName]) {
          arr.push('build/' + origFileName);
        }
      }

      del(arr).then(resolve);
    });

    stream.on('error', reject);
  })
}
