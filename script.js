const body = document.body;
const key = document.querySelectorAll(".letter");
const guessBox = document.getElementById("guess");
let currentGuess = [];

const answer = "test";

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
}

//Add click event buttons for each key
key[0].addEventListener("click", () => {
    currentGuess.push("A");
    updateScreen();

});

key[1].addEventListener("click", () => {
    currentGuess.push("B");
    updateScreen();
});

key[2].addEventListener("click", () => {
    currentGuess.push("C");
    updateScreen();
});

key[3].addEventListener("click", () => {
    currentGuess.push("D");
    updateScreen();
});

key[4].addEventListener("click", () => {
    currentGuess.push("E");
    updateScreen();
});

key[5].addEventListener("click", () => {
    currentGuess.push("F");
    updateScreen();
});

key[6].addEventListener("click", () => {
    currentGuess.push("G");
    updateScreen();
});

key[7].addEventListener("click", () => {
    currentGuess.push("H");
    updateScreen();
});

key[8].addEventListener("click", () => {
    currentGuess.push("I");
    updateScreen();
});

key[9].addEventListener("click", () => {
    currentGuess.push("J");
    updateScreen();
});

key[10].addEventListener("click", () => {
    currentGuess.push("K");
    updateScreen();
});

key[11].addEventListener("click", () => {
    currentGuess.push("L");
    updateScreen();
});

key[12].addEventListener("click", () => {
    currentGuess.push("M");
    updateScreen();
});

key[13].addEventListener("click", () => {
    currentGuess.push("N");
    updateScreen();
});

key[14].addEventListener("click", () => {
    currentGuess.push("O");
    updateScreen();
});

key[15].addEventListener("click", () => {
    currentGuess.push("P");
    updateScreen();
});

key[16].addEventListener("click", () => {
    currentGuess.push("Q");
    updateScreen();
});

key[17].addEventListener("click", () => {
    currentGuess.push("R");
    updateScreen();
});

key[18].addEventListener("click", () => {
    currentGuess.push("S");
    updateScreen();
});

key[19].addEventListener("click", () => {
    currentGuess.push("T");
    updateScreen();
});

key[20].addEventListener("click", () => {
    currentGuess.push("U");
    updateScreen();
});

key[21].addEventListener("click", () => {
    currentGuess.push("V");
    updateScreen();
});

key[22].addEventListener("click", () => {
    currentGuess.push("W");
    updateScreen();
});

key[23].addEventListener("click", () => {
    currentGuess.push("X");
    updateScreen();
});

key[24].addEventListener("click", () => {
    currentGuess.push("Y");
    updateScreen();
});

key[25].addEventListener("click", () => {
    currentGuess.push("Z");
    updateScreen();
});
