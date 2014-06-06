var gulp    = require('gulp')
var plumber = require('gulp-plumber')
var jshint  = require('gulp-jshint')

module.exports = function() {

  return gulp.src( ['src/**/*.js'] )
    .pipe( plumber() )
    .pipe( jshint('.jshintrc') )
    .pipe( jshint.reporter('jshint-stylish') )

}
