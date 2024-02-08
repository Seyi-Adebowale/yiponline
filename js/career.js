const careerBoxes = document.querySelectorAll(".career__box");

careerBoxes.forEach((careerBox) => {
  const showIcon = careerBox.querySelector(".career__box--heading i");
  const careerBoxContent = careerBox.querySelector(".career__box--content");

  careerBoxContent.style.display = "none";

  showIcon.addEventListener('click', () => {

    if (careerBoxContent.style.display === "none"){
      careerBoxContent.style.display = "block";
      careerBox.classList.add("active");
      showIcon.classList.remove("fa-caret-square-down");
      showIcon.classList.add("fa-caret-square-up");
    } else {
      careerBoxContent.style.display = "none";
      careerBox.classList.remove("active");
      showIcon.classList.remove("fa-caret-square-up");
      showIcon.classList.add("fa-caret-square-down");
    }
  });
});
