var gulp = require("gulp")

module.exports = function() {
  return gulp
    .src(["src/styles/*.css", "!src/styles/_*.css"])
    .pipe(require("gulp-plumber")())
    .pipe(require("gulp-cssnext")())
    .pipe(gulp.dest("dist/"))
    .pipe(require("gulp-livereload")())
}
