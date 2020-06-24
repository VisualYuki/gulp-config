let gulp = require("gulp");
let rename = require("gulp-rename");

const font = require("./gulp/tasks/fonts");
const pug2html = require("./gulp/tasks/pug2html");
const clean = require("./gulp/tasks/clean/clean");
const style = require("./gulp/tasks/style");
const webp = require("./gulp/tasks/img/img_webp");
const svg = require("./gulp/tasks/img/img_svg");
const minPng = require("./gulp/tasks/img/min_png");
const minJpg = require("./gulp/tasks/img/min_jpg");
const serve = require("./gulp/tasks/serve");
const script = require("./gulp/tasks/script");
const cache = require("./gulp/tasks/clearCache");
const favicons = require("./gulp/tasks/favicons");

const svgSprite = require("./gulp/tasks/svgSprite");

const newer = require("gulp-newer");
var imagemin = require("gulp-imagemin");
function min_jpg() {
   let src = "src/img/**/*.{jpeg,jpg}";
   let dist = "dist/min-img";

   return gulp
      .src(src, { since: gulp.lastRun(min_jpg) })
      .pipe(newer(dist))
      .pipe(imagemin())
      .pipe(gulp.dest(dist));
}

const build = gulp.parallel(pug2html, style, script, font, webp, svg, minPng, minJpg);

gulp.task("build", gulp.series(clean, cache, favicons, build));

gulp.task("dev", gulp.series(build, favicons, cache, serve));

gulp.task("getLib", gulp.parallel(fancyBox, jquery, slickCarousel,simplebar,noUiSlider));

function simplebar() {
   return gulp.src("node_modules/simplebar/dist/simplebar.min.js").pipe(rename("03_simplebar.min.js")).pipe(gulp.dest("src/js/00_libs/"));
}

function fancyBox() {
   return gulp.src("node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js").pipe(rename("01_jquery.fancybox.min.js")).pipe(gulp.dest("src/js/00_libs/"));
}

function jquery() {
   return gulp.src("node_modules/jquery/dist/jquery.min.js").pipe(rename("00_jquery.min.js")).pipe(gulp.dest("src/js/00_libs/"));
}

function slickCarousel() {
   return gulp.src("node_modules/slick-carousel/slick/slick.min.js").pipe(rename("02_slick.min.js")).pipe(gulp.dest("src/js/00_libs/"));
}

function noUiSlider() {
   return gulp.src("node_modules/nouislider/distribute/nouislider.min.js").pipe(rename("04_nouislider.min.js")).pipe(gulp.dest("src/js/00_libs/"));
}

//gulp.task('default', slickCarousel);

//gulp.task("img", gulp.parallel(webp, svg, minPng));
//gulp.task("min-img", gulp.series(svg,minPng,minJpg));
//gulp.task("page", pug2html);
//gulp.task("style", style);
//gulp.task("font", font);
//gulp.task("script", script);
