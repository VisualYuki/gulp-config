$(document).ready(function () {
   //кастомный выпадающий список
   let selectedOption = $(".custom-select__selected-option");
   let lastSelectedOption;
   //let selectedOption;
   //let optionItemsWrap = $(".custom-select__option-items");
   let optionItemsWrap;
   //let optionItems = $(optionItemsWrap).children(".custom-select__option-item");
   let optionItems;

   $(selectedOption).on("click", function (e) {
      //selectedOption = $()
      e.stopPropagation();
      $(this).toggleClass("active");
      optionItemsWrap = $(this).siblings('.custom-select__option-items');
      $(optionItemsWrap).toggle();
      optionItems = $(optionItemsWrap).children(".custom-select__option-item");
      lastSelectedOption = $(optionItemsWrap).siblings(".custom-select__selected-option");
      $(optionItems).each(function (index, optionItem) {
         $(optionItem).on("click", function () {
            let optionItemText = $(this).text();
            $(lastSelectedOption).find(".custom-select__selected-option-text").text(optionItemText);
         });
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
