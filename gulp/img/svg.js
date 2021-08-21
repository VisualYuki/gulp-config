const { dest, src, lastRun } = require("gulp");
const svgmin = require("gulp-svgmin");
const config = require("../config.js");

module.exports = function svg() {
	return src(config.src.svg, {
		since: lastRun(svg),
		silent: false,
	})
		.pipe(svgmin())
		.pipe(dest(config.out.svg));
};
