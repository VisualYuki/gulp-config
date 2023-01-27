import gulp from "gulp";
import {config} from "./config.js";

import dartSass from "sass";
import gulpSass from "gulp-sass";
const scss = gulpSass(dartSass);
import sassGlob from "gulp-sass-glob";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import gulpif from "gulp-if";
import gulpStylelint from "gulp-stylelint";
import gcmq from "gulp-group-css-media-queries";
import ccso from "gulp-csso";

export function styles() {
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
		.pipe(gulpif(config.isProd, autoprefixer()))

		.pipe(
			gulpif(
				config.isProd,
				cleanCSS({
					level: 2,
				})
			)
		)
		.pipe(gulp.dest(config.out.css));
}

//import rename from "gulp-rename";
//import webpcss from "gulp-webpcss"; 	//.pipe(webpcss({}))
//const notify = require("gulp-notify");
//const plumber = require("gulp-plumber");
//const shorthand = require("gulp-shorthand");

//.pipe(lessGlob())

//.pipe(gulpif(config.isProd, shorthand()))
//.pipe(plumber())
