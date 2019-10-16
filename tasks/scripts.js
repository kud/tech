var gulp = require("gulp")
var gutil = require("gulp-util")

module.exports = function() {
  var src = ["src/scripts/*.js", "!src/scripts/_*.js"]

  var browserified = require("through2")(
    {
      objectMode: true,
    },
    function(chunk, enc, cb) {
      if (chunk.isBuffer()) {
        var b = require("browserify")({
          entries: chunk.path,
          ignoreMissing: true,
        })

        b.transform(
          require("envify/custom")({
            NODE_ENV: gutil.env.dist ? "production" : "development",
          }),
          { global: true },
        )

        // b.transform(
        //   require('reactify'), { global: true }
        // )

        // b.transform( require('babelify').configure({
        //   ignore: /(mustang.min.js|videoplaza.min.js)/
        // }) )

        chunk.contents = b.bundle()
        this.push(chunk)
      }

      cb()
    },
  )

  return gulp
    .src(src)
    .pipe(gutil.env.dist ? gutil.noop() : require("gulp-plumber")())
    .pipe(browserified)
    .pipe(gutil.env.dist ? require("vinyl-buffer")() : gutil.noop())
    .pipe(
      gutil.env.dist
        ? require("gulp-uglify")({ outSourceMap: false })
        : gutil.noop(),
    )
    .pipe(gulp.dest("dist/"))
    .pipe(require("gulp-livereload")())
}
