const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const navBtns = document.querySelectorAll(".nav__item");

const handleNav = () => {
	nav.classList.toggle("nav--active");

	navBtns.forEach((i) => {
		i.addEventListener("click", () => {
			nav.classList.remove("nav--active");
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
navBtn.addEventListener("click", handleNav);
