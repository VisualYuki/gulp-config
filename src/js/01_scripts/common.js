$(document).ready(function () {
   // проскролить в начало страницы
   //$(".scroll-to-top").click(function () {
   //   $("html, body").animate({ scrollTop: "0px" });
   //   return false;
   //});

   // распечатать нужную часть страницы
   $(document).ready(function () {
      //$("").on("click", function () {
      //   let body = $("body").html();
      //   let printEl = $(".print");
      //   $("body").html(printEl);
      //   window.print();
      //   $("body").html(body);
      //});
   });

   // при выборе рейтинга, отметить нужную звезду, чтобы сохранить рейтинг.
   $(".custom-raiting__item").on("click", function () {
      $(this).siblings(".custom-raiting__item.checked").removeClass("checked");
      $(this).addClass("checked");
   });
});
