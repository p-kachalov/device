/* global require */
var gulp = require("gulp");
var rename = require("gulp-rename");
var cleanCSS = require("gulp-clean-css");

gulp.task("minify-css", function () {
  return gulp.src("./css/style.css")
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./css"));
});
