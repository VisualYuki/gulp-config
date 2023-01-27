import gulp from "gulp";
import {config} from "./config.js";

import pug from "gulp-pug";
import formatHtml from "gulp-format-html";

export function include_pug2html() {
	return gulp
		.src(config.src.includePug)
		.pipe(pug({}))
		.pipe(
			formatHtml({
				indent_size: 3,
				indent_with_tabs: true,
			})
		)
		.pipe(gulp.dest(config.out.html));
}

//import {htmlValidator} from "gulp-w3c-html-validator"; //.pipe(htmlValidator())
