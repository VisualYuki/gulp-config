//const script = require("./gulp/script");
//const svgSprite = require("./gulp/unused/svgSprite");

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

// BUILD TASK
const build = parallel(
	pug2html,
	styles,
	//script,
	svg,
	minPng,
	minJpg,
	copyToDist,
	webp
);

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

//exports.getLibs = getLibs;
//exports.clear = clear;
//exports.clear = clear;
//exports.clear = clear;

//gulp.task("getLibs", gulp.series(getJsLibs, getCssLibs));

//function getJsLibs() {
//	let jsPath = [
//		"node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js",
//		"node_modules/jquery/dist/jquery.min.js",
//		"node_modules/slick-carousel/slick/slick.min.js",
//		"node_modules/lazysizes/lazysizes.min.js",
//	];
//	return gulp.src(jsPath).pipe(gulp.dest("src/js/libs"));
//}

//function getCssLibs() {
//	let cssPath = [
//		"node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css",
//		"node_modules/slick-carousel/slick/slick.less",
//		"node_modules/slick-carousel/slick/slick-theme.less",
//	];
//	return gulp.src(cssPath).pipe(gulp.dest("src/less/libs/"));
//}
