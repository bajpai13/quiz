const quizData = [
  {
    question: "What is the function of a cache memory in a computer system?",
    a: "To manage network traffic",
    b: " To display graphical user interfaces",
    c: "To perform complex mathematical calculations",
    d: "To store frequently accessed data for faster retrieval",
    correct: "d",
  },
  {
    question: "What does the acronym VPN stand for in networking?",
    a: "Virtual Private Network",
    b: "Virtual Public Network",
    c: "Virtualized Personal Network",
    d: "Very Personal Network",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1997",
    d: "2003",
    correct: "b",
  },
  {
    question: "What is the function of a router in a computer network?",
    a: "Converts digital signals into analog signals",
    b: "Determines the shortest path for data packets to travel",
    c: "Connects multiple devices within a local network",
    d: "Stores and retrieves data on demand",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a type of cyberattack?",
    a: "SSL",
    b: "Spoofing",
    c: "Phishing",
    d: "Denial-of-Service",
    correct: "a",
  },
];

let index = 0;
let correct = 0,
  incorrect = 0,
  total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");      //Variable Declaration 

const loadQuestion = () => {        
  if (total === index) {
    return quizEnd();
    // window.location.href = "page3.html";
  }
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  allInputs[0].nextElementSibling.innerText = data.a;
  allInputs[1].nextElementSibling.innerText = data.b;
  allInputs[2].nextElementSibling.innerText = data.c;
  allInputs[3].nextElementSibling.innerText = data.d;
};                                                                     // Question Loading Function 

document.querySelector("#submit").addEventListener("click", function () {
  const data = quizData[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    correct++;
  } else {
    incorrect++;
  }
  index++;
  loadQuestion();
  
});


const getAnswer = () => {
  let ans;
  allInputs.forEach((inputEl) => {
    if (inputEl.checked) {
      ans = inputEl.value;
    }
  });
  return ans;
};

const reset = () => {                          //Deselect all answers upon clicking next 
  allInputs.forEach((inputEl) => {
    inputEl.checked = false;
  });
};


const quizEnd = () => {
  var timerDisplay = document.getElementById("timer");
  timerDisplay.style.display = "none";
  document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> The Quiz is Completed, you've scored ${correct} / ${total} Answers</h3>
            <h3 class="w-100"> Your Time Taken is ${Math.floor((-(timer-300))/60)} minutes ${(-(timer-300))%60} seconds</h3>
        </div>
    `;
};
loadQuestion(index);


// Timer
var timer = 300; 
var timerDisplay = document.getElementById("timer");

function countdown() {
  var minutes = Math.floor(timer / 60);
  var seconds = timer % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.textContent = minutes + ":" + seconds;

  if (timer === 0) {
    clearInterval(interval);
    submitForm(); 
     return quizEnd();
  }
  timer--;
}

var interval = setInterval(countdown, 1000);

document.getElementById("submitBtn").addEventListener("click", function () {
  clearInterval(interval);
  submitForm();
});

function submitForm() {
  clearInterval(interval);
  var remainingTime = timer;

  if (remainingTime < 0) {
    remainingTime = 0;
  }
}










