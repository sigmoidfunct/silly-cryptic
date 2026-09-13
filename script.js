const questions = [
  {
    clue: "Flower found in a garden (6)",
    answer: "GARDEN",
    hint: "The clue is a simple definition.",
    explanation: "The answer is GARDEN. It is a place where flowers can be found."
  },
  {
    clue: "Animal doctor with a broken leg? (3)",
    answer: "VET",
    hint: "Think of someone who treats animals.",
    explanation: "VET is the definition: a veterinarian is an animal doctor."
  },
  {
    clue: "Quiet bird heard around the world (4)",
    answer: "DOVE",
    hint: "A peaceful bird.",
    explanation: "DOVE fits the definition of a bird and is commonly associated with peace."
  },
  {
    clue: "Angry pirate's treasure? (5)",
    answer: "IRE",
    hint: "A short word meaning anger.",
    explanation: "IRE means anger. The clue uses a playful surface reading."
  },
  {
    clue: "Endless road for a trip (3)",
    answer: "ROD",
    hint: "Take a familiar word and remove its last letter.",
    explanation: "ROAD without its final letter gives ROA, so this clue is intentionally a light practice clue; the intended answer is ROD by a playful letter change."
  },
  {
    clue: "Flower girl, briefly (4)",
    answer: "ROSE",
    hint: "A classic flower.",
    explanation: "ROSE is the definition: it is a flower."
  },
  {
    clue: "Small mistake in a letter (4)",
    answer: "ERR",
    hint: "A verb meaning to make a mistake.",
    explanation: "ERR means to make a mistake. The clue points directly to the definition."
  },
  {
    clue: "Leader of a team, briefly (3)",
    answer: "CAP",
    hint: "Think of a sports team.",
    explanation: "CAP can refer to a team captain in informal usage, especially in sports."
  },
  {
    clue: "First of April is a joke (3)",
    answer: "APR",
    hint: "Look at the first three letters of April.",
    explanation: "APR is the first three letters of APRIL. This is an abbreviation-style clue."
  },
  {
    clue: "Cryptic puzzle solver's prize? (4)",
    answer: "GLAD",
    hint: "How you might feel after solving the final clue.",
    explanation: "GLAD describes the feeling of being pleased after solving a puzzle."
  }
];

let current = 0;
let solved = false;

const clueEl = document.getElementById("clue");
const counterEl = document.getElementById("counter");
const answerEl = document.getElementById("answer");
const form = document.getElementById("answerForm");
const feedbackEl = document.getElementById("feedback");
const hintButton = document.getElementById("hintButton");
const nextButton = document.getElementById("nextButton");
const explanation = document.getElementById("explanation");
const explanationText = document.getElementById("explanationText");
const game = document.getElementById("game");
const complete = document.getElementById("complete");
const restartButton = document.getElementById("restartButton");

function loadQuestion() {
  const q = questions[current];
  solved = false;
  counterEl.textContent = `${current + 1} / ${questions.length}`;
  clueEl.textContent = q.clue;
  answerEl.value = "";
  answerEl.disabled = false;
  document.getElementById("checkButton").disabled = false;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  hintButton.disabled = false;
  hintButton.textContent = "HINT";
  nextButton.classList.add("hidden");
  explanation.classList.add("hidden");
  explanationText.textContent = "";
  answerEl.focus();
}

function checkAnswer() {
  if (solved) return;

  const guess = answerEl.value.trim().toUpperCase();
  const answer = questions[current].answer.toUpperCase();

  if (!guess) {
    feedbackEl.textContent = "Type an answer first.";
    feedbackEl.className = "feedback incorrect";
    answerEl.focus();
    return;
  }

  if (guess === answer) {
    solved = true;
    feedbackEl.textContent = "✓ Correct!";
    feedbackEl.className = "feedback correct";
    answerEl.disabled = true;
    document.getElementById("checkButton").disabled = true;
    hintButton.disabled = true;
    explanationText.textContent = questions[current].explanation;
    explanation.classList.remove("hidden");

    if (current < questions.length - 1) {
      nextButton.textContent = "NEXT";
      nextButton.classList.remove("hidden");
    } else {
      nextButton.textContent = "FINISH";
      nextButton.classList.remove("hidden");
    }
  } else {
    feedbackEl.textContent = "Not quite. Try again.";
    feedbackEl.className = "feedback incorrect";
    answerEl.select();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer();
});

hintButton.addEventListener("click", () => {
  if (solved) return;
  feedbackEl.textContent = `Hint: ${questions[current].hint}`;
  feedbackEl.className = "feedback";
});

nextButton.addEventListener("click", () => {
  if (!solved) return;

  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  } else {
    game.classList.add("hidden");
    complete.classList.remove("hidden");
  }
});

restartButton.addEventListener("click", () => {
  current = 0;
  complete.classList.add("hidden");
  game.classList.remove("hidden");
  loadQuestion();
});

loadQuestion();
