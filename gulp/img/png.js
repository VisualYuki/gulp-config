import gulp from "gulp";
import {config} from "../config.js";

import gulpPngquant from "gulp-pngquant";
import newer from "gulp-newer";

export function minPng() {
	return gulp
		.src(config.src.png)
		.pipe(newer(config.out.minImg))
		.pipe(
			gulpPngquant({
				quality: "65-75",
			})
		)
		.pipe(gulp.dest(config.out.minImg));
}
