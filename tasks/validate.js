var eslint = require('gulp-eslint')

module.exports = function() {

  return require('gulp')
    .src([
      'src/**/*.js',
      'tasks/**/*.js',
    ])
    .pipe( require('gulp-plumber')() )
    .pipe( eslint() )
    .pipe( eslint.format() )
    .pipe( eslint.failOnError() )

}
