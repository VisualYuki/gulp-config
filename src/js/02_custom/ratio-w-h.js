$(document).ready(function () {
   
   setRatio();
   $(window).on("resize", function(){
      setRatio();
   });

   function setRatio() {
      $(".js-ratio-img").each(function(index,img){
         let imgWidth = img.offsetWidth;
         let srcHeight = img.getAttribute("data-src-h");
         let srcWidth = img.getAttribute("data-src-w");
         let newHeight = imgWidth * (srcHeight / srcWidth);
      
         $(img).css({
            height: newHeight + "px",
         });
      });
   }
   
});
