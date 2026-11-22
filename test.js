

// const squareLength = 5;
// const length = 2;

// // La fonction appelante prend une fonction de rappel
// function applyToSquare(callback) {
//     return callback(squareLength, length);
// }

// // La fonction de rappel doit anticiper l'argument éventuel fourni par la fonction appelante
// function areaOfSquare(number1, number2) {
//     return number1 * number2;
// }

// const resultat = applyToSquare(areaOfSquare);
// console.log(resultat);

//  Closures


// tu sais je suis entrain de bloquer sur la calculatrice que je suis entrain de coder et j'ai besoin de ton aide. 

// Maintenant, je ne veux pas que tu me donne la solution à moins que je ne te le demande expressement. 

// J'ai juste besoins d'indices. Et s'il te plait, tu agira comme un mentor. Je le repète je ne veux pas que tu me donne le code tout fait. Je voudrais juste des indices pour m'eclairer. Parce que je veux tout coder moi même sans qu'on ne me donne la solution.

const nombres = [0, 1, 2];
const operateurs = ["+", "-"];
let cumul = 0;

const tableau = ["1", "+", "2", "×", "3"];
cumul = Number(tableau[0]);

for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] === "+") {
        cumul += Number(tableau[i+1]);
    } else if (tableau[i] === "-") {
        cumul -= Number(tableau[i+1]);
    } else if (tableau[i] === "÷") {
        cumul /= Number(tableau[i+1]);
    } else if (tableau[i] === "×") {
        cumul *= Number(tableau[i+1]);
    }
}
// console.log(cumul);

console.log(10 - 1);

// tableau.reduce((cumul, currentValue) => {
//     if (currentValue === "+") {
        
//     }
// });


// for (let i = 0; i < tableau.length; i++) {
//     tableau[i]
//     if (i % 2 === 0) {
        
//     }
// }

// for (let index = 0; index < nombres.length; i++) {
//     for (let i = 0; i < operateurs.length; i++) {
//         if (operateurs[i] === "+") {
//             cumul = nombres[index] + nombres[index + 1];
//         } else if (operateurs[i] === "-") {
//             cumul = nombres[index] - nombres[index + 1];
//         }
//     }
// }

    // if (character_split[1] === "+") {
    //     additionOperation(Number(character_split[0]), Number(character_split[2]));
    // } else if (character_split[1] === "−") {
    //     subtractionOperation(Number(character_split[0]), Number(character_split[2]));
    // } else if (character_split[1] === "÷") {
    //     divideOperation(Number(character_split[0]), Number(character_split[2]));
    // } else if (character_split[1] === "×") {
    //     multiplicationOperation(Number(character_split[0]), Number(character_split[2]));
    // }
    // character_split.reduce((accumulator, currentValue) => {
//         if (indexOf(currentValue) % 2 === 0) {
//             accumulator.numbers.push(currentValue);
//         } else {
//             accumulator.operators.push(currentValue);
//         }
//         console.log(accumulator);
//         return accumulator;
//     }, 
//     {numbers: [], operators: []}
// );

//----------------
// Addition 
// function additionOperation(a, b) {
//     result_field.textContent = a + b;
// }
// function subtractionOperation(a, b) {
//     result_field.textContent = a - b;
// }
// function divideOperation(a, b) {
//     result_field.textContent = a - b;
// }
// function multiplicationOperation(a, b) {
//     result_field.textContent = a * b;
// }

// // 