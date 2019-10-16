/**
 * Imports
 */
var gulp = require("gulp")
var livereload = require("gulp-livereload")
var del = require("del")

/**
 * Private tasks
 */
gulp.task("clean", require(__dirname + "/tasks/clean"))
gulp.task("markup-global", require(__dirname + "/tasks/markup-global"))
gulp.task("markup-fr", require(__dirname + "/tasks/markup-fr"))
gulp.task("markup-en", require(__dirname + "/tasks/markup-en"))
gulp.task(
  "markup",
  gulp.series("markup-global", "markup-fr", "markup-en", function(cb) {
    // crap hack
    gulp.src("./dist/fr/posts/fr/index.html").pipe(gulp.dest("./dist/fr/"))

    gulp.src("./dist/en/posts/en/index.html").pipe(gulp.dest("./dist/en/"))

    return del(["./dist/fr/posts/", "./dist/en/posts/"])
  }),
)
gulp.task("styles", require(__dirname + "/tasks/styles"))
gulp.task("validate", require(__dirname + "/tasks/validate"))
gulp.task(
  "scripts",
  gulp.series("validate", require(__dirname + "/tasks/scripts")),
)
gulp.task("images", require(__dirname + "/tasks/images"))
gulp.task("server", require(__dirname + "/tasks/server"))

/**
 * Public tasks
 */
gulp.task(
  "compile",
  gulp.series("clean", "markup", "images", "scripts", "styles"),
)

// gulp.task(
//   "watch",
//   gulp.series("compile", function(cb) {
//     gulp.parallel("server")
//
//     livereload.listen()
//
//     gulp.watch(
//       ["src/**/*", "!src/images/**/*", "!src/scripts/**/*", "!src/styles/**/*"],
//       function(_cb) {
//         gulp.parallel("markup", function() {
//           livereload.reload()
//         })
//
//         _cb()
//       },
//     )
//
//     gulp.watch(["src/**/*.js"], gulp.parallel("scripts"))
//
//     gulp.watch(["src/**/*.css"], gulp.parallel("styles"))
//
//     gulp.watch(
//       ["src/images/**/*"],
//       gulp.parallel("images", function(_cb) {
//         livereload.reload()
//
//         _cb()
//       }),
//     )
//
//     cb()
//   }),
// )

gulp.task(
  "deploy",
  gulp.series("compile", require(__dirname + "/tasks/deploy")),
)

// default
gulp.task("default", gulp.series("watch"))
