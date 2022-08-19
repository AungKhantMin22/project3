let nav_link = document.querySelector(".nav_link");
let bars = document.querySelector("#bars");
bars.addEventListener("click", function () {
  //alert("hello world");
  nav_link.classList.toggle("show");
  bars.classList.toggle("fa-times");
});
