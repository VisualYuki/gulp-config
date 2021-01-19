$(document).ready(function () {
   // Проверка телефона при снятии фокуса с поля ввода
   $(`input[name='phone']`).on("focusout", function (e) {
      saveOnlyDigits(this);

      if (this.value.length !== 11) {
         $(this).closest(".default-input").addClass("has-error").removeClass("has-success");
      } else {
         $(this).closest(".default-input").removeClass("has-error").addClass("has-success");
      }
   });
   $(`input[name='phone']`).on("keyup", function (e) {
      saveOnlyDigits(this);
      this.value = this.value.substr(0, 11);

      //let phonePlaceholder = "+_(___)-___-__-__";
      //let outPhone = phonePlaceholder;

      //let phone = this.value;
      //let firstIndex = 0;
      //for(let i = 0; i < phone.length; i++) {
      //   outPhone[outPhone.indexOf('_')] = phone[i];
      //}

      //this.value = outPhone;
   });

   //Проверка ввода времени
   let addedPlaceholder = false;
   $("input[name='time']").on("keyup", function (e) {
      input.value = input.value.replace(/\D/g, "");
      //saveOnlyDigits(this);
      //debugger;
      //this.value = this.value.substr(0, 5);

      //if(this.value.length >= 2) {

      //   if(!addedPlaceholder) {
      //      this.value += ":";
      //      addedPlaceholder = true;
      //   }
      //   else {
      //      this.value = this.value[0];
      //   }

      //   //if(this.value.indexof(":") === -1) {
      //   //   this.value += ":";
      //   //}
      //   //else {
      //   //   this.value += ":";
      // //  }

      //}
   });
   $(`input[name='time']`).on("focusout", function (e) {
      const reg = new RegExp("^([0-1][0-9]|2[0-4])[: -.]*([0-5]\\d$)", "ig");

      if (!reg.test(this.value)) {
         $(this).closest(".default-input").addClass("has-error").removeClass("has-success");
      } else {
         $(this).closest(".default-input").removeClass("has-error").addClass("has-success");
      }
   });

   // Проверка ввода числа
   $(`input.js-number`).on("input", function (e) {
      saveOnlyDigits(this);
   });

   // Проверка ввода только строки
   $(`input.js-string`).on("input", function (e) {
      removeDigits(this);
   });

   function removeDigits(input) {
      input.value = input.value.replace(/\d/g, "");
   }

   function saveOnlyDigits(input) {
      input.value = input.value.replace(/\D/g, "");
   }

   //$()

   //$(`input[name='email']`).on("focusout", function (e) {
   //   const reg = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");

   //   if (!reg.test(this.value)) {
   //      $(this).addClass("error").removeClass("success");
   //   } else {
   //      $(this).removeClass("error").addClass("success");
   //   }
   //});

   // Вывести ошибку, если поле пустое, после потери фокуса, если поле не требует проверки ввода
   $(`input[name!='email'][name!='phone'][name!='time']`).on("focusout", function () {
      //if (!$(this).hasClass("not-must-input")) {
      if (this.value.length == 0) {
         $(this).closest(".default-input").addClass("has-error").removeClass("has-success");
      } else {
         $(this).closest(".default-input").removeClass("has-error").addClass("has-success");
      }
      //}
   });

   // Проверка полей ввода, при нажатии кнопки отправки формы
   $(".send-btn").on("click", function (e) {
      let isReady = true;
      $(this)
         .closest("form")
         .find(".must-input")
         .each(function (index, item) {
            if (!$(item).hasClass("has-success")) {
               isReady = false;
               $(item).addClass("has-error");
            }
         });

      //if ($(".agree-wrap .checked").length > 0 && !$(".agree-wrap .checked").prop("checked")) isReady = false;

      if (!isReady) {
         e.preventDefault();
         $(".error-send-text ").addClass("active");
      } else {
         $(".error-send-text ").removeClass("active");
      }
   });
});
