const mobileMenu = document.getElementById("mobile-menu-container");
const burgerIcon = document.getElementById("burger-menu");
const closeMobileMenu = document.getElementById("close-button-mobile");

const showOrHideElement = (element) => {
	element.classList.toggle("is-hidden");
};

burgerIcon.addEventListener("click", (event) => {
	showOrHideElement(mobileMenu);
});

closeMobileMenu.addEventListener("click", (event) => {
	event.preventDefault();
	showOrHideElement(mobileMenu);
});

document.addEventListener("DOMContentLoaded", () => {
	//Features tab logic

	const tabContainer = document.querySelector(".features");
	const tabButtons = document.querySelectorAll(
		".features__tab-nav .features__tab-btn"
	);
	const tabPanels = document.querySelectorAll(
		".features__panel-container .features__panel"
	);

	tabButtons[0].classList.add("is-active");
	tabPanels[0].classList.add("is-active");
	tabPanels[0].hidden = false;

	tabContainer.addEventListener("click", (event) => {
		const button = event.target.closest(".features__tab-btn");
		if (!button) return;
		activateTab(button);
	});

	const activateTab = (selectedButton) => {
		const panelId = selectedButton.getAttribute("aria-controls");
		const selectedPanel = document.getElementById(panelId);

		tabPanels.forEach((panel) => {
			panel.classList.remove("is-active");
			panel.hidden = true;
		});

		tabButtons.forEach((btn) => {
			btn.classList.remove("is-active");
		});

		selectedButton.classList.add("is-active");
		selectedButton.setAttribute("aria-selected", "true");
		selectedPanel.hidden = false;
		selectedPanel.classList.add("is-active");

		tabButtons.forEach((btn) =>
			btn.setAttribute(
				"aria-selected",
				btn === selectedButton ? "true" : "false"
			)
		);
	};

	// Accordion logic
	const questionsContainer = document.getElementById("questions-container");
	const questionButtons = document.querySelectorAll(".faq__question-btn");

	questionsContainer.addEventListener("click", (event) => {
		const question = event.target.closest(".faq__question-btn");
		if (!question) return;
		toggleAccordion(question);
	});

	const toggleAccordion = (selectedButton) => {
		const answerId = selectedButton.getAttribute("aria-controls");
		const selectedAnswer = document.getElementById(answerId);
		const isExpanded = selectedButton.getAttribute("aria-expanded") === "true";

		// Close all answers
		questionButtons.forEach((btn) => {
			const answer = document.getElementById(btn.getAttribute("aria-controls"));
			btn.setAttribute("aria-expanded", "false");
			answer.hidden = true;
		});

		// Open the selected answer if it was closed
		if (!isExpanded) {
			selectedButton.setAttribute("aria-expanded", "true");
			selectedAnswer.hidden = false;
		}
	};
});
