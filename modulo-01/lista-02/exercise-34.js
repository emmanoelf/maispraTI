const { exercise_34 } = require('./utils/matriz.js');
const generateRandomMatriz = require('./utils/generateMatriz.js');

const matriz = exercise_34;
//const matriz = generateRandomMatriz(50,50,30)

function multiplicateByMainDiagonal(matriz){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            matriz[i][j] *= matriz[i][i];
        }
    }

    return matriz;
}

function main(){
    console.log("Matriz original");
    console.log(matriz);
    console.log("Matriz multiplicado: ");
    console.log(multiplicateByMainDiagonal(matriz));
}

main();