const gulp = require("gulp");

const webp = require("./img/img_webp");
const svg = require("./img/img_svg");
const minPng = require("./img/min_png");
const minJpg = require("./img/min_jpg");
const style = require("./style");
const script = require("./script");
const include_pug2html = require("./include_pug2html");
const server = require("browser-sync").create();
const favicons = require("./favicons");
const fonts = require("./fonts");
const includeLibs = require("./include-libs");
const includeScripts = require("./include-scrips");

let config = require("./config.js");

module.exports = function serve() {
   server.init({
      server: {
         baseDir: config.out.baseDir,
         directory: true,
      },
      open: false,
      ghostMode: {
         clicks: false,
         forms: false,
         scroll: false,
      },
   });

   gulp.watch(config.src.less, style);
   gulp.watch(config.src.js, script);
   gulp.watch(config.watch.includePug, include_pug2html);
   gulp.watch(config.watch.includeLibs, gulp.series(includeLibs));
   gulp.watch(config.src.includeScripts, gulp.series(includeScripts));

   gulp.watch(config.src.webp, gulp.series(webp));
   gulp.watch(config.src.svg, gulp.series(svg));
   gulp.watch(config.src.png, gulp.series(minPng));
   gulp.watch(config.src.jpg, gulp.series(minJpg));

   gulp.watch(config.src.favicons, favicons);
   gulp.watch(config.src.fonts, gulp.series(fonts));

   gulp.watch(config.out.baseDir).on("change", server.reload);
};

//gulp.watch("src/pug/include/**/*.pug", include_pug2html);
//gulp.watch("src/pug/page-layout/**/*.pug", include_pug2html);
//gulp.watch("src/pug/pages-layout/**/*.pug", include_pug2html);

//gulp.watch(config.out.baseDir + "/css/**/*.css").on("change", function (event, file) {
//   if (event === "change" || event === "add") {
//   server.reload();
//   }
//});

//server.watch([config.out.baseDir + "/img/**/*.{png,jpg,webp,svg}"], function (event, file) {
//   if (event === "change" || event === "add") {
//      server.reload();
//   }
//});

//gulp.watch(config.out.svg).on("change", server.reload);
//gulp.watch(config.out.baseDir + "/img/**/*.{png,jpg,webp}").on("change", server.reload);

//gulp.watch(config.out.html + "/**/*.html").on("change", function (event, file) {
//   server.reload();
//});
//gulp.watch(config.out.baseDir + "/js/**/*.js").on("change", server.reload);

//gulp.watch("src/pug/svg/*.pug", include_pug2html);
//gulp.watch("src/pug/pages/*.pug", pug2html);
