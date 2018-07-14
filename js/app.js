/*
 * Create a list that holds all of your cards
 */
const suits = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor","fa fa-bolt", "fa fa-cube", "fa fa-anchor",
"fa fa-leaf", "fa fa-bicycle", "fa fa-diamond","fa fa-camera-retro", "fa fa-leaf", "fa fa-camera-retro", "fa fa-bolt", "fa fa-bicycle", 
"fa fa-paper-plane-o", "fa fa-cube"];	

/* Create the individual cards */
const cardContainer = document.querySelector(".deck");

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


function start() { 
shuffle(suits); 
for(let i = 0; i < suits.length; i++) {
	const card = document.createElement("li");
	card.classList.add("card");
	card.innerHTML = `<i class ="${suits[i]}"> </i>`;
	cardContainer.appendChild(card);

	click(card);
	}
}
/*Create the 'clicking' event */
function click(card) {
card.addEventListener("click", function() {

/* Card flipped */
	if(flippedCards.length === 1) {

		const selectedCard = this;
		const priorCard = flippedCards[0];
	card.classList.add("show", "open", "selected");
	flippedCards.push(this);

	check(selectedCard, priorCard);	
} 	else {
/*No cards flipped*/
	card.classList.add("show","open", "selected");
	flippedCards.push(this);
	} 

});
}
function check (selectedCard, priorCard) {
	if(selectedCard.innerHTML === priorCard.innerHTML) {
		selectedCard.classList.add("match");
		priorCard.classList.add("match");

		matchedCards.push(selectedCard, priorCard);

		flippedCards = [];

/*Status check*/
	isOver();

}	else {
	setTimeout(function(){

		selectedCard.classList.remove("open", "show", "selected");
		priorCard.classList.remove("open", "show", "selected");
	}, 750);
		flippedCards = [];
	}
/*Making a Move*/
  addMove();
	addScore();
}
  startTime();
function isOver() {
	if(matchedCards.length === suits.length) {
    clearInterval(interval);
       let finalTime = timer.innerHTML;
		alert("Your final time is " + finalTime + ".  You're total number of moves is " + numOfMoves + ". " + "You achieved " + numOfStars + " stars!");
    // Shows number of moves made, time, and rating
	}
}
/*Adding Move to the Counter*/
const numOfMovesContainer = document.querySelector(".moves");
let numOfMoves = 0;
function addMove(){
	numOfMoves++;
	numOfMovesContainer.innerHTML = numOfMoves;
}

/* Ratings */
const starsContainer = document.querySelector('.stars');
const star = '<li><i class="fa fa-star"></i></li>';
starsContainer.innerHTML = star + star + star;
function addScore() {

    if(numOfMoves < 12) {
        starsContainer.innerHTML = star + star + star;
        numOfStars = 3;
    } else if(numOfMoves < 25) {
        starsContainer.innerHTML = star + star;
        numOfStars = 2;
    } else {
        starsContainer.innerHTML = star;
        numOfStars = 1;
    }
}
  let second = 0;
  let minute = 0;
  let hour = 0;
  let timer = document.querySelector('.clock');
  timer.innerHTML = '0 mins 0 secs';

// Game timer
function startTime() {
  interval = setInterval(function() {
    timer.innerHTML = minute + ' mins ' + second + ' secs';
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}
/* Restart Game */
const gameRestart = document.querySelector(".restart");
gameRestart.addEventListener("click", function()
{
/*Delete Cards in List */
	cardContainer.innerHTML = "";
/*Call 'Start' */
	start();
	matchedCards = [];
	numOfMoves = 0;
	numOfMovesContainer.innerHTML = numOfMoves;
	starsContainer.innerHTML = star + star + star;
// Resets timer
  let second = 0;
  let minute = 0;
  let hour = 0;
  let timer = document.querySelector('.clock');
  timer.innerHTML = '0 mins 0 secs';
 clearInterval(interval);
/*Start Game */
 /*Reset Variables */
});

start ();
