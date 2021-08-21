const { src, dest } = require("gulp");
const htmlValidator = require("gulp-w3c-html-validator");
const pug = require("gulp-pug");
const config = require("./config.js");

module.exports = function include_pug2html() {
	return src(config.src.includePug)
		.pipe(pug({}))
		.pipe(htmlValidator())
		.pipe(dest(config.out.html));
};
