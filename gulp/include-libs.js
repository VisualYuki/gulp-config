const gulp = require("gulp");
const newer = require("gulp-newer");

let config = require("./config.js");

module.exports = function includeLibs() {
   return gulp
      .src(["src/less/include-libs/*.*", "src/js/include-libs/*.*"])
      
      .pipe(gulp.dest(config.out.baseDir + "/include-libs"));
};
