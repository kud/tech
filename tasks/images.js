var gulp     = require('gulp')
var imagemin = require('gulp-imagemin')

module.exports = function() {

  return gulp.src(['src/images/**/*', '!src/images/_covers/**/*'])
    .pipe( imagemin() )
    .pipe( gulp.dest('dist/images') )

}
