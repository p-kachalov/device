/* global require */
var gulp = require("gulp");
var rename = require("gulp-rename");
var cleanCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var eslint = require("gulp-eslint");

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

gulp.task("default", ["lint"], function () {
  gulp.start("minify-css", "uglify");
});
