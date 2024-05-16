const { exercise_24 } = require('./matriz.js');
const matriz = exercise_24;

function negativeRowCounter(matriz){
    const negatives = [];
    for(const element of matriz){
        let count_negatives = 0;
        for(let j = 0; j < element.length; j++){
            if(element[j] < 0){
                count_negatives++;
            }
        }
        negatives.push(count_negatives)
    }
    return negatives;
}


function main(){
    console.log(negativeRowCounter(matriz));
}

main();