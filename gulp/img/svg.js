const { dest, src } = require("gulp");
const svgmin = require("gulp-svgmin");
const config = require("../config.js");
const newer = require("gulp-newer");

module.exports = function svg() {
	return src(config.src.svg, {
		silent: false,
	})
		.pipe(newer(config.out.svg))
		.pipe(svgmin())
		.pipe(dest(config.out.svg));
};
