const prompt = require('prompt-sync')();

const array = [7,3,5,9,11,1];

function calculateSum(array){
    return array.reduce((added, value) => added + value, 0);
}

function calculateMultiply(array){
    return array.reduce((multiplied, value) => multiplied * value, 1);
}

function calculateAverage(array){
    const sum = calculateSum(array);
    const average = sum / array.length;
    return average;
}

function ordenate(array){
    const ordered_array = array.toSorted((a, b) => a - b);
    return ordered_array;
}

function main(){
    let operation = parseInt(prompt("Digite a opção desejada: " + "1 - soma dos elements" + 
    " | 2 - produto dos elementos" + 
    " | 3 - média dos elementos " + 
    " | 4 - ordene os elementos em ordem crescente" + 
    " | 5 - mostre o vetor "));

    switch(operation){
        case 1:
            console.log(calculateSum(array));
            break;
        case 2:
            console.log(calculateMultiply(array));
            break;
        case 3:
            console.log(calculateAverage(array));
            break;
        case 4:
            console.log(ordenate(array));
            break;
        case 5:
            console.log(array);
            break;
        default:
            console.log("Opção Inválida. Programa encerrado!");
            break;
    }
}

main();