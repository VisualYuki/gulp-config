let gulp = require("gulp");

const font = require("./gulp/fonts");
const pug2html = require("./gulp/pug2html");
const clean = require("./gulp/clean");
const style = require("./gulp/style");
const webp = require("./gulp/img/img_webp");
const svg = require("./gulp/img/img_svg");
const minPng = require("./gulp/img/min_png");
const minJpg = require("./gulp/img/min_jpg");
const serve = require("./gulp/serve");
const script = require("./gulp/script");
const cache = require("./gulp/clearCache");
const favicons = require("./gulp/favicons");

const svgSprite = require("./gulp/svgSprite");

const build = gulp.parallel(pug2html, style, script, font,  svg, minPng, minJpg);

gulp.task("build", gulp.series(clean, cache, favicons, build));

gulp.task("default", gulp.series(build, favicons, cache, serve));

