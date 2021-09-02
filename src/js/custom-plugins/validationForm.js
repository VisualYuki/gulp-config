export function setInputValidation(rootEl = "body") {
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
	$(`${rootEl} .js-number`).on("input", function (e) {
		saveOnlyDigits(this);
	});

	// Проверка ввода всего кроме чисел
	$(`${rootEl} .js-string`).on("input", function (e) {
		removeDigits(this);
	});

	// Заменить введенный пароль на звездочки
	$(`${rootEl} .b-input_password .b-input__icon`).on("click", function () {
		if ($(this).siblings(".b-input__input").attr("type") === "password") {
			$(this).siblings(".b-input__input").attr("type", "text");
		} else {
			$(this).siblings(".b-input__input").attr("type", "password");
		}
		$(this).toggleClass("active");
	});

	// Отобразить некорректный ввод паролей на совпадение
	$(`${rootEl} .b-input__input.js-repeat-password`).on("focusout", function (e) {
		let jsValidationForm = $(this).closest(".js-validation-form");
		let inputParentWrap = $(this).closest(".b-input");
		let currentPasswordVal = $(this).val();
		let secondPasswordVal = $(jsValidationForm).find(".b-input__input.js-repeat-password").not(this).val();

		if (
			secondPasswordVal.length !== 0 &&
			currentPasswordVal.length !== 0 &&
			!$(inputParentWrap).hasClass("b-input_has-success")
		) {
			setInputErrorClass($(jsValidationForm).find(".b-input__input.js-repeat-password"));
		}
	});
	// Отобразить корректный ввод паролей на совпадение
	$(`${rootEl} .b-input__input.js-repeat-password`).on("keyup", function (e) {
		let jsValidationForm = $(this).closest(".js-validation-form");
		let currentPasswordVal = $(this).val();
		let secondPasswordVal = $(this)
			.closest(".js-validation-form")
			.find(".b-input__input.js-repeat-password ")
			.not(this)
			.val();

		if (secondPasswordVal.length !== 0 && currentPasswordVal.length !== 0) {
			if (
				secondPasswordVal !== currentPasswordVal ||
				secondPasswordVal.length < 6 ||
				currentPasswordVal.length < 6
			) {
				removeInputClasses($(jsValidationForm).find(".b-input__input.js-repeat-password"));
			} else {
				setInputSuccessClass($(jsValidationForm).find(".b-input__input.js-repeat-password"));
			}
		}
	});

	// Запретить вставлять пароль
	$(`${rootEl} .b-input__input.js-repeat-password`).on("paste", function (e) {
		e.preventDefault();
	});

	// Маска для телефона
	$(`${rootEl} .b-input__input[type='tel']`).mask("+9 (999) 999-99-99", {autoclear: false});
	// Отобразить ошибочный ввод телефона
	$(`${rootEl} .b-input__input[type='tel']`).on("focusout", function (e) {
		saveOnlyDigits(this);

		if (this.value.length !== 11) {
			setInputErrorClass(this);
		}
	});
	// Отобразить корректный ввод телефона
	$(`${rootEl} .b-input__input[type='tel']`).on("keyup", function (e) {
		let inputValue = this.value.replace(/\D/g, "");

		if (inputValue.length === 11) {
			setInputSuccessClass(this);
		} else {
			removeInputClasses(this);
		}
	});

	//// Отобразить некорректный ввод времени встречи
	//$(".b-input__input.b-input__input_time").mask("99:99", {autoclear: false});
	//$(`.b-input__input.b-input__input_time`).on("focusout", function (e) {
	//	const reg = new RegExp("^([0-1][0-9]|2[0-4])[:]*([0-5]\\d$)", "ig");

	//	if (!reg.test(this.value)) {
	//		setInputErrorClass(this);
	//	}
	//});
	//// Отобразить корректный ввод времени встречи
	//$(`.b-input__input.b-input__input_time`).on("keyup", function (e) {
	//	const reg = new RegExp("^([0-1][0-9]|2[0-4])[:]*([0-5]\\d$)", "ig");

	//	if (reg.test(this.value)) {
	//		setInputSuccessClass(this);
	//	} else {
	//		removeInputClasses(this);
	//	}
	//});

	//Отобразить некорректный ввод пустого обязательного поля
	$(
		`${rootEl} .b-input__input:not(.b-input__input_time):not([type='email']):not([type='tel']):not(.js-repeat-password)`
	).on("focusout", function () {
		if (
			$(this).closest(".b-input").hasClass("js-validation-form__required-input") &&
			!new RegExp("\\S", "i").test(this.value)
		) {
			setInputErrorClass(this);
		}
	});
	// Отобразить корректный ввод пустого обязательного поля
	$(
		`${rootEl} .b-input__input:not(.b-input__input_time):not([type='email']):not([type='tel']):not(.js-repeat-password)`
	).on("keyup", function () {
		if ($(this).closest(".b-input").hasClass("js-validation-form__required-input")) {
			if (new RegExp("\\S", "i").test(this.value)) {
				setInputSuccessClass(this);
			} else {
				removeInputClasses(this);
			}
		}
	});

	// Отобразить некорректный ввод введенной почты
	$(`${rootEl} .b-input__input[type='email']`).on("focusout", function (e) {
		const reg = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");

		if (!reg.test(this.value)) {
			setInputErrorClass(this);
		}
	});
	// Отобразить корректный ввод введенной почты
	$(`${rootEl} .b-input__input[type='email']`).on("keyup", function (e) {
		const reg = new RegExp("^[\\w-\\.]+@[\\w-]+\\.[a-z]{2,4}$", "i");

		if (reg.test(this.value)) {
			setInputSuccessClass(this);
		} else {
			removeInputClasses(this);
		}
	});

	// Проверка полей ввода, при нажатии кнопки отправки формы
	$(`${rootEl} .js-validation-form`).on("submit", function (e) {
		let isReady = true;
		let defaultForm = $(this).closest(".js-validation-form")[0];

		$(defaultForm)
			.find(".js-validation-form__required-input")
			.each(function (index, item) {
				if (!$(item).hasClass("b-input_has-success")) {
					isReady = false;
					$(item).addClass("b-input_has-error");
				}
			});

		if (!isReady) {
			e.preventDefault();
			$(defaultForm).find(".js-validation-form__send-error-text").addClass("active");
		} else {
			$(defaultForm).find(".js-validation-form__send-error-text").removeClass("active");
		}

		// ниже проверяется валидация для bootstrap input
		if (!defaultForm.checkValidity()) {
			e.preventDefault();
			e.stopPropagation();
		}
		$(defaultForm).addClass("was-validated");
	});
}

$(document).ready(function () {
	setInputValidation();
});
