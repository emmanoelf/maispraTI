const matriz = require('./utils/matriz.js');

function sumColumns(matriz){
    matriz = matriz.data;
    let sumColuns = [];
    for(let j = 0; j < matriz[0].length; j++){
        let sum = 0;
        for(const element of matriz){
            sum += element[j];
        }
        sumColuns.push(sum);
    }
    return sumColuns;
}

console.log(sumColumns(matriz));