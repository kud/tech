var gulp  = require('gulp')
var gutil = require('gulp-util')

module.exports = function() {

  return gulp
    .src(['src/images/**/*', '!src/images/_covers/**/*'])
    .pipe( gutil.env.dist ? require('gulp-imagemin')() : gutil.noop() )
    .pipe( gulp.dest('dist/images/') )

}
