var del = require('del');

module.exports = function(gulp) {
  return del('./build/**/*')
}
