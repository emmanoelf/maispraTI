const { exercise_26 } = require('./matriz.js');
const a = exercise_26;
const b = a;

function multiplyMatriz(a, b){
    const multiply = [];
    for (let i = 0; i < a.length; i++) {
        multiply[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            multiply[i][j] = sum;
        }
    }
    return multiply;
}

function main(){
    console.log(multiplyMatriz(a,b));
}

main();