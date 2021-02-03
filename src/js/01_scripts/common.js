$(document).ready(function () {
   /* ------------- scroll to top ------------ */

   $(".scroll-to-top").click(function () {
      $("html, body").animate({ scrollTop: "0px" });
      return false;
   });
   
});
