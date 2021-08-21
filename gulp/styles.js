//const plumber = require("gulp-plumber");
//const shorthand = require("gulp-shorthand");

const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

const scss = require("gulp-sass")(require("sass"));
var sassGlob = require("gulp-sass-glob");

const sourcemaps = require("gulp-sourcemaps");

const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const gulpif = require("gulp-if");
const notify = require("gulp-notify");
const gulpStylelint = require("gulp-stylelint");
const gcmq = require("gulp-group-css-media-queries");

const ccso = require("gulp-csso");

let config = require("./config.js");

// TODO проверить плагины gulpStylelint, ccso, cleanCSS

module.exports = function styles() {
	//.pipe(lessGlob())
	//.pipe(gulpif(config.isProd, autoprefixer()))
	//.pipe(gulpif(config.isProd, shorthand()))
	//.pipe(plumber())

	return gulp
		.src(config.src.scss)
		.pipe(
			gulpStylelint({
				failAfterError: false,
				reporters: [
					{
						formatter: "string",
						console: true,
					},
				],
			})
		)
		.pipe(gulpif(config.isDev, sourcemaps.init()))
		.pipe(sassGlob())
		.pipe(scss())
		.pipe(gulpif(config.isDev, sourcemaps.write()))
		.pipe(gulpif(config.isProd, gcmq()))
		.pipe(gulpif(config.isProd, ccso()))
		.pipe(
			gulpif(
				config.isProd,
				cleanCSS(
					{
						level: 2,
					}
					//(details) => {
					//	console.log(
					//		`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
					//	);
					//}
				)
			)
		)
		.pipe(gulp.dest(config.out.css));
};
