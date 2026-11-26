// Select the items
const reset = document.querySelector("#reset");
const divide = document.querySelector("#divide");
const multiplication = document.querySelector("#multiplication");
const backspace = document.querySelector("#backspace");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const subtraction = document.querySelector("#subtraction");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const addition = document.querySelector("#addition");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const equal = document.querySelector("#equal");
const percentage = document.querySelector("#percentage");
const zero = document.querySelector("#zero");
const comma = document.querySelector("#comma");

const calculation_field = document.querySelector("#calculation_field");
const result_field = document.querySelector("#result_field");

// Variables
let character_string;
let character_split;

// detect events
reset.addEventListener('click', () => {
    calculation_field.value = 0;
    result_field.textContent = 0;
});
equal.addEventListener('click', () => {
    checksDivisionError();
});

// 
divide.addEventListener('click', () => {
    displayDivide();
});
multiplication.addEventListener('click', () => {
    displayMultiplication();
});
subtraction.addEventListener('click', () => {
    displaySubtraction();
});
addition.addEventListener('click', () => {
    displayAddition();
}); 
percentage.addEventListener('click', () => {
    displayPercentage();
});

// 
comma.addEventListener('click', () => {
    displayComma();
});
zero.addEventListener('click', () => {
    displayZero();
});
one.addEventListener('click', () => {
    displayOne();
});
two.addEventListener('click', () => {
    displayTwo();
});
three.addEventListener('click', () => {
    displayThree();
});
four.addEventListener('click', () => {
    displayFour();
});
five.addEventListener('click', () => {
    displayFive();
});
six.addEventListener('click', () => {
    displaySix();
});
seven.addEventListener('click', () => {
    displaySeven();
});
eight.addEventListener('click', () => {
    displayEight();
});
nine.addEventListener('click', () => {
    displayNine();
});


// Functions display numbers
function displayZero() {
    calculation_field.value += "0";
}
function displayOne() {
    calculation_field.value += "1";
}
function displayTwo() {
    calculation_field.value += "2";
}
function displayThree() {
    calculation_field.value += "3";
}
function displayFour() {
    calculation_field.value += "4";
}
function displayFive() {
    calculation_field.value += "5";
}
function displaySix() {
    calculation_field.value += "6";
}
function displaySeven() {
    calculation_field.value += "7";
}
function displayEight() {
    calculation_field.value += "8";
}
function displayNine() {
    calculation_field.value += "9";
}

// Functions displays operator symbols
function displayDivide() {
    try {
        limitToTwoNumbers();
        checks_consecutive_operators();
        calculation_field.value += " ÷ ";
    } catch (error) {
        console.log(error.message);
    }
}
function displayMultiplication() {
    try {
        limitToTwoNumbers();
        checks_consecutive_operators();
        calculation_field.value += " × ";
    } catch (error) {
        console.log(error.message);
    }
}
function displaySubtraction() {
    try {
        limitToTwoNumbers();
        checks_consecutive_operators();
        calculation_field.value += " - ";
    } catch (error) {
        console.log(error.message);
    }
}
function displayAddition() {
    try {
        limitToTwoNumbers();
        checks_consecutive_operators();
        calculation_field.value += " + ";
    } catch (error) {
        console.log(error.message);
    }
}
function displayPercentage() {
    try {
        checks_consecutive_operators();
        calculation_field.value += " % ";
    } catch (error) {
        console.log(error.message);
    }
}
function displayComma() {
    try {
        check_consecutive_comma();
        calculation_field.value += ".";
    } catch (error) {
        
    }
}

// 
function prepareOperation() {
    character_string = calculation_field.value;
    character_split = character_string.split(" ");
    console.log(character_split);
    let cumul = Number(character_split[0]);
    for (let i = 1; i < character_split.length; i++) {
        if (character_split[i] === "+") {
            cumul += Number(character_split[i+1]);
        } else if (character_split[i] === "-") {
            cumul -= Number(character_split[i+1]);
        } else if (character_split[i] === "÷") {
            if(Number(character_split[i+1]) === 0) throw new Error("Cannot divide by zero");
            cumul /= Number(character_split[i+1]);
        } else if (character_split[i] === "×") {
            cumul *= Number(character_split[i+1]);
        } else if (character_split[i] === "%") {
            cumul /= 100;
        }
    }
    displayResult(cumul);
}

// function prepareOperation() {
//     character_string = calculation_field.value;
//     character_split = character_string.split(" ");
//     let cumul = 0;
//     let multi = [];
//     for (let i = 1; i < character_split.length; i++) {
//         if (character_split[i] === "×") {
//             multi.push(Number(character_split[i-1]) * Number(character_split[i+1]));
//         }
//     } 
//     console.log(multi);
// }

// function multiplication_operation(nombreA, nombreB) {
//     return nombreA * nombreB;
// }


// Display Result
function displayResult(result) {
    result_field.textContent = Number(result.toFixed(2));
}

// BackSpace
backspace.addEventListener('click', () => {
    character_string = calculation_field.value;
    let one_fewer_character;
    let last_string = character_string.slice(-1);
    if (last_string !== " ") {
        one_fewer_character = character_string.slice(0, -1);
    } else {
        one_fewer_character = character_string.slice(0, -2);
    }
    calculation_field.value = one_fewer_character;
});

// Errors Handling
function checksDivisionError() {
    try {
        prepareOperation();
    } catch (error) {
        result_field.textContent = error.message;
    }
}

function checks_consecutive_operators() {
    const check_characters = calculation_field.value;
    console.log(check_characters.endsWith(" ÷ "));
    if (check_characters.endsWith(" + ") || check_characters.endsWith(" - ") || check_characters.endsWith(" ÷ ") || check_characters.endsWith(" × ") || check_characters.endsWith(" % ")) {
        throw new Error("Consecutive operators");
    }
}

function check_consecutive_comma() {
    const check_comma = calculation_field.value;
    if (check_comma.endsWith(".")) {
        throw new Error("Consecutive comma");
    }
}


function limitToTwoNumbers() {
    character_string = calculation_field.value;
    character_split = character_string.split(" ");
    if (character_split.length >= 3) {
        throw new Error("Stop !");
    }
}