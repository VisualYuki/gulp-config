const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const less = require("gulp-less");
const sourcemaps = require("gulp-sourcemaps");
const shorthand = require("gulp-shorthand");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");

module.exports = function styles() {
   let src = "src/less/main.less";
   let dest = "dist/css";

   return gulp
      .src(src)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(less({ compress: true }))
      .pipe(autoprefixer())
      .pipe(shorthand())
      .pipe(
         cleanCSS(
            {
               level: 2,
            },
            (details) => {
               console.log(
                  `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
               );
            }
         )
      )
      .pipe(sourcemaps.write())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(dest));
};
