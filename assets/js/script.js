/* Variabel */
const askQuestion = document.getElementById("ask-question");
const answerOne = document.getElementById("answer_one"); 
const answerTwo = document.getElementById("answer_two"); 
const answerThree = document.getElementById("answer_three"); 
const picture = document.getElementById("picture-question");
const answerButton = document.getElementsByClassName("answer-button");
const restart = document.getElementById("restart-button");


/* Make a random question array from the questions */
let randomQuestions = [];
randomQuestions = [...questions];
shuffle(randomQuestions);

/* Question to ask */
let askedQuestion = {};

/* Eventlistener for askquestion and restart button */
askQuestion.addEventListener('click', startGame);
restart.addEventListener('click', newGame);
/* Eventlisteners for all answerbuttons*/

for(let i = 0; i < answerButton.length; i++) {
    
    answerButton[i].addEventListener('click', checkAnswer);

}


function startGame() {
    answerOne.classList.remove("hide");
    answerTwo.classList.remove("hide");
    answerThree.classList.remove("hide");
    askedQuestion = randomQuestions[0];
    showQuestion(askedQuestion);
    askQuestion.classList.add("hide");
}
/** Function to display the question to the user */
function showQuestion() {
    picture.setAttribute("src","assets/images/"+ askedQuestion.picture);
    answerOne.innerText = askedQuestion.firstAnswer;
    answerTwo.innerText = askedQuestion.secondAnswer;
    answerThree.innerText = askedQuestion.thirdAnswer;
};

/** A function to shuffle the questions
 * I borrowed this code from: https://itecnote.com/tecnote/javascript-how-to-randomize-shuffle-a-javascript-array/
 */
function shuffle(randomQuestions) {
    let currentIndex = randomQuestions.length,  randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [randomQuestions[currentIndex], randomQuestions[randomIndex]] = [
        randomQuestions[randomIndex], randomQuestions[currentIndex]];
    }

  return randomQuestions;
}

/** Function to check if you answerd correct */
function checkAnswer() {
    if (this.innerHTML === askedQuestion.correct) {
        correct();
    } else {
        incorrect ();
    }
}

function correct() {
    let presentScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++presentScore;
    nextQuestion();
}

function incorrect() {
    let presentScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++presentScore;
    nextQuestion();
}

/** Function that display the new question and remove the old one from the array */
function nextQuestion() {
    if (randomQuestions.length === 1) {
        theEnd();
    } else {
        randomQuestions.shift();
        askedQuestion = randomQuestions[0];
        showQuestion(askedQuestion);
    }
}
function theEnd() {
    picture.classList.add("hide");
    answerOne.classList.add("hide");
    answerTwo.classList.add("hide");
    answerThree.classList.add("hide");
    restart.classList.remove("hide");
    
    
}
function newGame() {
    randomQuestions = [...questions];
    shuffle(randomQuestions);
    picture.classList.remove("hide");
    answerOne.classList.remove("hide");
    answerTwo.classList.remove("hide");
    answerThree.classList.remove("hide");
    restart.classList.add("hide");
    document.getElementById("correct").innerText ="0";
    document.getElementById("incorrect").innerText ="0";
}