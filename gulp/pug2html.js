import gulp from "gulp";
import {config} from "./config.js";

import pug from "gulp-pug";
import newer from "gulp-newer";
import formatHtml from "gulp-format-html";
import {htmlValidator} from "gulp-w3c-html-validator";

export function pug2html() {
	return gulp
		.src(config.src.pug)
		.pipe(newer(config.out.html))
		.pipe(pug({pretty: true}))

		.pipe(
			formatHtml({
				indent_size: 3,
				indent_with_tabs: true,
			})
		)
		.pipe(htmlValidator.analyzer())
		.pipe(gulp.dest(config.out.html));
}

//const webpHTML = require("gulp-webp-html"); - под вопросом. //.pipe(webpHTML()) - под вопросом
//.pipe(
//	prettier({
//		tabWidth: 3,
//		useTabs: true,
//		printWidth: 700,
//	})
//)
//const prettier = require("gulp-prettier");
//const plumber = require("gulp-plumber");
//const notify = require("gulp-notify");
//const pugLintStylish = require("puglint-stylish");
