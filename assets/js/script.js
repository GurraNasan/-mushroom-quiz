/* Variabel */
const askQuestion = document.getElementById("ask-question");
const answerOne = document.getElementById("answer_one"); 
const answerTwo = document.getElementById("answer_two"); 
const answerThree = document.getElementById("answer_three"); 
const picture = document.getElementById("picture-question");
const answerButton = document.getElementsByClassName("answer-button")
const showButton = document.getElementById("answer-frame")
let finalScore = 0;

/* Make a random question array from the questions */
let randomQuestions = [];
randomQuestions = [...questions];
shuffle(randomQuestions);

/* Question to ask */
let askedQuestion = {};

/* Eventlistener for askquestion button */
askQuestion.addEventListener('click', startGame);

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
        correct()
        
       
    } else {
        incorrect ()
        
    }
}

function correct() {
    let presentScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++presentScore;
    nextQuestion();
    finalScore = presentScore;
    return(finalScore)
}

function incorrect() {
    let presentScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++presentScore;
    nextQuestion();
}

/** Function that display the new question and remove the old one from the array */
function nextQuestion() {
    if (randomQuestions.length === 0) {
        alert("out of questions")
    } else {
        
        randomQuestions.shift();
        console.log(randomQuestions.length)
        askedQuestion = randomQuestions[0];
        
        showQuestion(askedQuestion);
    }
}