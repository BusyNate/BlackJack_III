//Variables

var dealerSum = 0;
var yourSum = 0;
var dealerAceCount = 0;
var yourAceCount = 0;
var hidden;
var canHit = true; //allows you to hit as long as yourSum < 21
var deck;


//---------------------Events----------------------------------------//


window.onload = ()=>{
    buildDeck();
    shuffleDeck(deck);
    startGame();
}





//======================Functions--------------------------------//


function buildDeck(){
    let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suites = ["C", "D", "H", "S"]
    deck = [];

    //populate deck

    for (let i = 0; i < suites.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push(ranks[j] + "-" + suites[i]);
            
        }
    }

    console.log(deck);

}


//shuffle deck
function shuffleDeck(){
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }

    console.log(deck);

    /*(52) ['C-K', 'H-4', 'S-9', 'S-3', 'D-5', 'H-8', 'D-A', 'H-A', 'D-K', 'C-9', 'D-9', 'D-6', 'S-10', 'H-J', 'H-2', 'D-8', 'C-8', 'S-Q', 'S-6', 'C-4', 'D-2', 'H-9', 'S-5', 'C-A', 'D-3', 'S-8', 'H-3', 'C-J', 'H-K', 'C-7', 'S-4', 'D-4', 'S-J', 'D-Q', 'S-A', 'S-K', 'D-10', 'C-5', 'H-7', 'H-Q', 'H-10', 'S-7', 'S-2', 'H-5', 'D-7', 'C-3', 'C-2', 'H-6', 'C-6', 'C-10', 'D-J', 'C-Q']*/

}


function startGame(){

    hidden = deck.pop(); // remove hidden card from the deck
    dealerSum += getCardValue(hidden);   // get the card value  from the deck
    dealerAceCount += checkAce(hidden); // get the ace count from the deck 
   // console.log(hidden+  " and " + dealerSum);
    while(dealerSum<12){
        let cardimage = document.createElement("img"); // <img></img>
        let card = deck.pop();
        cardimage.src = "Card images/" + card + ".png"; // ==Remove the card from the deck== //
        dealerAceCount += checkAce(card);
         dealerSum += getCardValue(card);

        document.getElementById("dealer-cards").appendChild(cardimage);
        //console.log(dealerSum);



    }
    for(let i= 0; i<1; i++){
        let cardimage = document.createElement("img");
        let card = deck.pop();
        cardimage.src = "Card images/" + card + ".png";
        yourAceCount += checkAce(card);
        yourSum += getCardValue(card);
        document.getElementById("your-cards").appendChild(cardimage);
    }
    console.log(yourSum);

}

function getCardValue(card){
    let CardValue = card.split("-"); // "C-4" => [C,4]
    let rank = CardValue[0];


    //below is for dealing with royal cards (King, Jock, Queen and Ace)
    if (rank === "A") {
        return 11;


    } else if (rank === "J" || rank === "Q" || rank === "K") {
        return 10;
    } 
    else {

        return parseInt(rank);
    }

}


function checkAce(card)

{
    if (card[0] === "A") {
        return 1;
    } else {
        return 0;
    }
}