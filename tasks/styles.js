var gulp    = require('gulp')
var plumber = require('gulp-plumber')
var myth    = require('gulp-myth')

module.exports = function() {

  return gulp.src('src/styles/index.css')
    .pipe( plumber() )
    .pipe( require('gulp-cssnext')({
      features: {
        import: {
          path: [
            'node_modules'
          ]
        }
      }
    }))
    .pipe( gulp.dest('dist') )

}
