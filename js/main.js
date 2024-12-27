// Header
document.addEventListener("scroll", function () {
  const header = document.querySelector(".js-header");
  const scrollTop = window.scrollY;
  if (scrollTop < 100) {
    header.classList.remove("header--scrolled");
  } else {
    header.classList.add("header--scrolled");
  }
});
