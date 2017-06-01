var runSequence = require('run-sequence');
var GulpSSH = require('gulp-ssh');
var fs = require('fs');

module.exports = (gulp, config) => {
  return runSequence(
    'clean',
    'build',
    'minify',
    'deploy:digest',
    'deploy:gzip',
    () => {
      ['app1.improvemedia.ru', 'app2.improvemedia.ru'].forEach((host) => {
        var gulpSSH = new GulpSSH({
          ignoreErrors: false,
          sshConfig: {
            host: host,
            username: 'promo_imr',
            privateKey: fs.readFileSync('/Users/user/.ssh/id_rsa')
          }
        })

        gulp.src('./build/**')
          .pipe(gulpSSH.dest('/srv/miele.inmyroom.ru'))
      })
    }
  )
}
