const outDir = "frontend-dist";
const srcDir = "src";
const currentPage = ["src/pug/pages/_index.pug"];

const config = {
	isProd: process.env.NODE_ENV === "production",
	isDev: process.env.NODE_ENV === "development",
	isServedOnlyPages: false,
	src: {
		baseDir: srcDir,
		pug: srcDir + "/pug/pages/*.pug",
		includePug: currentPage,
		scss: srcDir + "/scss/site-main.scss",
		js: srcDir + "/js/pages/index.js",
		includeScripts: srcDir + "/js/include-scripts/**/*.js",
		libs: srcDir + "/js/libs/**/*.js",
		webp: srcDir + "/img/**/*.{png,jpg,jpeg}",
		jpg: srcDir + "/img/**/*.{jpeg,jpg}",
		png: srcDir + "/img/**/*.png",
		svg: srcDir + "/svg/**/*.svg",
		copyToDist: [srcDir + "/copyToDist/**", `!${srcDir}/copyToDist/**/*.md`],
	},
	out: {
		baseDir: outDir,
		html: outDir + "/pages",
		css: outDir + "/css",
		js: outDir + "/js",
		libs: outDir + "/js/libs",
		includeScripts: outDir + "/include-scripts",
		webpImg: outDir + "/webp-img",
		minImg: outDir + "/min-img",
		svg: outDir + "/svg/",
		copyToDist: outDir + "/",
	},
	watch: {
		scss: "src/scss/**/*.*",
		includePug: ["src/pug/include/**/*.pug", "src/pug/page-layout/**/*.pug", "src/pug/page-template/**/*.pug"].concat(
			currentPage
		),
		includeLibs: ["src/less/include-libs/**/*.*", "src/js/include-libs/**/*.*"],
	},
};

console.log(process.env.NODE_ENV);

module.exports = config;
