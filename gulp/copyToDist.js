const { dest, src } = require("gulp");
const newer = require("gulp-newer");
const config = require("./config.js");

module.exports = function copyToDist() {
	return src(config.src.copyToDist)
		.pipe(newer(config.out.copyToDist))
		.pipe(dest(config.out.copyToDist));
};
