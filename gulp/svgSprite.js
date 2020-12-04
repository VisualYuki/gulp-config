const gulp = require("gulp");
const rename = require("gulp-rename");
const svgSprite = require("gulp-svg-sprite");
const gulpif = require("gulp-if");

let config = require("./config.js");

module.exports = function svgsprite() {
   let src = "src/svg/**/*.svg";
   let dist = "dist/svg/sprite";

   let config = {
      mode: {
         symbol: {
            sprite: "/sprite.svg",
            render: {
               less: {
                  dest:'/sprite.less'
               }
            }
         }
      }
   };

   return gulp.src(src).pipe(svgSprite(config)).pipe(gulp.dest(dist));
};
