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

const buttonShow = document.querySelector(".tarif__show");
const tarifShowImg = document.querySelector(".tarif__show-img");
const blockShow = document.querySelector(".tarif__block-cost");

function showBlock() {
  blockShow.classList.toggle("hiddenBlock");
  tarifShowImg.classList.toggle("rotateTarif__show");
}

buttonShow.addEventListener("click", showBlock);

function showBlock() {
  blockShow.classList.toggle("hiddenBlock");
  tarifShowImg.classList.toggle("rotateTarif__show");
}

buttonShow.addEventListener("click", showBlock);
