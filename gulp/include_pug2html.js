const gulp = require("gulp");
const pug = require("gulp-pug");
const htmlValidator = require("gulp-w3c-html-validator");
const pugLinter = require("gulp-pug-linter");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer");
const notify = require("gulp-notify");

//посмотреть pug linter

let config = require("./config.js");

module.exports = function include_pug2html() {
   return gulp
		.src(config.src.pug)
      .pipe(plumber())
      .pipe(pugLinter({ reporter: "default" }))
      .pipe(
         pug({
            pretty: true,
         })
		)
		//.on("error", notify.onError())
		.on("error", function(err){
			console.log(err.message);
			this.end();
		})
      .pipe(htmlValidator())
      .pipe(gulp.dest(config.out.html));
};
