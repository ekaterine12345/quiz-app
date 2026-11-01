import { Question, questions } from "./questions.js";

// DOM element references with non-null assertion or type casting
const questionElement = document.getElementById("question") as HTMLElement;
const answerButtons = document.getElementById("answer-buttons") as HTMLElement;
const nextButton = document.getElementById("next-btn") as HTMLButtonElement;

let questionIndex: number = 0;
let score: number = 0;

function startQuiz(): void {
  questionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function resetState(): void {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion(): void {
  resetState();
  const currentQuestion: Question = questions[questionIndex];
  const questionNo: number = questionIndex + 1;
  questionElement.innerText = `${questionNo}. ${currentQuestion.question}`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = String(answer.correct);
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e: MouseEvent): void {
  const selectBtn = e.target as HTMLButtonElement;
  const isCorrect = selectBtn.dataset.correct === "true";

  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((child) => {
    const button = child as HTMLButtonElement;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore(): void {
  resetState();
  questionElement.innerText = `You scored ${score}/${questions.length}!`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(): void {
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (questionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Initialize quiz
startQuiz();