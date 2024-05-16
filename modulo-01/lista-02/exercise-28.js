const { exercise_28 } = require('./matriz.js');
const matriz = exercise_28;

function sumElementsAboveMatrixDiagonal(matriz) {
    let sum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = i + 1; j < matriz[i].length; j++) {
            sum += matriz[i][j];
        }
    }
    return sum;
}

function sumElementsBelowMatrixDiagonal(matriz) {
    let sum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < i; j++) {
            sum += matriz[i][j];
        }
    }
    return sum;
}

function main(){
    console.log(sumElementsAboveMatrixDiagonal(matriz));
    console.log(sumElementsBelowMatrixDiagonal(matriz));
}

main();