var buttonEl = document.getElementById("start-quiz");
console.log(buttonEl);
var quizTitle = document.getElementById('quizTitle')
var quizBox = document.getElementById('quiz-box')
var questions = 0 

var teams = [
    {
        question:'What team does Steph Curry play for?',
        answerOne: 'Warriors',
        answerTwo: 'Heat',
        answerThree: 'Suns',
        answerFour: 'Mavs',
        correctAnswer: 'Warriors'
    },
    {
        question:'What team does Chris Paul play for?',
        answerOne: 'Warriors',
        answerTwo: 'Heat',
        answerThree: 'Suns',
        answerFour: 'Mavs',
        correctAnswer: 'Suns'
    },
    
    
]

function displayQuestions() {
    document.getElementById('question').textContent = teams[questions].question
    document.getElementById('answer-one').textContent = teams[questions].answerOne
    document.getElementById('answer-two').textContent = teams[questions].answerTwo
    document.getElementById('answer-three').textContent = teams[questions].answerThree
    document.getElementById('answer-four').textContent = teams[questions].answerFour
}

function startQuiz(e) {
    e.preventDefault()
quizTitle.style.display = 'none'
 quizBox.style.display = 'block'
 // start a timer
 // run the questions
 displayQuestions()
}
function evaluateAnswer(){
    console.log(this)
}

buttonEl.addEventListener('click', startQuiz)
document.getElementById('answer-one').addEventListener("click", evaluateAnswer)