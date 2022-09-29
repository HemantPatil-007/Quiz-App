const quizDB = [
  {
    question: "Q1: what is the full form of HTML",
    a: "Hello to my land",
    b: "Hey text markup language",
    c: "Hypertext markup language",
    d: "Hypertext markdown language",
    ans: "ans3",
  },
  {
    question: "Q2: what is the full form of CSS",
    a: "Cascading style sheets",
    b: "Cascading style sheep",
    c: "Cartoon style sheets",
    d: "Cascading super sheets",
    ans: "ans1",
  },
  {
    question: "Q3: what is the full form of HTTP",
    a: "Hypertext test product",
    b: "Hypertext transfer product",
    c: "Hypertext transfer program",
    d: "Hypertext transfer protocol",
    ans: "ans4",
  },
  {
    question: "Q4: what is the full form of JS",
    a: "Java super",
    b: "Javascript",
    c: "Jquery and super",
    d: "Jquery super",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];

  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
            <h2> You scored ${score}/${quizDB.length} </h2>
            <button class="btn" onclick="location.reload()"> Play Again </button>
        `;

    showScore.classList.remove("scoreArea");
  }
});
