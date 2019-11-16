var currentQuestion = 0
var time = questions.length * 15
var Timerid;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");


function startQuiz() {
    var startScreen = document.getElementById("start-screen")
    startScreen.setAttribute("class", "hide")

    questionsEl.removeAttribute("class")
    Timerid = setInterval(clockTick, 1000)

    timerEl.textContent = time

    getQuestions()

}

function getQuestions() {
    var currentQuestions = questions[currentQuestion]


    var title = document.getElementById("questions-title")
    title.textContent = currentQuestions.title;
    choicesEl.innerHTML = ""


    currentQuestions.choices.forEach(function (choice, i) {
        var choiceOptions = document.createElement("button")
        choiceOptions.setAttribute("class", "choice")
        choiceOptions.setAttribute("value", choice)
        choiceOptions.textContent = i + 1 + "." + choice

        choiceOptions.onclick = questionClick

        choicesEl.appendChild(choiceOptions)
    })
}

function questionClick() {
    if (this.value !== questions[currentQuestion].answer) {
        time -= 15
        if (time<0) {
            time=0
        }
        
    timerEl.textContent = time 


    }

    currentQuestion++ 


    
}


//fuction save high score 
//function to end quiz



