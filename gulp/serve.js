import gulp from "gulp";
import {config} from "./config.js";

//import { webp } from "./img/webp.js";
//import {minSvg} from "./img/svg.js";
//import { minPng } from "./img/png.js";
//import { minJpg } from "./img/jpg.js";
import {styles} from "./styles.js";
import pkg from "browser-sync";
const {server} = pkg;
import {pug2html} from "./pug2html.js";
import {include_pug2html} from "./include_pug2html.js";
import {copyToDist} from "./copyToDist.js";

export function serve() {
	server.create().init({
		server: {
			//baseDir: config.out.baseDir,
			directory: true,
		},
		open: false,
		ghostMode: {
			clicks: false,
			forms: false,
			scroll: false,
		},
	});

	if (config.isServedOnlyPages) {
		gulp.watch(config.src.pug, pug2html);
	} else {
		gulp.watch(config.watch.includePug, include_pug2html);
	}

	gulp.watch(config.src.copyToDist, copyToDist);
	gulp.watch(config.watch.scss, styles);
	//watch(config.src.webp, webp);
	//gulp.watch(config.src.svg, minSvg);
	//watch(config.src.png, minPng);
	//watch(config.src.jpg, minJpg);

	gulp.watch(config.out.baseDir).on("change", server.reload);
}
