var rimraf = require('rimraf')

module.exports = function() {

  return rimraf.sync('dist')

}
