var element = document.getElementById("menu");

function openMenu() {
  element.classList.add("menu--open");
}

function closeMenu() {
  element.classList.remove("menu--open");
}

const hamburgerMenuElement = document.getElementById("hamburger-menu");
hamburgerMenuElement.addEventListener("click", openMenu, false);

const closeMenuElement = document.getElementById("close-menu");
closeMenuElement.addEventListener("click", closeMenu, false);