const hamburgerIcon = document.querySelector(".hamburger--container");
const navbar = document.querySelector(".navbar");

hamburgerIcon.addEventListener("click", () => {
    navbar.classList.toggle("change")
})