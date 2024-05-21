const { exercise_26_a, exercise_26_b } = require('./utils/matriz');
const generateRandomMatriz = require('./utils/generateMatriz');
//const a = exercise_26_a;
//const b = exercise_26_b;
const a = generateRandomMatriz(3,5,10);
const b = generateRandomMatriz(3,5,10);

function multiplyMatrix(a, b) {
    let product = [];
    for (let i = 0; i < a.length; i++) {
        product[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            product[i][j] = a[i][j] * b[i][j];
        }
    }
    return product;
}

function main(){
    console.log("Matriz a: ", a);
    console.log("Matriz b: ", b);
    console.log("Matriz multiplicada:", multiplyMatrix(a,b));
}

main();