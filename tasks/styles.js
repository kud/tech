module.exports = function() {

  var gulp    = require('gulp')

  return gulp.src(['src/styles/*.css', '!src/styles/_*.css'])
    .pipe( require('gulp-plumber')() )
    .pipe( require('gulp-cssnext')())
    .pipe( gulp.dest('dist') )

}
