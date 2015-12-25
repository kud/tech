var gulp   = require('gulp')

module.exports = function() {

  return gulp
    .src('dist/**/*')
    .pipe(
      require('gulp-gh-pages')({
        branch: 'gh-pages',
        cacheDir: '.deploy'
      })
    )

}
