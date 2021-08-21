const gulp = require("gulp");
const newer = require("gulp-newer");
const config = require("./config.js");

module.exports = function gifs() {
	return gulp
		.src(config.src.gifs)
		.pipe(newer(config.out.gifs))
		.pipe(gulp.dest(config.out.gifs));
};
