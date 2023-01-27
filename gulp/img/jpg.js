import gulp from "gulp";
import {config} from "../config.js";

import imagemin from "gulp-imagemin";
import {mozjpeg} from "gulp-imagemin";
import newer from "gulp-newer";

export function minJpg() {
	return gulp
		.src(config.src.jpg)
		.pipe(newer(config.out.minImg))
		.pipe(imagemin([mozjpeg({quality: 75, progressive: true})]))
		.pipe(gulp.dest(config.out.minImg));
}
