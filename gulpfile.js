import gulp from "gulp";

import {serve} from "./gulp/serve.js";
import {styles} from "./gulp/styles.js";
import {pug2html} from "./gulp/pug2html.js";
import {include_pug2html} from "./gulp/include_pug2html.js";

import {minPng} from "./gulp/img/png.js";
import {minJpg} from "./gulp/img/jpg.js";
import {convWebp} from "./gulp/img/webp.js";
import {minSvg} from "./gulp/img/svg.js";

import {clearDist} from "./gulp/clear.js";
import {copyToDist} from "./gulp/copyToDist.js";

// BUILD TASK
const build = gulp.parallel(pug2html, styles, minSvg, minPng, minJpg, copyToDist);

gulp.task("build", gulp.series(clearDist, build));
gulp.task("dev", gulp.series(build, serve));

// SINGLE TASK
gulp.task("serve", serve);
gulp.task("pug2html", pug2html);
gulp.task("include_pug2html", include_pug2html);
gulp.task("styles", styles);
gulp.task("minSvg", minSvg);
gulp.task("minJpg", minJpg);
gulp.task("minPng", minPng);
gulp.task("convWebp", convWebp);
gulp.task("allImg", gulp.series(minSvg, minJpg, minPng, convWebp));
gulp.task("clearDist", clearDist);
gulp.task("copyToDist", copyToDist);
