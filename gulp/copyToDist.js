import gulp from "gulp";
import {config} from "./config.js";

import newer from "gulp-newer";

export function copyToDist() {
	return gulp.src(config.src.copyToDist).pipe(newer(config.out.copyToDist)).pipe(gulp.dest(config.out.copyToDist));
}
