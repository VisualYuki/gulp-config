let gulp = require("gulp");

const font = require("./gulp/tasks/fonts");
const img_webp = require("./gulp/tasks/img/img_webp");
//const dev_pug2html = require("./gulp/tasks/dev_pug2html.js");
const pug2html = require("./gulp/tasks/pug2html");
const clean = require("./gulp/tasks/clean/clean");
const style = require("./gulp/tasks/style");
const webp = require("./gulp/tasks/img/img_webp");
const svg = require("./gulp/tasks/img/img_svg");
const minPng = require("./gulp/tasks/img/min_png");
const minJpg = require("./gulp/tasks/img/min_jpg");
const serve =  require("./gulp/tasks/serve");

//const dev = gulp.series(clean,gulp.parallel(build_pug2html,fonts,styles,webp,svg,minPng));

//const cleanImg = require("./gulp/tasks/clean/cleanImg");
//const cleanFont = require("./gulp/tasks/clean/cleanFont");
//const cleanPage = require("./gulp/tasks/clean/cleanPage");
//const cleanStyle = require("./gulp/tasks/clean/cleanStyle");

//gulp.task("cleanImg", cleanImg);
//gulp.task("img", gulp.series(cleanImg, gulp.parallel(webp, svg, minPng)));
//gulp.task("page", gulp.series(cleanPage, pug2html));
//gulp.task("style", gulp.series(cleanStyle, style));
//gulp.task("font", gulp.series(cleanFont, font));


gulp.task("img", gulp.parallel(webp, svg, minPng));
gulp.task("page", pug2html);
gulp.task("style", style);
gulp.task("font", font);

//const dev = gulp.parallel();

const build = gulp.series(
   clean,
   gulp.parallel(pug2html, font, style, webp, svg, minPng)
);

//gulp.task("dev", dev);
gulp.task("build", build);
gulp.task("serve", serve);
//module.exports.dev = dev;
//module.exports.build = build;

//gulp.task('dev', gulp.series('fonts'));

//gulp.task('clean', async function(){
//	del.sync('dist')
//});

//gulp.task("less", function () {
//   return gulp
//      .src("src/less/**/*.less")
//      //.pipe(rename({ suffix: ".min" }))
//      .pipe(
//         less({})
//		)
//		.pipe(autoprefixer({
//			browsers: ['last 3 versions']
//		 }))
//      .pipe(gulp.dest("src/css"))
//      .pipe(browserSync.reload({ stream: true }));
//});

//gulp.task("css", function () {
//   return gulp
//      .src([
//         "node_modules/normalize.css/normalize.css",
//         "node_modules/slick-carousel/slick/slick.css",
//         //"node_modules/magnific-popup/dist/magnific-popup.css",
//      ])
//      .pipe(concat("libs.css"))
//      .pipe(gulp.dest("src/css"));
//});

//gulp.task("export", function () {
//   let buildHtml = gulp.src("src/**/*.html").pipe(gulp.dest("dist"));
//	let buildCss = gulp.src("src/css/**/*.css").pipe(gulp.dest("dist/css"));
//	let buildJs = gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
//	let buildFonts = gulp.src("src/fonts/**/*.*").pipe(gulp.dest("dist/fonts"));
//	let buildImg = gulp.src("src/img/**/*.*").pipe(gulp.dest("dist/img"));
//});

//gulp.task('build', gulp.series('clean', 'export'))

//gulp.task("serve", function () {
//   browserSync.init({
//      server: {
//         baseDir: "src",
//      },
//   });
//});

//gulp.task("html", function () {
//   return gulp.src("src/**/*.html").pipe(browserSync.reload({ stream: true }));
//});

//gulp.task("script", function () {
//   return gulp.src("src/js/**/*.js").pipe(browserSync.reload({ stream: true }));
//});

//gulp.task("js", function () {
//   return gulp
//      .src([
//         "node_modules/slick-carousel/slick/slick.js",
//         "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
//      ])
//      .pipe(concat("libs.min.js"))
//      .pipe(uglify())
//      .pipe(gulp.dest("src/js"))
//      .pipe(browserSync.reload({ stream: true }));
//});

//gulp.task("watch", function () {
//   gulp.watch("src/less/**/*.less", gulp.parallel("less"));
//   gulp.watch("src/**/*.html", gulp.parallel("html"));
//   gulp.watch("src/**/*.js", gulp.parallel("script"));
//});

//gulp.task("default", gulp.parallel("less", "js", "serve", "watch"));
