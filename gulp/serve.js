const gulp = require("gulp");

const webp = require("./img/img_webp");
const svg = require("./img/img_svg");
const minPng = require("./img/min_png");
const minJpg = require("./img/min_jpg");
const style = require("./style");
const pug2html = require("./pug2html");
const script = require("./script");
const include_pug2html = require("./include_pug2html");
const server = require("browser-sync").create();
const favicons = require("./favicons");
const fonts = require("./fonts");

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

   gulp.watch("src/img/**/*.{png,jpg,webp}", gulp.series(webp));
   gulp.watch("src/svg/**/*.svg", gulp.series(svg));
   server.watch([config.out.baseDir + "/img/**/*.{png,jpg,webp,svg}"], function (event, file) {
      if (event === "change" || event === "add") {
         server.reload();
      }
   });
   gulp.watch("src/img/**/*.png", gulp.series(minPng)).on("change", server.reload);
   gulp.watch("src/img/**/*.jpg", gulp.series(minJpg)).on("change", server.reload);
   gulp.watch(config.out.baseDir + "/svg/*.svg").on("change", server.reload);
   gulp.watch(config.out.baseDir + "/img/**/*.{png,jpg,webp}").on("change", server.reload);

   gulp.watch("src/less/**/*.less", style);
   gulp.watch(config.out.baseDir + "/css/**/*.css").on("change", function (event, file) {
      //if (event === "change" || event === "add") {
      server.reload();
      //}
   });

   gulp.watch("src/pug/**/*.pug", pug2html);
   gulp.watch("src/pug/include/*.pug", include_pug2html);
   gulp.watch("src/pug/layout/*.pug", include_pug2html);
   gulp.watch("src/pug/svg/*.pug", include_pug2html);
   gulp.watch(config.out.baseDir + "/pages/*.html").on("change", function (event, file) {
      server.reload();
   });

   gulp.watch("src/js/**/*.js", script);
   gulp.watch(config.out.baseDir + "/js/**/*.js").on("change", server.reload);

   gulp.watch("src/favicons/*.*", favicons);
   gulp.watch("src/fonts/**/*.*", gulp.series(fonts));
};
