let question = document.querySelectorAll(".expertCard__accordion");

question.forEach((question) => {
  question.addEventListener("click", () => {
    const active = document.querySelector(".expertCard__accordion.active");

    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
