let suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let number_Player = document.getElementById(`number_Player`);
let number_Computer = document.getElementById(`number_Computer`);
let number_PlayerTwo = document.getElementById(`numberTwo`);
let game_Over = document.getElementById(`gameOverScreen`);
let handContainer = document.getElementById(`arrayContainer`);

let select__container = document.getElementById(`choice`)
let begin__game = document.getElementById(`startGame`)
let aiVsPlayer = document.getElementById(`readyP1`)
let ai__screen = document.getElementById(`computer_Screen`)
let pVp = document.getElementById(`playerScreenTwo`)

let  lists;
let deck = [];
let player__One_hand = 0;
let ai_hand = 0;
let player__One = [];
let bust__One = false;
let tally__One = 0;
let player__Two = [];
let tally__Two = 0;
let bust__Two = [];
let ai = [];
let ai__tally = 0;
let gameEnd = false

select__container.style.display = "none";
begin__game.style.display = "none";
aiVsPlayer.style.display = "none"
ai__screen.style.display = "none"
pVp.style.display = "none";
game_Over.style.display = "none";

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
    player__One_hand = 0;
    ai_hand = 0;
    gameEnd = false;
    number_Computer.innerHTML = 0;
    number_Player.innerHTML = 0;
    number_PlayerTwo.innerHTML = 0;
    lists = "";
    select__container.style.display = "none"
    begin__game.style.display = "none"
}
const hasAi = () => {
    select__container.style.display = "none";
    begin__game.style.display = "";
    aiVsPlayer.style.display= "";
    ai__screen.style.display= "";
}
const hasPvp = () => {
    select__container.style.display = "none";
    begin__game.style.display = "";
    pVp.style.display = "";
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
            number: 11,
            suit_hand: card.push(tempVal.suit)
        }
    }else{
         return {
             number: parseInt(tempVal.value),
             suit_hand: card.push(tempVal.suit)
         }
    }
}
const list = (card) => {
    lists = document.createElement('li');
    lists.innerText = card;
    handContainer.appendChild(lists)
}
const stick = () => {gameEnd = true;}
const computer = () => {
    ai__tally += twist(ai).number;
    if (ai__tally === 21){
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "AI has won";
    } else if (ai__tally > 21) {
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "AI has went bust"
    }
    number_Computer.innerHTML = ai__tally;
    console.log(ai);
}
const playerOne = () => {
    tally__One += twist(player__One).number;
    if (tally__One === 21){
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "Player One has won";
    } else if (tally__One > 21) {
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "Player One has went bust";
    }
    number_Player.innerHTML = tally__One;
    // list(player__One[player__One_hand])
    player__One_hand += 1;
    console.log(player__One)
}
const playerTwo = () => {
    tally__Two += twist(player__Two).number;
    if (tally__Two === 21){
        game_Over.style.display = "";
        document.getElementById(`player_Who`).innerHTML = "Player Two has won";
    } else if (tally__Two > 21) {
        game_Over.style.display = "block";
        document.getElementById(`player_Who`).innerHTML = "Player Two has went bust"
    }
    number_PlayerTwo.innerHTML = tally__Two;
    console.log(player__Two)
}
const startGame = () => {
    createDeck();
    let clickGame = document.getElementById('clickGame');
    clickGame.style.display = "none";
    select__container.style.display = "";

}

