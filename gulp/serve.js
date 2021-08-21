const { watch, series, parallel } = require("gulp");

const webp = require("./img/webp");
const svg = require("./img/svg");
const minPng = require("./img/png");
const minJpg = require("./img/jpg");
const style = require("./styles");
//const script = require("./script");
const include_pug2html = require("./include_pug2html");
const server = require("browser-sync").create();
//const favicons = require("./unused/favicons");
//const fonts = require("./fonts");
const includeLibs = require("./include-libs");
const includeScripts = require("./include-scrips");
const pug2html = require("./pug2html");
//const gifs = require("./gifs");

let config = require("./config.js");

module.exports = function serve() {
	server.init({
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

	watch(config.watch.scss, style);

	//watch(config.src.js, script);
	watch(config.watch.includePug, include_pug2html);
	watch(config.src.pug, pug2html);
	watch(config.watch.includeLibs, series(includeLibs));
	watch(config.src.includeScripts, series(includeScripts));
	watch(config.src.webp, series(webp));
	watch(config.src.svg, series(svg));
	watch(config.src.png, series(minPng));
	watch(config.src.jpg, series(minJpg));
	watch(config.out.baseDir).on("change", server.reload);
};
