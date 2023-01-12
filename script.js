// //////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".main-navbar-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};
