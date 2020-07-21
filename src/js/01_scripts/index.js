/* -------- plugin info -------- */
/*
   1. Scroll bar (simplebar)
      source: https://www.npmjs.com/package/simplebar
   2. 

*/
/* -------- plugin info end -------- */

$(document).ready(function () {
   //SLIDER
   $(".intro__items").slick({
      prevArrow: '<button class="slider__prev-btn intro-slider__prev-btn slider__btn"></button>',
      nextArrow: '<button class="slider__next-btn intro-slider__next-btn slider__btn"></button>',
      dots: true,
      dotsClass: "dots",
      infinite: true,
      slidesToShow: 1,
      
   });

   $(".action__items").slick({
      prevArrow: '<button class="slider__prev-btn slider__btn"></button>',
      nextArrow: '<button class="slider__next-btn slider__btn"></button>',
      dots: true,
      dotsClass: "dots slider__dots",
      infinite: true,
      slidesToShow: 1,
   });

   //CORRECT WIDTH AND HEIGHT TRANGLES
   function correctTrangle(){
      $(".trangle-content").each(function(item){
         let h = $(this).outerHeight();
         $(this).find(".right-trangle").css({
            "border-bottom": "transparent solid " + h + "px",
         })

         let w = $(this).outerWidth();
         $(this).find(".bottom-trangle").css({
            "border-left": "transparent solid " + (w - 7) + "px",
         })
      })
   };

   correctTrangle();

   $(window).resize(function () {
      correctTrangle();
   });

   //OFFER
   
   $(".offer__item").each(function(){
      let parent = $(this).find(".offer__item-categories");
      let num = parent.children().length;

      if(num > 5){
         $(parent).addClass("has__hidden-items");
      }
   })

   let hidden_items = true;
   $(".offer__item-show-all").on("mousedown", function(){
      if(hidden_items) 
         $(this).html("Скрыть элементы")
      else
         $(this).html("Показать еще")
      hidden_items = !hidden_items;

      $(this).parent().toggleClass("show-items")
      $(this).toggleClass("rotate-trangle")
   })

   //MODAL WINDOWS
   $(".header-content__info-btn").on("click", function () {
      $(".offer-window__name-input").blur();
   });
});
