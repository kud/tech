module.exports = function() {

  var eslint = require('gulp-eslint')

  return require('gulp').src( [
      'src/**/*.js',
      'tasks/**/*.js',
    ] )
    .pipe( require('gulp-plumber')() )
    .pipe( eslint() )
    .pipe( eslint.format() )
    .pipe( eslint.failOnError() )

}
