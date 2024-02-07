document.addEventListener("DOMContentLoaded", function () {
  const navMenu = document.querySelector(".header__nav");
  function showMenu() {
    navMenu.style.right = "0";
  }
  function hideMenu() {
    navMenu.style.right = "-800px";
  }
  console.log(navMenu);


  const nav = document.querySelectorAll(".header__nav ul li");
  for (let i = 0; i < nav.length; i++) {
    if (
      nav[i].innerHTML.includes("Home") &&
      location.pathname.includes("index")
    ) {
      nav[i].classList.add("selected");
    } else if (
      nav[i].innerHTML.includes("services") &&
      location.pathname.includes("services")
    ) {
      nav[i].classList.add("selected");
    } else if (
      nav[i].innerHTML.includes("Articles") &&
      location.pathname.includes("article")
    ) {
      nav[i].classList.add("selected");
    } else if (
      nav[i].innerHTML.includes("About") &&
      location.pathname.includes("about")
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
});
