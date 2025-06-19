const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.getElementById("nav-links");

openMenu.addEventListener("click", () => {
  navLinks.classList.add("show");
  openMenu.classList.add("hidden");
  closeMenu.classList.add("visible");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("show");
  openMenu.classList.remove("hidden");
  closeMenu.classList.remove("visible");
});
