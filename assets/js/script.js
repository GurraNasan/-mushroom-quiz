/* Variabel */
const askQuestion = document.getElementById("next-button");
const answerOne = document.getElementById("answer_one"); 
const answerTwo = document.getElementById("answer_two"); 
const answerThree = document.getElementById("answer_three"); 
const picture = document.getElementById("picture-question");

/* Make a random question array from the questions */
let randomQuestions = [];
randomQuestions = [...questions];
shuffle(randomQuestions);

/* Question to ask */
let askedQuestion = {};

/* Eventlisteners */
askQuestion.addEventListener('click', startGame);




function startGame() {
    askedQuestion = randomQuestions[0];
    showQuestion(askedQuestion)

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


function checkAnswer() {

}
function correct() {

}

function incorrect() {

}