/* global require */
var gulp = require("gulp"),
  rename = require("gulp-rename"),
  cleanCSS = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  eslint = require("gulp-eslint"),
  watch = require("gulp-watch");


gulp.task("minify-css", function () {
  return gulp.src("./css/style.css")
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./css"));
});

gulp.task("uglify", function () {
  return gulp.src("./js/script.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("./js"));
});

gulp.task("lint", function() {
  return gulp.src(["**/*.js","!node_modules/**", "!**/*.min.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("watch", function () {
  watch("./css/style.css", function () {
    gulp.start("minify-css");
  });

  watch("./js/script.js", function () {
    gulp.start("uglify");
  });
});

gulp.task("default", ["lint"], function () {
  gulp.start("minify-css", "uglify");
});
