//let mmenuScript = document.createElement("script");

//let mmenuPromise = new Promise(function (resolve, reject) {
//	setTimeout(function () {
//		mmenuScript.setAttribute(
//			"src",
//			"/dist/include-libs/mmenu-light.js"
//		);
//		document.body.appendChild(mmenuScript);

//		mmenuScript.onload = function () {
//			resolve();
//		};
//	}, 1500);
//});

//mmenuPromise.then(function (result) {
//	const menu = new MmenuLight(document.querySelector("#headerer__m-menu"));

//	const navigator = menu.navigation();
//	const drawer = menu.offcanvas();

//	document
//		.querySelector(".headerer__menu-btn")
//		.addEventListener("click", function (evnt) {
//			evnt.preventDefault();
//			drawer.open();
//		});
//});
