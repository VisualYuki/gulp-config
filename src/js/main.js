import $ from "jquery";


document.addEventListener("scroll", function () {
   let offsetTopMenu = $(".header").height() * 2;
   let header = $(".header");

   if ($(".header").hasClass("header__fixed")) {
      if ($(document).scrollTop() < offsetTopMenu) {
         $(header).removeClass("header__fixed");
      }
   } else {
      if ($(document).scrollTop() > offsetTopMenu) {
         $(header).addClass("header__fixed");
      }
   }

   if ($(".header__mobile-checkbox:checked").length == 1) {
      $(".header__mobile-checkbox").click();
   }
});
