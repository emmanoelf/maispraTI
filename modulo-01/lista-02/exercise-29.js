const { exercise_29 } = require('./utils/matriz.js');
const matriz = exercise_29;

function sumRow(matriz, row){
    let sum = 0;
    for(let j = 0; j < matriz.length; j++){
        sum += matriz[row][j];
    }

    return sum;
}

function sumColumn(matriz, column){
    let sum = 0;
    for(const element of matriz){
        sum += element[column];
    }

    return sum;
}

function sumAllMatriz(matriz){
    let sum = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            sum += matriz[i][j];
        }
    }

    return sum;
}

function sumMainDiagonal(matriz){
    let sum = 0;
    for(let i = 0; i < matriz.length; i++){
        sum += matriz[i][i];
    }

    return sum;
}

function main(){
    console.log("Soma da linha 4 da matriz: " + sumRow(matriz, 4));
    console.log("Soma da coluna 2 da matriz: " + sumColumn(matriz, 2));
    console.log("Soma da diagonal principal da matriz: " + sumMainDiagonal(matriz));
    console.log("Soma de todos os elementos da matriz: " + sumAllMatriz(matriz));
}

main();