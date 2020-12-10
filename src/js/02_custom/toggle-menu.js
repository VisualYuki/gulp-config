$(document).ready(function () {
   let lastToggleItem;
   $(".js-toggle-trigger").on("click", function () {
      if (this != lastToggleItem) {
         $(this).addClass("active");
         $(lastToggleItem).removeClass("active");

         lastToggleItem = this;
      }
   });
});
