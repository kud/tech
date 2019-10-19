/**
 * Imports
 */
var gulp = require("gulp")
var livereload = require("gulp-livereload")
var del = require("del")

/**
 * Private tasks
 */
gulp.task("_markup-global", require(__dirname + "/tasks/markup-global"))
gulp.task("_markup-fr", require(__dirname + "/tasks/markup-fr"))
gulp.task("_markup-en", require(__dirname + "/tasks/markup-en"))
gulp.task("_markup-hack", require(__dirname + "/tasks/markup-hack"))
gulp.task("_scripts", require(__dirname + "/tasks/scripts"))
gulp.task("_deploy", require(__dirname + "/tasks/deploy"))

/**
 * Public tasks
 */
gulp.task("clean", require(__dirname + "/tasks/clean"))
gulp.task(
  "markup",
  gulp.series("_markup-global", "_markup-fr", "_markup-en", "_markup-hack"),
)
gulp.task("styles", require(__dirname + "/tasks/styles"))
gulp.task("images", require(__dirname + "/tasks/images"))
gulp.task("validate", require(__dirname + "/tasks/validate"))
gulp.task("scripts", gulp.series("validate", "_scripts"))
gulp.task("server", require(__dirname + "/tasks/server"))

/**
 * Main tasks
 */
gulp.task(
  "compile",
  gulp.series("clean", "markup", "images", "scripts", "styles"),
)

gulp.task(
  "watch",
  gulp.series(
    "compile",
    gulp.parallel("server", function(cb) {
      livereload.listen()

      gulp.watch(
        [
          "src/**/*",
          "!src/images/**/*",
          "!src/scripts/**/*",
          "!src/styles/**/*",
        ],
        gulp.series("markup", function(_cb) {
          livereload.reload()
          _cb()
        }),
      )

      gulp.watch(["src/**/*.js"], gulp.series("scripts"))
      gulp.watch(["src/**/*.css"], gulp.series("styles"))

      gulp.watch(
        ["src/images/**/*"],
        gulp.series("images", function(_cb) {
          livereload.reload()
          _cb()
        }),
      )
    }),
  ),
)

gulp.task("deploy", gulp.series("compile", "_deploy"))
// gulp.task("default", "watch")
