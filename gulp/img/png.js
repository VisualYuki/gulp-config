const { src, dest } = require("gulp");
const gulpPngquant = require("gulp-pngquant");
const newer = require("gulp-newer");
const config = require("../config.js");

module.exports = function min_png() {
	return src(config.src.png)
		.pipe(newer(config.out.minImg))
		.pipe(
			gulpPngquant({
				quality: "65-75",
			})
		)
		.pipe(dest(config.out.minImg));
};
