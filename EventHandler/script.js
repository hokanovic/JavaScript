
let inputFieldIsNotEmpty = function () {
    inputField.placeholder = "";
    if (
        ((inputField.value.length == 1) && (inputField.value >= 1) && (inputField.value <= 9))
        || ((inputField.value.length == 2) && (inputField.value == 10))
        ) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

let correct = Math.floor(Math.random() * 10) + 1;
let trials = 0;

let newGame = function () {
    headerHeader.innerText = 
    `Gissa ett tal mellan 1-10
    (3 försök kvar)`;
    btn.innerText = "Gissa";
    inputField.value = "";
    inputField.classList.remove("hidden");
    btn.disabled = true;

    correct = Math.floor(Math.random() * 10) + 1;
    trials = 0;
}

let gameWin = function () {
    inputField.classList.remove("hidden");
    headerHeader.innerText = `Korrekt!
    Du klarade det på ${trials} försök`;
    btn.innerText = "Spela igen";
    inputField.classList.add("hidden");
}

let gameAdvance = function (value) {
    trials++;
    if (value == correct) {
        gameWin();
    }
    else if (trials < 3) {
        headerHeader.innerText = 
        `Gissa ett tal mellan 1-10
        (${(3 - trials)} försök kvar)`;
        inputField.value = "";
        if (value < correct) {
            inputField.placeholder = "För lågt! Försök igen";
        }
        else {
            inputField.placeholder = "För högt! Försök igen";
        }

    }
    else if (trials == 3) {
        headerHeader.innerText = `Tyvärr!
        Rätt svar var: ${correct}`;
        btn.innerText = "Spela igen";
        inputField.value = "";
        inputField.classList.add("hidden");
        btn.disabled = false;
    }
}

let gameBtnClicked = function () {
    if (btn.innerText == "Börja!" || btn.innerText == "Spela igen") {
        newGame();
    }
    else if (btn.innerText == "Gissa") {
        gameAdvance(inputField.value);
    }
}

let gameEnd = function () {
    headerHeader.innerText = "Gissa sej ett tal";
    inputField.classList.add("hidden");
    btn.innerText = "Börja!";
}

let btn = document.getElementById("btnButton");
let headerHeader = document.getElementById("headerHeader");
let inputField = document.getElementById("inputField");

btn.addEventListener("click", gameBtnClicked);
inputField.addEventListener("input", inputFieldIsNotEmpty);