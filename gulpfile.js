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

//MAIN TASK
const build = gulp.parallel(pug2html, style, script, font, svg, minPng, minJpg, favicons);
gulp.task("build", gulp.series(clean, cache, build));
gulp.task("dev", gulp.series(build, cache, serve));

//SINGLE TASK
gulp.task("script", script);
gulp.task("style", style);
gulp.task("minJpg", minJpg);
gulp.task("minPng", minPng);
gulp.task("serve", serve);
gulp.task("pug2html", pug2html);
gulp.task("webp", webp);
gulp.task("favicons", favicons);
gulp.task("cache", cache);
gulp.task("svgSprite", svgSprite);
gulp.task("font", font);
gulp.task("clean", clean);
gulp.task("svg", svg);

gulp.task("webp", webp);
