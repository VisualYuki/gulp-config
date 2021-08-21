const { dest, src, lastRun } = require("gulp");

const config = require("./config.js");

module.exports = function copyToDist() {
	return src(config.src.copyToDist, {
		since: lastRun(copyToDist),
		silent: false,
	}).pipe(dest(config.out.copyToDist));
};
