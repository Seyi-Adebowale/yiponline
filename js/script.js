document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header");
  const footerContainer = document.getElementById("footer");

  function loadHeader() {
    fetch("../components/header.html")
      .then((response) => response.text())
      .then((data) => {
        headerContainer.innerHTML = data;
        const navMenu = document.querySelector(".header__nav");
        function showMenu() {
          navMenu.style.right = "0";
        }
        function hideMenu() {
          navMenu.style.right = "-800px";
        }

        const menuBtnOpen = document.querySelector(".menu__btn--open");
        menuBtnOpen.addEventListener("click", showMenu);

        const menuBtnClose = document.querySelector(".menu__btn--close");
        menuBtnClose.addEventListener("click", hideMenu);

        const nav = document.querySelectorAll(".header__nav ul li");
        for (let i = 0; i < nav.length; i++) {
          if (
            nav[i].innerHTML.includes("Home") &&
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
      });
  }

  function loadFooter() {
    fetch("../components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        footerContainer.innerHTML = data;
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
      });
  }

  loadHeader();
  loadFooter();

  const animatedSections = document.querySelectorAll(".section-animated");

  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const sectionObserver = new IntersectionObserver(
    handleIntersection,
    observerOptions
  );

  animatedSections.forEach((section) => {
    sectionObserver.observe(section);
  });
});