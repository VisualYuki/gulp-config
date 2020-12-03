
const outDir = "dist";
const isDev = true;

module.exports =  {
   src: {
      pug: "src/pug/pages/*.pug",
      less: "src/less/main.less",
      img: "src/img/**/*.*",
      video: "src/video/**/*.*",
      js: "src/js/*.js",
      libs: "src/js/libs/**/*.js",
      fonts: "src/fonts/**/*.*",
      favicons: "src/favicons/*",
      svg: "src/svg/*.svg",
      webp: "src/img/**/*.{png,jpg,jpeg}"
   },
   out: {
      html: outDir + "/pages",
      css: outDir + "/css",
      fonts: outDir + "/fonts",
      img: outDir + "/img",
      video: outDir + "/video",
      js: outDir + "/js",
      libs: outDir + "/js/libs",
      favicons: outDir + "/favicons",
      baseDir: outDir,
      svg: outDir + "/svg/"
     
   },
   //watch: {
   //   html: "src/views/**/*.html",
   //   stylus: "src/stylus/**/*.{styl, css}",
   //   js: "src/js/**/*.js",
   //},
   isDev: isDev,
   isProd: !isDev
  
};
