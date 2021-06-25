$(document).ready(function () {
	// Загрузить остальные фото при полной загрузке окна
	//let imgages = document.querySelectorAll(".lazyload");
	//window.addEventListener("load", function () {
	//	for (let i = 0; i < imgages.length; i++) {
	//		lazySizes.loader.unveil(imgages[i]);
	//	}
	//});

	// плавная прокрутка по якорю
   $('a[href^="#"]').click(function () {
      let anchor = $(this).attr("href");
      $("html, body").animate(
         {
            scrollTop: $(anchor).offset().top - 200,
         },
         600
      );
   });
});
