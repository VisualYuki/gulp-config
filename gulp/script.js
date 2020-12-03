const gulp = require("gulp");
const eslint = require("gulp-eslint");
const babel = require("gulp-babel");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
const concat = require("gulp-concat");

let config = require("./config.js");

module.exports = function script() {
   let src = ["src/js/00_libs/*.js", "src/js/01_scripts/*.js"];
   return (
      gulp
         .src(src)
         .pipe(concat("main.js"))
         //.pipe(gulpif(isProd, eslint()))
         //.pipe(gulpif(isProd, eslint.format()))
         .pipe(gulpif(config.isProd, sourcemaps.init()))
         //.pipe(
         //   gulpif(
         //      isProd,
         //      babel({
         //         presets: ["@babel/env"],
         //      })
         //   )
         //)
         .pipe(gulpif(config.isProd, terser()))
         .pipe(gulpif(config.isProd, sourcemaps.write()))
         //.pipe(rename({ suffix: ".min" }))
         .pipe(gulp.dest(config.out.js))
   );
};
