// var spritesmith = require('gulp.spritesmith');
// var merge = require('merge-stream');

module.exports = function(gulp, config) {
  var spriteData = gulp.src('./src/icons/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    padding: 6,
    cssTemplate: './spritesmith.template.mustache'
  }));

  var imgStream = spriteData.img.pipe(gulp.dest('build/assets'));
  var cssStream = spriteData.css.pipe(gulp.dest('./src/styles'));

  return merge(imgStream, cssStream)
}
