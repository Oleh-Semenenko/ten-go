(() => {
const refs = {
openMenuBtn: document.querySelector("[data-about-open]"),
closeMenuBtn: document.querySelector(
"[data-about-close]"
),
menu: document.querySelector("[data-about]"),
};

refs.openMenuBtn.addEventListener("click", toggleMenu);
refs.closeMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
refs.menu.classList.toggle("is-hidden");
}
})();