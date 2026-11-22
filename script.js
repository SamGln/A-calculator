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
    prepareOperation();
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

// Functions displays symbols
function displayDivide() {
    calculation_field.value += " ÷ ";
}
function displayMultiplication() {
    calculation_field.value += " × ";
}
function displaySubtraction() {
    calculation_field.value += " - "
}
function displayAddition() {
    calculation_field.value += " + "
}
function displayPercentage() {
    calculation_field.value += " % ";
}
function displayComma() {
    calculation_field.value += ".";
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
            cumul /= Number(character_split[i+1]);
        } else if (character_split[i] === "×") {
            cumul *= Number(character_split[i+1]);
        } else if (character_split[i] === "%") {
            cumul /= 100;
        }
    }
    displayResult(cumul);
}

// Display Result
function displayResult(result) {
    result_field.textContent = result;
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