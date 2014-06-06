var gulp   = require('gulp')
var deploy = require('gulp-gh-pages')

module.exports = function() {

  return gulp.src('dist/**/*')
    .pipe(
      deploy({
        branch: 'gh-pages',
        cacheDir: '.deploy'
      })
    )

}
