$(document).ready(function () {
   // Удалить все цифры
   function removeDigits(input) {
      input.value = input.value.replace(/\d/g, "");
   }

   // Оставить все кроме чисел
   function saveOnlyDigits(input) {
      input.value = input.value.replace(/\D/g, "");
   }

   // Маска для телефона
   $('input[name="phone"]').mask("+9 (999) 999-99-99", { autoclear: false });

   // Проверка телефона при снятии фокуса с поля ввода
   $(`input[name='phone']`).on("focusout", function (e) {
      saveOnlyDigits(this);

      if (this.value.length !== 11) {
         $(this).closest(".default-input").addClass("has-error").removeClass("has-success");
      } else {
         $(this).closest(".default-input").removeClass("has-error").addClass("has-success");
      }
   });

   function setInputSuccessClass(items) {
      $(items).addClass("has-success");
      $(items).removeClass("has-error");
   }

   function setInputErrorClass(items) {
      $(items).removeClass("has-success");
      $(items).addClass("has-error");
   }

   // Проверка ввода числа в поле
   $(`input.js-number`).on("input", function (e) {
      saveOnlyDigits(this);
   });

   // Проверка ввода всего кроме чисел
   $(`input.js-string`).on("input", function (e) {
      removeDigits(this);
   });

   // Вывести ошибку, если поле пустое, после потери фокуса, если поле не требует проверки ввода
   $(`.input[name!='email'][name!='phone'][name!='password']`).on("focusout", function () {
      if ($(this).closest(".default-input").hasClass("must-input")) {
         if (this.value.length == 0) {
            setInputErrorClass($(this).closest(".default-input"));
         } else {
            setInputSuccessClass($(this).closest(".default-input"));
         }
      }
   });

   // Проверка корректности введенной почты
   $(`input[name='email']`).on("focusout", function (e) {
      const reg = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");

      if (!reg.test(this.value)) {
         setInputErrorClass($(this).closest(".default-input"));
      } else {
         setInputSuccessClass($(this).closest(".default-input"));
      }
   });

   // Открыть для редактирования поле ввода по клике на "Изменить"
   $(".default-input__change-text").on("click", function () {
      $(this).closest(".default-input").toggleClass("disable");
   });

   $(".default-input.has-checkbox input").on("click", function () {
      $(this).closest(".has-checkbox").toggleClass("has-success");
   });

   // Проверка полей ввода, при нажатии кнопки отправки формы
   $(".default-form__send-btn").on("click", function (e) {
      let isReady = true;
      let defaultForm = $(this).closest(".default-form");

      $(defaultForm)
         .find(".must-input")
         .each(function (index, item) {
            if (!$(item).hasClass("has-success")) {
               isReady = false;
               $(item).addClass("has-error");
            }
         });

      if (!isReady) {
         e.preventDefault();
         $(defaultForm).find(".default-form__send-error-text").addClass("active");
      } else {
         $(defaultForm).find(".default-form__send-error-text").removeClass("active");
      }
   });

   // Заменить введенный пароль на звездочки
   //let isHiddenPassword = false;
   //$(".password .icon").on("click", function () {
   //   if (!isHiddenPassword) $(this).siblings(".input").attr("type", "password");
   //   else $(this).siblings(".input").attr("type", "text");

   //   isHiddenPassword = !isHiddenPassword;
   //   $(this).toggleClass("active");
   //});

   // Проверка введеных паролей на совпадение
   //$(`input.repeat-password[name="password"]`).on("focusout", function (e) {
   //   let passwordInputItems = $(".default-input.password.repeat-password");
   //   if ($(passwordInputItems).length > 1) {
   //      let firstPassword = $(this).val();
   //      let compareSuccess = true;
   //      $(`input.repeat-password[name="password"]`).each(function (index, input) {
   //         if (firstPassword !== $(input).val() || $(input).val().length == 0) {
   //            setInputErrorClass(passwordInputItems);
   //            compareSuccess = false;
   //            return false;
   //         }
   //      });
   //      if (compareSuccess) {
   //         setInputSuccessClass(passwordInputItems);
   //      }
   //   } else {
   //      setInputSuccessClass(passwordInputItems);
   //   }
   //});
});
