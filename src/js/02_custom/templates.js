$(document).ready(function () {
  
});

$(".test").slick({
   autoplay: true,
   autoplaySpeed: 10000,
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   pauseOnHover: true,
   prevArrow: '<button type="button" class=""></button>',
   nextArrow: '<button type="button" class=""></button>',
   arrows: false,
   fade: true,
   responsive: [
      {
         breakpoint: 1600,
         settings: {
            slidesToShow: 3,
         },
      },
      {
         breakpoint: 800,
         settings: {
            slidesToShow: 2,
         },
      },

      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1,
         },
      },
   ],
});


