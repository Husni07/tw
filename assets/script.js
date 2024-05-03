const menuToggle = document.getElementById("menu-toggle");
const menuCollapse = document.querySelector(".hide");

menuToggle.addEventListener("click", () => {
  menuCollapse.classList.toggle("hidden");
});