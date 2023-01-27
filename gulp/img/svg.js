import gulp from "gulp";
import {config} from "../config.js";

import svgmin from "gulp-svgmin";
import newer from "gulp-newer";

export function minSvg() {
	return gulp
		.src(config.src.svg, {
			silent: false,
		})
		.pipe(newer(config.out.svg))
		.pipe(svgmin())
		.pipe(gulp.dest(config.out.svg));
}
