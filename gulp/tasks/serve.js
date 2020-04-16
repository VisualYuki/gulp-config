const gulp = require("gulp");

const webp = require("./img/img_webp");
const svg = require("./img/img_svg");
const minPng = require("./img/min_png");
const style = require("./style");
const pug2html = require("./pug2html");
//const script = require("./script");

const server = require("browser-sync").create();

module.exports = function serve(cb) {

   server.init({
      server: {
			baseDir: "dist/pages",
			directory: true, 
			index: "index.html"
		},

      notify: true,
		open: true,
		port: 3000
      //  cors: true
   });

   gulp
      .watch("src/img/*/*.{png,jpg,webp}", gulp.series(webp))
      .on("change", server.reload);

   gulp
      .watch("src/img/*/*.{png}", gulp.series(minPng))
      .on("change", server.reload);

   gulp
      .watch("src/img/*/*.svg", gulp.series(svg))
      .on("change", server.reload);

		gulp
      .watch("src/less/**/*.less", style)
      .on("change", server.reload({stream: true}));

		gulp
      .watch("src/pug/pages/*.pug", pug2html)
		.on("change", server.reload);
		
   //gulp
   //   .watch("src/js/**/*.js", gulp.series(script))
   //	.on("change", server.reload);

 

   return cb();
};
