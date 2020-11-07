const gulp = require("gulp");
var imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

module.exports = function min_jpg() {
   let src = "src/img/**/*.{jpeg,jpg}";
   let dist = "dist/min-img";
   return (
      gulp
         .src(src)
         //.pipe(newer(dist))
         .pipe(imagemin([imagemin.mozjpeg({ progressive: true })]))
         //.pipe(imagemin([imagemin.mozjpeg({ quality: 75, progressive: true })]))
         .pipe(gulp.dest(dist))
   );
};

//const newer = require("gulp-newer");
//var imagemin = require("gulp-imagemin");
//function min_jpg() {
//   let src = "src/img/**/*.{jpeg,jpg}";
//   let dist = "dist/min-img";

//   return gulp
//      .src(src, { since: gulp.lastRun(min_jpg) })
//      .pipe(newer(dist))
//      .pipe(imagemin())
//      .pipe(gulp.dest(dist));
//}
