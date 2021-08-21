const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const config = require("../config.js");

module.exports = function min_jpg() {
	return (
		src(config.src.jpg)
			.pipe(newer(config.out.minImg))
			.pipe(imagemin([imagemin.mozjpeg({ progressive: true })]))
			//.pipe(imagemin([imagemin.mozjpeg({ quality: 75, progressive: true })]))
			.pipe(dest(config.out.minImg))
	);
};

//const newer = require("gulp-newer");
//const imagemin = require("gulp-imagemin");
//function min_jpg() {
//   const src = "src/img/**/*.{jpeg,jpg}";
//   const dist = "dist/min-img";

//   return gulp
//      .src(src, { since: gulp.lastRun(min_jpg) })
//      .pipe(newer(dist))
//      .pipe(imagemin())
//      .pipe(gulp.dest(dist));
//}
