const {watch, series, parallel} = require("gulp");
const webp = require("./img/webp");
const svg = require("./img/svg");
const minPng = require("./img/png");
const minJpg = require("./img/jpg");
const style = require("./styles");
const server = require("browser-sync").create();
const pug2html = require("./pug2html");
const include_pug2html = require("./include_pug2html");
const config = require("./config.js");

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

	if (config.isServedOnlyPages) {
		watch(config.src.pug, pug2html);
	} else {
		watch(config.watch.includePug, include_pug2html);
	}

	watch(config.watch.scss, style);
	watch(config.src.webp, webp);
	watch(config.src.svg, svg);
	watch(config.src.png, minPng);
	watch(config.src.jpg, minJpg);

	watch(config.out.baseDir).on("change", server.reload);
	//watch(config.src.js, script);
};
