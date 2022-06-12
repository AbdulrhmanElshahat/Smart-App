const questions = document.querySelectorAll(".questions-section li"); 
const answerContainer = document.querySelector(".answer");
const answers = [
  "نعم يمكن التحويل إلى مجموعة أخري ولكن بشروط  ",
  "ان يوجداماكن فارغة في المجموعةالتي تريدهاويتم هذا من خلال مكتب الارشاد",
  "يرمز حرف(م) في الجدول الي مدرج",
  "يرمزان الحرفان(مع) في الجدول الي معمل",
];

answerContainer.textContent = answers[0]; //set first answer default

questions.forEach((question, index) => {
  question.onclick = (_) => {
      //remove all active calss from questions
    for (let i = 0; i < questions.length; i++) {
      questions[i].querySelector(".row").classList.remove("active");
    }
    //add active calss on clicked question
    question.querySelector(".row").classList.add("active");
    //set answer of selected question
    answerContainer.textContent = answers[index];
    //scroll to answer when click
    if (window.innerWidth < 912) {
      window.scrollTo(0, answerContainer.offsetTop);
     
    }
  };
});

