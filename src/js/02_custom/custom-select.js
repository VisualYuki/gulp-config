$(document).ready(function () {
   let selectedOption = $(".custom-select__selected-option");
   let optionItemsWrap = $(".custom-select__option-items");
   let optionItems = $(optionItemsWrap).children(".custom-select__option-item");

   $(selectedOption).on("click", function (e) {
      e.stopPropagation();
      $(this).toggleClass("active");
      $(optionItemsWrap).toggle();
   });

   $(optionItems).each(function (index, optionItem) {
      $(optionItem).on("click", function () {
         let optionItemText = $(this).text();
         $(selectedOption).find(".custom-select__selected-option-text").text(optionItemText);
      });
   });

   $(document).on("click", function () {
      closeOptionItems();
   });

   function closeOptionItems() {
      $(optionItemsWrap).hide();
      $(selectedOption).removeClass("active");
   }
});
