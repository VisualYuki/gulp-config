// Выбор числа от с помощью кнопок лево и право.
$(".custon-counter__right-arrow").on("click", function () {
   let value = $(this).parent(".custon-counter").find("input").val();
   $(this)
      .parent(".custon-counter")
      .find("input")
      .val(++value);
});

$(".custon-counter__left-arrow").on("click", function () {
   let value = $(this).parent(".custon-counter").find("input").val();
   if (value > 1)
      $(this)
         .parent(".custon-counter")
         .find("input")
         .val(--value);
});

$(".custon-counter__input").on("keyup", function (event) {
   let which = event.which;

   if (which < 48 || which > 57) {
      this.value = this.value.replace(/\D/g, "");
   } else {
      this.value = +this.value;
   }
});

$(".custon-counter__input").on("focusout", function (e) {
   if (e.target.value == "") e.target.value = "0";
});
