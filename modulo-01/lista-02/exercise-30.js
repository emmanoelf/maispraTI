const { exercise_30 } = require('./utils/matriz.js');
const matriz = exercise_30;

function sumRows(matriz){
    let sl = [];
    for(const element_i of matriz){
        let sum = 0;
        for(const element_j of element_i){
            sum += element_j;
        }
        sl.push(sum);
    }
    return sl;
}

function sumColumns(matriz){
    let sc = [];
    for (let j = 0; j < matriz[0].length; j++) {
        let sum = 0;
        for (const element of matriz) {
            sum += element[j];
        }
        sc.push(sum);
    }
    return sc;
}

function main(){
    console.log("Matriz: " + matriz);
    console.log("SL: " + sumRows(matriz));
    console.log("SC: " + sumColumns(matriz));
}

main();