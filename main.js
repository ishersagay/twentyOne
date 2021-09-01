let suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let number_Player = document.getElementById(`number_Player`);
let number_Computer = document.getElementById(`number_Computer`);
let game_Over = document.getElementById(`gameOverScreen`);
var start__Game = document.getElementById(`clickGame`);
let deck = [];
let player__One = [];
let bust__One = false;
let tally__One = 0;
let player__Two = [];
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

const twist = () =>  {
    let tempVal = deck[getRandom()];
    player__One.push(tempVal.suit);
    if ((tempVal.value ==="J") || (tempVal.value === "Q") || (tempVal.value === "K")) {
        return 10;
    } else if (tempVal.value === "A"){
        return 11;
    }else{
         return parseInt(tempVal.value);
    }
}
const computer = () => {
    ai__tally += twist()
    if (ai__tally > 21) {
        game_Over.style.display = "block";
    }
    number_Computer.innerHTML = tally__One
    console.log("ai");
}
const stick = () => {
    gameEnd = true;
}
const playerOne = () => {
    tally__One += twist();
    computer()
    if (tally__One > 21) {
        bust__One = true;
        game_Over.style.display = "block";
    }
    number_Player.innerHTML = tally__One;
    console.log(player__One)
}
const startGame = () => {
    start__Game.style.display = "none";
    document.getElementById('startGame').style.display = "block";
    createDeck();
}
