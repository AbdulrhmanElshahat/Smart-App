const questions = document.querySelectorAll(".questions-section li");
const answerContainer = document.querySelector(".answer");
const answers = [
  "عادي مينفعش ليه",
  " مينفعش ليه",
  "عادي مينفعش ",
  "عادي ليه",
];

answerContainer.textContent = answers[0];
questions.forEach((question, index) => {
  question.onclick = (_) => {
    for (let i = 0; i < questions.length; i++) {
      questions[i].querySelector(".row").classList.remove("active");
    }

    question.querySelector(".row").classList.add("active");
    answerContainer.textContent = answers[index];
    if (window.innerWidth < 912) {
      window.scrollTo(0, answerContainer.offsetTop);
      console.log("cono");
    }
  };
});