const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(link => {
		link.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				window.scrollY -
				document.querySelector("header").offsetHeight;
			if (iconMenu.classList.contains("menu--active")) {
				document.body.classList.remove("lock");
				iconMenu.classList.remove("menu--active");
				menuBody.classList.remove("menu--active");
			}
			window.scroll({ top: gotoBlockValue, behavior: "smooth" });
			e.preventDefault();
		}
	}
}

const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("lock");
		iconMenu.classList.toggle("menu--active");
		menuBody.classList.toggle("menu--active");
	});
}
