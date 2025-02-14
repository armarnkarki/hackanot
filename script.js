const body = document.body;
const key = document.querySelectorAll(".letter");
const guessBox = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const deleteButton = document.getElementById("delete");

const randomFoods = ["Pizza", "Sushi", "Pasta", "Tacos", "Burgers", "Ramen", "Salad",
    "Steak", "Pancakes", "Burritos", "Croissants", "Curry", "Paella", "Falafel", 
    "Cheesecake", "Samosas"];

let currentGuess = [];

const answer = randomFoods[Math.floor(Math.random() * randomFoods.length)];

maxLengthGuess = false;

createAnswerPlaceHolder();
function createAnswerPlaceHolder() {
    let placeHolder = "";
    for (let i = 0; i < answer.length; i++) {
        placeHolder+=" _ ";
    }

    guessBox.innerHTML = placeHolder;
}

function updateScreen() {
    let guess = "";

    //add users input
    for (let i = 0; i < currentGuess.length; i++) {
        guess+=currentGuess[i];
    }

    //add remaining underscores if any
    for (let i = 0; i < answer.length - currentGuess.length; i++) {
        guess+=" _ "
    }

    guessBox.innerHTML = guess;

    if (guess.length == answer.length) {
        maxLengthGuess = true;
    } else {
        maxLengthGuess = false;
    }
}

function updateGuess(letter) {
    if (!maxLengthGuess) {
        currentGuess.push(letter);
        updateScreen();
    } 
}

//Add click event buttons for each key
key[0].addEventListener("click", () => {
    updateGuess("A");
});

key[1].addEventListener("click", () => {
    updateGuess("B");
});

key[2].addEventListener("click", () => {
    updateGuess("C");
});

key[3].addEventListener("click", () => {
    updateGuess("D");
});

key[4].addEventListener("click", () => {
    updateGuess("E");
});

key[5].addEventListener("click", () => {
    updateGuess("F");
});

key[6].addEventListener("click", () => {
    updateGuess("G");
});

key[7].addEventListener("click", () => {
    updateGuess("H");
});

key[8].addEventListener("click", () => {
    updateGuess("I");
});

key[9].addEventListener("click", () => {
    updateGuess("J");
});

key[10].addEventListener("click", () => {
    updateGuess("K");
});

key[11].addEventListener("click", () => {
    updateGuess("L");
});

key[12].addEventListener("click", () => {
    updateGuess("M");
});

key[13].addEventListener("click", () => {
    updateGuess("N");
});

key[14].addEventListener("click", () => {
    updateGuess("O");
});

key[15].addEventListener("click", () => {
    updateGuess("P");
});

key[16].addEventListener("click", () => {
    updateGuess("Q");
});

key[17].addEventListener("click", () => {
    updateGuess("R");
});

key[18].addEventListener("click", () => {
    updateGuess("S");
});

key[19].addEventListener("click", () => {
    updateGuess("T");
});

key[20].addEventListener("click", () => {
    updateGuess("U");
});

key[21].addEventListener("click", () => {
    updateGuess("V");
});

key[22].addEventListener("click", () => {
    updateGuess("W");
});

key[23].addEventListener("click", () => {
    updateGuess("X");
});

key[24].addEventListener("click", () => {
    updateGuess("Y");
});

key[25].addEventListener("click", () => {
    updateGuess("Z");
});

submitButton.addEventListener("click", () => {
    
});

deleteButton.addEventListener("click", () => {
    currentGuess.pop();
    updateScreen();
});
