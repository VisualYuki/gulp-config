import gulp from "gulp";
import {config} from "./config.js";

import pug from "gulp-pug";

export function include_pug2html() {
	return gulp
		.src(config.src.includePug)
		.pipe(pug({}))

		.pipe(gulp.dest(config.out.html));
}

//import {htmlValidator} from "gulp-w3c-html-validator"; //.pipe(htmlValidator())
