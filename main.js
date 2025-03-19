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

document.addEventListener("DOMContentLoaded", () => {
	const tabContainer = document.querySelector(".tabs-container");
	const tabButtons = document.querySelectorAll(".tab-button");
	const tabPanels = document.querySelectorAll(".tab-panel");

	tabButtons[0].classList.add("active");
	tabPanels[0].classList.add("active");
	tabPanels[0].hidden = false;

	tabContainer.addEventListener("click", (event) => {
		const button = event.target.closest(".tab-button");
		if (!button) return;
		activateTab(button);
	});

	const activateTab = (selectedButton) => {
		const panelId = selectedButton.getAttribute("aria-controls");
		const selectedPanel = document.getElementById(panelId);

		tabPanels.forEach((panel) => {
			panel.classList.remove("active");
			panel.hidden = true;
		});

		tabButtons.forEach((btn) => {
			btn.classList.remove("active");
		});

		selectedButton.classList.add("active");
		selectedButton.setAttribute("aria-selected", "true");
		selectedPanel.hidden = false;
		selectedPanel.classList.add("active");

		tabButtons.forEach((btn) =>
			btn.setAttribute(
				"aria-selected",
				btn === selectedButton ? "true" : "false"
			)
		);
	};
});
