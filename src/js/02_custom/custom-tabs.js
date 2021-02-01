$(document).ready(function () {
   
   let lastTab = $(".js-tabs-caption .item.active")[0];
   let lastTabContent = $(`.js-tabs-content > .items > .item.active`);

   $(".js-tabs-caption > .item").on("click", function () {
      //debugger;
      if (this !== lastTab) {
     
         let index = $(this).data("index");
         let newTabContent = $(`.js-tabs-content > .items > :nth-child(${index})`);

         $(newTabContent).addClass("active");
         $(this).addClass("active");
         $(lastTab).removeClass("active");
         $(lastTabContent).removeClass("active");

         lastTab = this;
         lastTabContent = newTabContent;
      }
   });
});
