const hamburgerBtn = document.getElementById("hamburgerBtn");

const nav = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", function() {
  nav.classList.toggle("nav-open");
});