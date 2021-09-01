$(document).ready(function () {
	// Удалить все цифры
	function removeDigits(input) {
		input.value = input.value.replace(/\d/g, "");
	}

	// Оставить все кроме чисел
	function saveOnlyDigits(input) {
		input.value = input.value.replace(/\D/g, "");
	}

	// Установить класс успеха
	function setInputSuccessClass(items) {
		$(items).closest(".b-input").addClass("b-input_has-success");
		$(items).closest(".b-input").removeClass("b-input_has-error");
	}

	// Установить класс ошибки
	function setInputErrorClass(items) {
		$(items).closest(".b-input").removeClass("b-input_has-success");
		$(items).closest(".b-input").addClass("b-input_has-error");
	}

	// Удалить все классы
	function removeInputClasses(items) {
		$(items).closest(".b-input").removeClass("b-input_has-success");
		$(items).closest(".b-input").removeClass("b-input_has-error");
	}

	// Проверка ввода числа в поле
	$(`.js-number`).on("input", function (e) {
		saveOnlyDigits(this);
	});

	// Проверка ввода всего кроме чисел
	$(`.js-string`).on("input", function (e) {
		removeDigits(this);
	});

	// Заменить введенный пароль на звездочки
	$(".b-input_password .b-input__icon").on("click", function () {
		if ($(this).siblings(".b-input__input").attr("type") === "password") {
			$(this).siblings(".b-input__input").attr("type", "text");
		} else {
			$(this).siblings(".b-input__input").attr("type", "password");
		}
		$(this).toggleClass("active");
	});

	// Отобразить некорректный ввод паролей на совпадение
	$(`.b-input__input.repeat-password`).on("focusout", function (e) {
		let currentPasswordInput = $(this);
		let secondPasswordInput = $(".b-input__input.repeat-password").not(this);

		if ($(secondPasswordInput).val().length !== 0 && $(currentPasswordInput).val().length !== 0) {
			if (
				$(secondPasswordInput).val() !== $(currentPasswordInput).val() ||
				$(secondPasswordInput).val().length < 6 ||
				$(currentPasswordInput).val().length < 6
			) {
				setInputErrorClass($(".b-input.repeat-password"));
			}
		}
	});
	// Отобразить корректный ввод паролей на совпадение
	$(`.b-input__input.repeat-password`).on("keyup", function (e) {
		let currentPasswordInput = $(this);
		let secondPasswordInput = $(".b-input__input.repeat-password").not(this);

		if ($(secondPasswordInput).val().length !== 0 && $(currentPasswordInput).val().length !== 0) {
			if (
				$(secondPasswordInput).val() !== $(currentPasswordInput).val() ||
				$(secondPasswordInput).val().length < 6 ||
				$(currentPasswordInput).val().length < 6
			) {
				removeInputClasses($(".b-input.repeat-password"));
			} else {
				setInputSuccessClass($(".b-input.repeat-password"));
			}
		}
	});

	// Запретить вставлять пароль
	$(`.b-input__input.repeat-password`).on("paste", function (e) {
		e.preventDefault();
	});

	// Маска для телефона
	$(".b-input__input.b-input__input_phone").mask("+9 (999) 999-99-99", {autoclear: false});
	// Отобразить ошибочный ввод телефона
	$(`.b-input__input.b-input__input_phone`).on("focusout", function (e) {
		saveOnlyDigits(this);

		if (this.value.length !== 11) {
			setInputErrorClass(this);
		}
	});
	// Отобразить корректный ввод телефона
	$(`.b-input__input.b-input__input_phone`).on("keyup", function (e) {
		let inputValue = this.value.replace(/\D/g, "");

		if (inputValue.length === 11) {
			setInputSuccessClass(this);
		} else {
			removeInputClasses(this);
		}
	});

	// Отобразить некорректный ввод времени встречи
	$(".b-input__input.b-input__input_time").mask("99:99", {autoclear: false});
	$(`.b-input__input.b-input__input_time`).on("focusout", function (e) {
		const reg = new RegExp("^([0-1][0-9]|2[0-4])[:]*([0-5]\\d$)", "ig");

		if (!reg.test(this.value)) {
			setInputErrorClass(this);
		}
	});
	// Отобразить корректный ввод времени встречи
	$(`.b-input__input.b-input__input_time`).on("keyup", function (e) {
		const reg = new RegExp("^([0-1][0-9]|2[0-4])[:]*([0-5]\\d$)", "ig");

		if (reg.test(this.value)) {
			setInputSuccessClass(this);
		} else {
			removeInputClasses(this);
		}
	});

	// Отобразить некорректный ввод пустого поля
	$(
		`.b-input__input:not(.b-input__input_time):not(.b-input__input_email):not(.b-input__input_phone):not(.repeat-password)`
	).on("focusout", function () {
		if ($(this).closest(".b-input").hasClass("must-input") && !new RegExp("\\S", "i").test(this.value)) {
			setInputErrorClass(this);
		}
	});
	// Отобразить корректный ввод пустого поля
	$(
		`.b-input__input:not(.b-input__input_time):not(.b-input__input_email):not(.b-input__input_phone):not(.repeat-password)`
	).on("keyup", function () {
		if ($(this).closest(".b-input").hasClass("must-input")) {
			if (new RegExp("\\S", "i").test(this.value)) {
				setInputSuccessClass(this);
			} else {
				removeInputClasses(this);
			}
		}
	});

	// Отобразить некорректный ввод введенной почты
	$(`.b-input__input.b-input__input_email`).on("focusout", function (e) {
		const reg = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");

		if (!reg.test(this.value)) {
			setInputErrorClass(this);
		}
	});
	// Отобразить корректный ввод введенной почты
	$(`.b-input__input.b-input__input_email`).on("keyup", function (e) {
		const reg = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");

		if (reg.test(this.value)) {
			setInputSuccessClass(this);
		} else {
			removeInputClasses(this);
		}
	});

	//debugger;
	//$.mask.definitions['~']='[{3,20}]';
	//$.mask.definitions['&']='[{3,20}]';
	//$(".b-input__input.b-input__input_email").mask("~@&", { autoclear: false });

	// Проверка полей ввода, при нажатии кнопки отправки формы
	$(".default-form__send-btn").on("click", function (e) {
		let isReady = true;
		let defaultForm = $(this).closest(".default-form");

		$(defaultForm)
			.find(".must-input")
			.each(function (index, item) {
				if (!$(item).hasClass("b-input_has-success")) {
					isReady = false;
					$(item).addClass("b-input_has-error");
				}
			});

		if (!isReady) {
			e.preventDefault();
			$(defaultForm).find(".default-form__send-error-text").addClass("active");
		} else {
			$(defaultForm).find(".default-form__send-error-text").removeClass("active");
		}
	});
});
