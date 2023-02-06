window.addEventListener("scroll", function () {
  let header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

function toggleMenu() {
  let menuToggle = document.querySelector(".toggle");
  let menu = document.querySelector(".menu");

  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
