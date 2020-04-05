let gulp = require("gulp"),
   less = require("gulp-less"),
	browserSync = require("browser-sync"),
	uglify =  require("gulp-uglify"),
	concat = require("gulp-concat"),
	rename = require("gulp-rename");


let LessAutoprefix = require("less-plugin-autoprefix");
let autoprefix = new LessAutoprefix({ browsers: ["last 3 versions"] });

gulp.task("less", function () {
   return gulp
		.src("src/less/**/*.less")
		.pipe(rename({suffix: ".min"}))
      .pipe(
         less({
            plugins: [autoprefix],
         })
      )
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.reload({ stream: true }));
});

gulp.task("serve", function () {
   browserSync.init({
      server: {
         baseDir: "src",
      },
   });
});

gulp.task("html", function () {
   return gulp.src("src/**/*.html").pipe(browserSync.reload({ stream: true }));
});

gulp.task("script", function () {
   return gulp.src("src/js/**/*.js").pipe(browserSync.reload({ stream: true }));
});

gulp.task("js", function(){
	return gulp.src(["node_modules/slick-carousel/slick/slick.js","node_modules/magnific-popup/dist/jquery.magnific-popup.js"])
		.pipe(concat("libs.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest("src/js"))
		.pipe(browserSync.reload({ stream: true }));
})

gulp.task("watch", function () {
   gulp.watch("src/less/**/*.less", gulp.parallel("less"));
	gulp.watch("src/**/*.html", gulp.parallel("html"));
	gulp.watch("src/**/*.js", gulp.parallel("script"));
});


gulp.task("default", gulp.parallel("less","js","serve", "watch"));

