import gulp from "gulp";

import gulpWebp from "gulp-webp";
import newer from "gulp-newer";

import {config} from "../config.js";

export function convWebp() {
	return gulp
		.src(config.src.webp)
		.pipe(newer(config.out.webpImg))
		.pipe(gulpWebp())
		.pipe(gulp.dest(config.out.webpImg));
}

//const imagemin = require("gulp-imagemin");
//const webpPlugin = require("imagemin-webp");
//const extReplace = require("gulp-ext-replace");
