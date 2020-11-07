const gulp = require("gulp");
const gulpPngquant = require("gulp-pngquant");
const newer = require("gulp-newer");

module.exports = function min_png() {
   let src = "src/img/**/*.png";
   let dist = "dist/min-img";
   return gulp
      .src(src)
      .pipe(newer(dist))
      .pipe(
         gulpPngquant({
            quality: "65-75",
         })
      )
      .pipe(gulp.dest(dist));
};
