document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector("nav");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Drag to scroll functionality
  const computerList = document.querySelector(".computer-list");
  let isDown = false;
  let startX;
  let scrollLeft;

  computerList.addEventListener("mousedown", (e) => {
    isDown = true;
    computerList.classList.add("active");
    computerList.classList.add("noselect");
    startX = e.pageX - computerList.offsetLeft;
    scrollLeft = computerList.scrollLeft;
  });

  computerList.addEventListener("mouseleave", () => {
    isDown = false;
    computerList.classList.remove("active");
    computerList.classList.remove("noselect");
  });

  computerList.addEventListener("mouseup", () => {
    isDown = false;
    computerList.classList.remove("active");
    computerList.classList.remove("noselect");
  });

  computerList.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - computerList.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    computerList.scrollLeft = scrollLeft - walk;
  });

  var logo = document.getElementById("logo");
  logo.style.backgroundColor = "transparent";
});
