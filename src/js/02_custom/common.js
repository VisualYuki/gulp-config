$(document).ready(function () {
   // треугольник поворачивающийся по клику на триггер элемент
   $(".triangle-rotate_js-click").on("click", function (e) {
      e.stopPropagation();
      $(this).toggleClass("triangle-rotate_active");
   });

   // закрытие dropdown-select при клике на все кроме выпадающего списка
   $(".dropdown-select__trigger").on("click", function () {
      if (!$(this).hasClass("dropdown-select__trigger_active")) {
         $(".dropdown-select__trigger_active").removeClass("dropdown-select__trigger_active");
      }

      $(this).toggleClass("dropdown-select__trigger_active");
   });
   $(".dropdown-select").on("click", function (e) {
      e.stopPropagation();
   });

   // при клике на документ удалить все активные блоки, если не сработала пагинация.
   $(document).on("click", function () {
      $(".triangle-rotate_js-click").removeClass("triangle-rotate_active");
      $(".dropdown-select__trigger").removeClass("dropdown-select__trigger_active");
   });
});
