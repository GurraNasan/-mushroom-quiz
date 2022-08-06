/* Variabel for buttons */
const askQuestion = document.getElementById("next-button");
const answerOne = document.getElementById("answer_one"); 
const answerTwo = document.getElementById("answer_two"); 
const answerThree = document.getElementById("answer_three"); 

/* Make a random question array from the questions */
let randomQuestions = [];
randomQuestions = [...questions];
shuffle(randomQuestions);

/* Eventlisteners */
askQuestion.addEventListener('click', question);



/**
 * Change the image to new mushroom
 * and put in new answers to choose between
 */
function startGame() {
    
    
}

function question() {
    
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