const questions = [
  {
    // ONE
    clue: "A genius faceless man goes over eleven lines in Latin (4)",
    answer: "XIAN",
    definition: "A genius",
    indicators: "Faceless, goes over, lines in Latin",
    fodder: "Man, eleven"
  },

  {
    // TWO
    clue: "Fena's love, after hearing out sea and before a first of romances (6)",
    answer: "CLOVER",
    definition: "Fena's",
    indicators: "After, hearing out, before, first.",
    fodder: "Love, sea, romances"
  },

  {
    // THREE
    clue: 'So cool coming from Xian, hearing: "muse", sick! (5)',
    answer: "MUSIC",
    definition: "So cool coming from Xian",
    indicators: "Hearing",
    fodder: "Muse, sick"
  },

  {
    // FOUR
    clue: 'What I adore about you may be large, a chopped off dick creams without the head (3, 6)',
    answer: 'BIG DREAMS',
    definition: 'What I adore about you',
    indicators: 'May be, chopped off, without the head',
    fodder: 'Large, dick, creams'
  },

  {
    // FIVE
    clue: 'Simply texting "k" before a session without positions becomes chaotic and you deserve a lot (6)',
    answer: 'KISSES',
    definition: 'You deserve a lot',
    indicators: 'Simply texting, before, without positions, becomes chaotic',
    fodder: 'K, session'
  },

  {
    // SIX
    clue: "A student from FEU using tagalog, that's correct? (7)",
    answer: 'TAMARAW',
    definition: 'A student from FEU',
    indicators: 'Using tagalog',
    fodder: "That's correct"
  },

  {
    // SEVEN
    clue: 'Red and soft rice: 50% off, in conjunction with a non-governmental organization (5)',
    answer: 'RINGO',
    definition: 'Red and soft',
    indicators: '50% off, in conjunction',
    fodder: 'Rice, non-governmental organization'
  },

  {
    // EIGHT
    clue: 'Eccentric band is purely a junior (3)',
    answer: 'AJR',
    definition: 'Eccentric band',
    indicators: 'Purely',
    fodder: 'A junior'
  },

  {
    // NINE
    clue: 'A snack brand and a color hides, and laid him on the green (10)',
    answer: 'MONDEGREEN',
    definition: 'And laid him on the green',
    indicators: 'Snack brand, color hides',
    fodder: 'And laid him on the green'
  },

  {
    // TEN
    clue: "Xian and I, lurking in Rubber Soul's penultimate track (4)",
    answer: 'FINE',
    definition: 'Xian and I',
    indicators: 'Lurking in',
    fodder: "Rubber Soul's penultimate track"
  },

  {
    // ELEVEN
    clue: "Twist and Shout is a great number! (8)",
    answer: 'THOUSAND',
    definition: 'Is a great number',
    indicators: 'Twist',
    fodder: "And shout"
  },

  {
    // TWELVE
    clue: 'Initially, "Japanese" Japanese literature has liquids removed, very green indeed! (6)',
    answer: 'NATURE',
    definition: 'Very green indeed',
    indicators: 'Initially, Japanese, removed',
    fodder: "Japanese, literature, liquids"
  },
];

let currentQuestion = 0;
const clue = document.getElementById("clue");
const answer = document.querySelector("#answer input");

const result = document.getElementById("result");

const hintsButton = document.getElementById("hints-button");
const hintPopup = document.getElementById("hint-popup");
const closeHints = document.getElementById("close-hints");

function showQuestion() {
  clue.textContent = questions[currentQuestion].clue;

  answer.value = "";
  result.textContent = "";

  document.querySelectorAll(".hint-text").forEach(text => {
      text.classList.remove("show");
      text.textContent = "";
  });

  answer.focus();
}

function checkAnswer() {
  const userAnswer = answer.value.trim().toUpperCase();
  const correctAnswer = questions[currentQuestion].answer.toUpperCase();

  if (userAnswer === correctAnswer) {
      result.textContent = "correct!";
      result.className = "correct";
  } else {
      result.textContent = "wrong!";
      result.className = "wrong";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
      currentQuestion = 0;
  }
  showQuestion();
}

answer.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      checkAnswer();
  }
});

hintsButton.addEventListener("click", function() {
  hintPopup.classList.remove("hidden");
});

closeHints.addEventListener("click", function() {
  hintPopup.classList.add("hidden");
});

const hintButtons = document.querySelectorAll(".hint");

hintButtons.forEach(button => {
  button.addEventListener("click", function() {
    const hintText = this.nextElementSibling;
    let type;

    if (this.classList.contains("definition")) {
        type = "definition";
    }
    else if (this.classList.contains("indicators")) {
        type = "indicators";
    }
    else if (this.classList.contains("fodder")) {
        type = "fodder";
    }

    hintText.textContent = questions[currentQuestion][type];
    hintText.classList.toggle("show");
  });
});

showQuestion();