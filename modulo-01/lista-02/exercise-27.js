const { exercise_27 } = require('./matriz.js');
const matriz = exercise_27;

function multiplyForParameter(matriz, multiplicator){
    const result = []
    for(const element_i of matriz){
        for(const element_j of element_i){
            result.push(element_j * multiplicator);
        }
    }
    return result;
}

function main(){
    let multiplicator = 3;
    console.log(multiplyForParameter(matriz, multiplicator));
}

main();