const generateRandomMatriz = require('./utils/generateMatriz.js');
const { exercise_33, exercise_32 } = require('./utils/matriz.js');

//const matriz = exercise_33;
const matriz = generateRandomMatriz(12,13,30);

function findLargestModuleByRow(matriz, i){
    let largest_module = Math.abs(matriz[i][0])
    for(const element of matriz[i]){
        let current_module = Math.abs(element);
        if(current_module > largest_module){
            largest_module = current_module;
        }
    }

    return largest_module;
}

function divideRowPerModule(matriz, i, largest_module) {
    const modified_row = [];
    for (const element of matriz[i]) {
        let calc = (element / largest_module).toFixed(2);
        modified_row.push(parseFloat(calc));
    }

    return modified_row;
}

function matrizDividedByModule(matriz) {
    const modified_row = [];
    for (let i = 0; i < matriz.length; i++) {
        const largest_module = findLargestModuleByRow(matriz, i);
        const divided_row = divideRowPerModule(matriz, i, largest_module);
        modified_row.push(divided_row);
    }
    return modified_row;
}

function main(){
    console.log("Matriz Original: ");
    console.log(matriz);
    const divided_by_module = matrizDividedByModule(matriz);
    console.log("Matriz Modificada: ");
    console.log(divided_by_module)
}

main();