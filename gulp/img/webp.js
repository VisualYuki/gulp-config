//const imagemin = require("gulp-imagemin");
//const webpPlugin = require("imagemin-webp");
//const extReplace = require("gulp-ext-replace");
//const gulpPngquant = require("gulp-pngquant");
const {src, dest} = require("gulp");
const gulpWebp = require("gulp-webp");
const config = require("../config.js");
const newer = require("gulp-newer");

module.exports = function imgWebp() {
	return src(config.src.webp).pipe(newer(config.out.webpImg)).pipe(gulpWebp()).pipe(dest(config.out.webpImg));
};
