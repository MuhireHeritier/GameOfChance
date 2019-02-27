const MIN = 0;
const MAX = 36;
var testNumber = 15;
var i = 1;

var toDisplay = document.querySelector("#display");

while (MAX) {
    let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;

    if (randomValue == testNumber) {
        break;
    }
    toDisplay.innerHTML = "Round " + i + ": " + randomValue;
    console.log("Round " + i + ": " + randomValue);
    i++;
}

toDisplay.innerHTML = "The script went " + i + " rounds before finding " + testNumber + ".";