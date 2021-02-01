$(document).ready(function () {
   //кастомный выпадающий список
   let selectedOption = $(".custom-select__selected-option");
   let lastSelectedOption;
   let optionItemsWrap;
   let optionItems;

   //.addEventListener()
   //debugger;
   //selectedOption.addEventListener('click', function(e){

   //});

   $(selectedOption).on("click", function (e) {
      //debugger;
      //selectedOption = $()

      if (lastSelectedOption === undefined) {
         lastSelectedOption = this;
      } else if (lastSelectedOption[0] !== this) {
         $(lastSelectedOption).removeClass("active");
         $(optionItemsWrap).slideUp();
      }

      e.stopPropagation();
      $(this).toggleClass("active");
      optionItemsWrap = $(this).siblings(".custom-select__option-items");
      $(optionItemsWrap).toggle();
      optionItems = $(optionItemsWrap).children(".custom-select__option-item");
      lastSelectedOption = $(optionItemsWrap).siblings(".custom-select__selected-option");
      $(optionItems).each(function (index, optionItem) {
         $(optionItem).on("click", function () {
            $(optionItem).closest(".custom-select.must-input").addClass("has-success");
            let optionItemText = $(this).text();
            $(lastSelectedOption).find(".custom-select__selected-option-text").text(optionItemText);
         });
      });

      // пришлось решить баг таким костылем .... 
      $(".statistics-page__select-items > li").removeClass("z-index-up");
      $(this).closest('.statistics-page__select-item').addClass("z-index-up");
   });

   $(document).on("click", function () {
      closeOptionItems();
   });

   function closeOptionItems() {
      $(optionItemsWrap).hide();
      $(selectedOption).removeClass("active");
   }
});
