const mobileMenu = document.getElementById("mobile-menu-container");
const burgerIcon = document.getElementById("burger-menu");
const closeMobileMenu = document.getElementById("close-button-mobile");

const showOrHideElement = (element) => {
	element.classList.toggle("hidden");
};

burgerIcon.addEventListener("click", (event) => {
	console.log("Burger icon clicked");
	showOrHideElement(mobileMenu);
});

closeMobileMenu.addEventListener("click", (event) => {
	event.preventDefault();
	showOrHideElement(mobileMenu);
});

