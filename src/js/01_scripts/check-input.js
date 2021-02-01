$(document).ready(function () {
   // Заменить введенный пароль на звездочки
   let isHiddenPassword = false;
   $(".password .icon").on("click", function () {
      if (!isHiddenPassword) $(this).siblings(".input").attr("type", "password");
      else $(this).siblings(".input").attr("type", "text");

      isHiddenPassword = !isHiddenPassword;
      $(this).toggleClass("active");
   });

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

   // Проверка ввода числа в поле
   $(`input.js-number`).on("input", function (e) {
      saveOnlyDigits(this);
   });

   // Проверка ввода всего кроме чисел
   $(`input.js-string`).on("input", function (e) {
      removeDigits(this);
   });

   // Удалить все цифры
   function removeDigits(input) {
      input.value = input.value.replace(/\d/g, "");
   }

   // Оставить все кроме чисел
   function saveOnlyDigits(input) {
      input.value = input.value.replace(/\D/g, "");
   }

   // Вывести ошибку, если поле пустое, после потери фокуса, если поле не требует проверки ввода
   $(`.input[name!='email'][name!='phone']`).on("focusout", function () {
      if ($(this).closest(".default-input").hasClass("must-input")) {
         if (this.value.length == 0) {
            $(this).closest(".default-input").addClass("has-error").removeClass("has-success");
         } else {
            $(this).closest(".default-input").removeClass("has-error").addClass("has-success");
         }
      }
   });

   // Проверка корректности введенной почты
   $(`input[name='email']`).on("focusout", function (e) {
      const reg = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");

      if (!reg.test(this.value)) {
         $(this).closest(".default-input").addClass("has-error").removeClass("has-success");
      } else {
         $(this).closest(".default-input").removeClass("has-error").addClass("has-success");
      }
   });

   // Проверка полей ввода, при нажатии кнопки отправки формы
   $(".js-send-btn").on("click", function (e) {
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

      if (!isReady) {
         e.preventDefault();
         $(this).closest("form").find(".error-send-text ").addClass("active");
      } else {
         $(this).closest("form").find(".error-send-text ").removeClass("active");
      }
   });
});
