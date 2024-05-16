const { exercise_33 } = require('./utils/matriz.js');
const matriz = exercise_33;

function averageSecondaryDiagonal(matriz){
    let sum = 0;
    let average = 0;

    for (let i = 0; i < matriz.length; i++) {
        sum += matriz[i][matriz.length - i - 1];
    }

    average = sum / matriz.length;
    return average;
}

function multiplyMainDiagonal(matriz, multiplier){
    const main_diagonal_multiplied = []
    for(let i = 0; i < matriz.length; i++){
         main_diagonal_multiplied.push(matriz[i][i] * multiplier);    
    }
    
    return main_diagonal_multiplied;
}

function main(){
    const average = averageSecondaryDiagonal(matriz);
    console.log("Diagonal principal: " + multiplyMainDiagonal(matriz, average));
}

main();