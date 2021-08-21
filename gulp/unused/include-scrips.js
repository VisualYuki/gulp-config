const gulp = require("gulp");
const newer = require("gulp-newer");

const config = require("../config.js");

module.exports = function includeScripts() {
	return gulp
		.src(config.src.includeScripts)

		.pipe(gulp.dest(config.out.includeScripts));
};
