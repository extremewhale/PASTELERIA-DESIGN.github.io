window.addEventListener("scroll", function () {
  var header = document.getElementById("menu-header")
  header.classList.toggle("abajo", window.scrollY > 0);
});
