// Add to package.json  "gulp.spritesmith": "^6.2.1", "merge-stream": "^1.0.0"
var spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');

module.exports = function(gulp, config) {
  var spriteData = gulp.src(config.sprite).pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    padding: 6,
    cssTemplate: './spritesmith.template.mustache'
  }));

  var imgStream = spriteData.img.pipe(gulp.dest('build/assets'));
  var cssStream = spriteData.css.pipe(gulp.dest('./src/styles'));

  return merge(imgStream, cssStream)
}