let gulp = require("gulp");

module.exports = function favicons() {
   return gulp.src("src/favicons/*")
   .pipe(gulp.dest("dist/favicons"));
}