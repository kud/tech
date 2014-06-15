var gulp     = require('gulp')
var imagemin = require('gulp-imagemin')

module.exports = function() {

  return gulp.src('src/images/**/*')
    .pipe( imagemin() )
    .pipe( gulp.dest('dist/images') )

}
