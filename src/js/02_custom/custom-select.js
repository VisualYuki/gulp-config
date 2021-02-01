$(document).ready(function () {
   //кастомный выпадающий список
   let selectedOption = document.getElementsByClassName("custom-select__selected-option");
   let lastSelectedOption;
   let optionItemsWrap;
   let optionItems;

   //.addEventListener()
   //debugger;
   selectedOption[0].addEventListener('click', function(e){
      e.stopPropagation();
      $(this).toggleClass("active");
      optionItemsWrap = $(this).siblings(".custom-select__option-items");
      $(optionItemsWrap).toggle();
      optionItems = $(optionItemsWrap).children(".custom-select__option-item");
      lastSelectedOption = $(optionItemsWrap).siblings(".custom-select__selected-option");
      $(optionItems).each(function (index, optionItem) {
         $(optionItem).on("click", function () {
            $(optionItem).closest(".custom-select.must-input").addClass('has-success')
            let optionItemText = $(this).text();
            $(lastSelectedOption).find(".custom-select__selected-option-text").text(optionItemText);
         });
      });
   });
   
   //$(selectedOption).on("click", function (e) {
   //   debugger;
   //   //selectedOption = $()
     
   //});

   $(document).on("click", function () {
      closeOptionItems();
   });

   function closeOptionItems() {
      $(optionItemsWrap).hide();
      $(selectedOption).removeClass("active");
   }
});
