document.addEventListener("DOMContentLoaded", function () {
const headerContainer = document.getElementById("header");
const footerContainer = document.getElementById("footer");

function loadHeader() {
  fetch("../components/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;
      // Optionally, initialize header scripts after loading (if needed)
      const navMenu = document.querySelector(".header__nav");
      function showMenu() {
        navMenu.style.right = "0";
      }
      function hideMenu() {
        navMenu.style.right = "-800px";
      }

      // Attach click event to .fas fa-bars
    const menuBtnOpen = document.querySelector(".menu__btn--open");
    menuBtnOpen.addEventListener("click", showMenu);

    // Attach click event to .fas fa-times
    const menuBtnClose = document.querySelector(".menu__btn--close");
    menuBtnClose.addEventListener("click", hideMenu);

      const nav = document.querySelectorAll(".header__nav ul li");
      for (let i = 0; i < nav.length; i++) {
        if (
          (nav[i].innerHTML.includes("Home")) &&
          (location.pathname === "/" || location.pathname.includes("index"))
        ) {
          nav[0].classList.add("selected");
        } else if (
          nav[i].innerHTML.includes("Products") &&
          location.pathname.includes("products")
        ) {
          nav[i].classList.add("selected");
        } else if (
          nav[i].innerHTML.includes("Career") &&
          location.pathname.includes("career")
        ) {
          nav[i].classList.add("selected");
        } else if (
          nav[i].innerHTML.includes("Contact") &&
          location.pathname.includes("contact")
        ) {
          nav[i].classList.add("selected");
        } else {
          nav[i].classList.remove("selected");
        }
      }
    })
    .catch((error) => {
      console.error("Error loading header:", error);
      // Handle error gracefully, e.g., display a message
    });
}

function loadFooter() {
  fetch("../components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footerContainer.innerHTML = data;
      // Optionally, initialize footer scripts after loading (if needed)
      let toTopIcon = document.querySelector("a i.fa-arrow-up");
      function toTopFunction() {
        if (
          document.body.scrollTop > 600 ||
          document.documentElement.scrollTop > 600
        ) {
          toTopIcon.style.display = "block";
        } else {
          toTopIcon.style.display = "none";
        }
      }
      window.onscroll = function () {
        toTopFunction();
      };
    })
    .catch((error) => {
      console.error("Error loading footer:", error);
      // Handle error gracefully
    });
}

loadHeader();
loadFooter();
});