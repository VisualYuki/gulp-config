const {dest, src, series, task, parallel, gulp} = require("gulp");
const serve = require("./gulp/serve");
const pug2html = require("./gulp/pug2html");
const include_pug2html = require("./gulp/include_pug2html");
const styles = require("./gulp/styles");
const copyToDist = require("./gulp/copyToDist");
const webp = require("./gulp/img/webp");
const minPng = require("./gulp/img/png");
const minJpg = require("./gulp/img/jpg");
const svg = require("./gulp/img/svg");
const clear = require("./gulp/clear");
//const script = require("./gulp/script");
//const svgSprite = require("./gulp/unused/svgSprite");

// BUILD TASK
const build = parallel(pug2html, styles, svg, minPng, minJpg, copyToDist, webp);

exports.build = series(clear, build);
exports.dev = series(build, serve);

// SINGLE TASK
exports.serve = serve;
exports.pug2html = pug2html;
exports.include_pug2html = include_pug2html;
exports.styles = styles;
exports.minJpg = minJpg;
exports.minPng = minPng;
exports.webp = webp;
exports.svg = svg;
exports.img = series(svg, minJpg, minPng, webp);
exports.copyToDist = copyToDist;
exports.clear = clear;
