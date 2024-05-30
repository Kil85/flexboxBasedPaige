const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const navBtns = document.querySelectorAll(".nav__item");
const allSections = document.querySelectorAll(".section");
const year = document.querySelector(".footer__year");
const navBtnBars = document.querySelector(".burger-btn__bars");

const handleNav = () => {
	nav.classList.toggle("nav--active");
	let isBlack = false;

	if (navBtnBars.classList.contains("blackBars")) {
		isBlack = true;
		navBtnBars.classList.remove("blackBars");
	}
	navBtns.forEach((i) => {
		i.addEventListener("click", () => {
			nav.classList.remove("nav--active");
			if (isBlack) {
				navBtnBars.classList.add("blackBars");
			}
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delay = 0;

	navBtns.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delay + "s";
		delay++;
	});
};

const handleYear = () => {
	const currentYear = new Date().getFullYear();

	year.innerText = currentYear;
};

handleYear();

const handeObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop < currentSection + 60
		) {
			navBtnBars.classList.add("blackBars");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop < currentSection + 60
		) {
			navBtnBars.classList.remove("blackBars");
		}
	});
};

navBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handeObserver);
