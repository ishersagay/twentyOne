let suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let number_Player = document.getElementById(`number_Player`);
let number_Computer = document.getElementById(`number_Computer`);
let number_PlayerTwo = document.getElementById(`numberTwo`);
let game_Over = document.getElementById(`gameOverScreen`);
var start__Game = document.getElementById(`clickGame`);
let deck = [];
let player__One = [];
let bust__One = false;
let tally__One = 0;
let player__Two = [];
let tally__Two = 0;
let bust__Two = [];
let ai = [];
let ai__tally = 0;
let gameEnd = false
const getRandom = () => {
    const min = Math.ceil(1);
    const max = Math.floor(52)
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const createDeck = () => {
    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = {
                value: values[x],
                suit: suits[i]
            };
            deck.push(card);
        }
    }
    return deck;
}
const playAgain = () => {
    player__One = [];
    deck = [];
    bust__One = false;
    tally__One = 0;
    ai = [];
    ai__tally = 0;
    tally__Two = 0;
    player__Two = [];
    gameEnd = false;
    number_Computer.innerHTML = 0;
    number_Player.innerHTML = 0;
    number_PlayerTwo.innerHTML = 0;

    document.getElementById(`choice`).style.display = "none";
    document.getElementById(`startGame`).style.display = "none";
    document.getElementById(`computer_Screen`).style.display = "none";
    document.getElementById(`readyP1`).style.display = "none";
    document.getElementById(`playerScreenTwo`).style.display = "none";
    document.getElementById(`gameOverScreen`).style.display = "none";
    document.getElementById(`clickGame`).style.display = "inline-block";
}
const hasAi = () => {
    document.getElementById(`choice`).style.display = "none";
    document.getElementById('startGame').style.display = "block";
    document.getElementById(`computer_Screen`).style.display = "block";
    document.getElementById(`readyP1`).style.display = "block";
}
const hasPvp = () => {
    document.getElementById(`choice`).style.display = "none";
    document.getElementById(`readyP1`).style.display = "block";
    document.getElementById(`startGame`).style.display = "block";
    document.getElementById(`playerScreenTwo`).style.display = "block";
}
const twist = (card) =>  {
    let tempVal = deck[getRandom()];
    if ((tempVal.value ==="J") || (tempVal.value === "Q") || (tempVal.value === "K")) {
        return {
            number: 10,
            suit_hand: card.push(tempVal.suit)
        };
    } else if (tempVal.value === "A"){
        return {
            number: 10,
            suit_hand: card.push(tempVal.suit)
        }
    }else{
         return {
             number: parseInt(tempVal.value),
             suit_hand: card.push(tempVal.suit)
         }
    }
}
const stick = () => {gameEnd = true;}
const computer = () => {
    ai__tally += twist(ai).number;
    if (ai__tally > 21) {
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "AI has went bust"
    }
    number_Computer.innerHTML = ai__tally;
    console.log(ai);
}
const playerOne = () => {
    tally__One += twist(player__One).number;
    if (tally__One > 21) {
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "Player One has went bust";
    }
    number_Player.innerHTML = tally__One;
    console.log(player__One)
}
const playerTwo = () => {
    tally__Two += twist(player__Two).number;
    if (tally__Two > 21) {
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "Player Two has went bust"
    }
    number_PlayerTwo.innerHTML = tally__Two;
    console.log(player__Two)
}
const startGame = () => {
    start__Game.style.display = "none";
    document.getElementById(`choice`).style.display = "block";
    createDeck();
}

