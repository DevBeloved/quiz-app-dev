 
 // when the user clicks the "Start Quiz" button
 //quiz starts
const questions = [
  {
    id: "question 1",
    question: "1. What is the Capital City of Nigeria ?",
    options: ["Abuja", "Lagos", "Port harcourt","Kano"],
    answer: "A. Abuja"
  },
  {
    id: "question 2",
    question: "Lagos is the largest City in West Africa?",
    options: ["False", "True", " I dont know","Maybe"],
    answer: "True"

  },
  {
    id: "question 3",
    question: "3. What is the Capital City of South Africa ?",
    options: ["Joint Admission and Matriculation Board", "Joint Admission and Matriculation Body", "Joint Admission and Matriculation Bureau","Joint Achievement Management board"],
    answer: "Joint Admission and Matriculation Board"
  }
  ,
  {
    id: "question 4",
    question: "4. When was World Leprosy Day celebrated ?",
    options: ["January 30", "January 31", "January 29","January 28"],
    answer: "January 30"
  },
  {
    id: "question 5",
    question: "How Many Local Government do we have in Nigeria ?",
    options: ["774", "800", "900","1000"],
    answer: "774"
  }
  ,
  {
    id: "question 6",
    question: "6. What is the full meaning of WAEC ?",
    options: ["West African Examination Council", "West African Examination Committee", "West African Examination Commission","West African Examination Bureau"],
    answer: "West African Examination Council"
    
  },
  {
    id: "question 7",
    question: " Which Country won the last World Cup ?",
    options: ["Brazil", "Argentina", "Germany","France"],
    answer: "Argentina"
  }
];

//function to start the quiz
// **Note:** The `questions` array is now an array of objects with `id`, `question`, `options`, and `answer` properties.
let currentQuestionIndex = 0;
let score = 0;
const questionTextElement = document.getElementById("question-text");
const optionsContainerElement = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const resultsElement = document.getElementById("results");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTextElement.textContent = currentQuestion.question;
    optionsContainerElement.innerHTML = "";
// Clear previous options

currentQuestion.options.forEach(option => {
  const optionButton = document.createElement("div");
  optionButton.classList.add("option");
  optionButton.textContent = option;
  optionButton.addEventListener("click", () => checkAnswer(option));
  optionsContainerElement.appendChild(optionButton);
    });

// **No need to explicitly hide other questions here in this simple structure.**
// The `displayQuestion` function is called only for the current question.
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }
    disableOptions();
}

function disableOptions() {
    const options = optionsContainerElement.querySelectorAll(".option");
    options.forEach(option => {
        option.style.pointerEvents = "none";
        
    });
}

function enableOptions() {
    const options = optionsContainerElement.querySelectorAll(".option");
    options.forEach(option => {
        option.style.pointerEvents = "auto";
        option.style.backgroundColor = "#f9f9f9";
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        enableOptions();
        nextButton.textContent = "Next Question";
    } else {
        showResults();
    }
}

function showResults() {
    questionTextElement.style.display = "none";
    optionsContainerElement.style.display = "none";
    nextButton.style.display = "none";
    resultsElement.textContent = `You scored ${score} out of ${questions.length}!`;
    resultsElement.style.display = "block";
}

nextButton.addEventListener("click", nextQuestion);

// Initial display
displayQuestion();

