// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }

const hamburger = document.getElementById("hamburgerMenu");

const sidebar = document.getElementById("sidebar");

hamburger.onclick = function () {
  sidebar.classList.toggle("active");
};
