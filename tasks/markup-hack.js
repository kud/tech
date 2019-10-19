var del = require("del")
var gulp = require("gulp")

module.exports = function() {
  gulp.src("./dist/fr/posts/fr/index.html").pipe(gulp.dest("./dist/fr/"))
  gulp.src("./dist/en/posts/en/index.html").pipe(gulp.dest("./dist/en/"))

  return del(["./dist/fr/posts/", "./dist/en/posts/"])
}
