const outDir = "dist";

module.exports =  {
   src: {
      pug: "src/pug/pages/**/*.pug",
      includePug: "src/pug/pages/_index.pug",
      less: "src/less/main.less",
      //img: "src/img/**/*.*",
      //video: "src/video/**/*.*",
      js: "src/js/**/*.js",
      libs: "src/js/libs/**/*.js",
      fonts: "src/fonts/**/*.*",
      favicons: "src/favicons/**/*.*",
      svg: "src/svg/**/*.svg",
      webp: "src/img/**/*.{pngsad,jpg,jpeg}",
      jpg: "src/img/**/*.{jpeg,jpg}",
      png: "src/img/**/*.png",
      includeScripts: "src/js/include-scripts/**/*.js"
   },
   out: {
      html: outDir + "/pages",
      css: outDir + "/css",
      fonts: outDir + "/fonts",
      webpImg: outDir + "/webp-img",
      minImg: outDir + "/min-img",
      //video: outDir + "/video",
      js: outDir + "/js",
      libs: outDir + "/js/libs",
      favicons: outDir + "/favicons",
      baseDir: outDir,
      svg: outDir + "/svg/",
      includeScripts: outDir + "/include-scripts"
   },
   watch: {
      includePug: ["src/pug/include/**/*.pug", "src/pug/page-layout/**/*.pug", "src/pug/pages-layout/**/*.pug"],
      includeLibs: ["src/less/include-libs/**/*.*", "src/js/include-libs/**/*.*"]
   },
};
