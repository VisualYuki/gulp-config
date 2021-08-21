const gulp = require("gulp");
const newer = require("gulp-newer");

const config = require("./config.js");

module.exports = function font() {
	return gulp
		.src(config.src.fonts)
		.pipe(newer(config.out.fonts))
		.pipe(gulp.dest(config.out.fonts));
};
