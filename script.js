let number;
do {
    number = prompt("Please enter a number:");
    } while (isNaN(number) || number === "");

number = parseInt(number);
let output = `Number inputted: ${number}<br><br>`;

if (number % 2 !== 0) {
    for (let i = number; i >= 1; i--) {
        for (let j = 1; j <= number; j++) {
        output += i + " ";
        }
        output += "<br>";
    }
} else {
    for (let i = number; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
        output += i + " ";
        }
        output += "<br>";
    }
    }

document.getElementById("output").innerHTML = output;        