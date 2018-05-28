/*
 * Create a list that holds all of your cards
 */
const suits = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor","fa fa-bolt", "fa fa-cube", "fa fa-anchor", 
"fa fa-leaf", "fa fa-bicycle", "fa fa-diamond","fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", 
"fa fa-paper-plane-o", "fa fa-cube"];

/* Create the individual cards */
const cardContainer = document.querySelector(".deck");

let flippedCards = [];
let matchedCards = [];

for(let i = 0; i < suits.length; i++) {
	const card = document.createElement("li");
	card.classList.add ("card");
	card.innerHTML = `<i class ="${suits[i]}"> </i>`;
	cardContainer.appendChild(card);

/* Create the 'clicking' event */
card.addEventListener("click", function() {

/* Card flipped */
	if(flippedCards.length === 1) {

		const selectedCard = this;
		const priorCard = flippedCards[0];
	card.classList.add("show", "open");
	flippedCards.push(this);

/* Comparing 2 flipped cards */
	if(selectedCard.innerHTML === priorCard.innerHTML) {
		selectedCard.classList.add("match");
		priorCard.classList.add("match");

		matchedCards.push(selectedCard, priorCard);

		flippedCards = [];

/* Status check */
	isOver();

} 	else {
		selectedCard.classList.remove("open" , "show");
		priorCard.classList.remove("open" , "show");

		flippedCards = [];
}
	
} 	else {
/*No cards flipped */
	card.classList.add("show","open");
	flippedCards.push(this);
	} 

})
}

function isOver() {
	if(matchedCards.length === suits.length) {
		alert("Game Over.  You Win!");
}

}


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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
