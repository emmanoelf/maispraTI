const prompt = require('prompt-sync')();

let array = [];

function saveNumbers(){
    for(let i = 0; i < 10; i++){
        let number = parseInt(prompt("Insira um número: "));
        array.push(number);
    }
}

function findEvenNumbers(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            console.log("Número par: " + array[i] + " salvo na posição " + i + " do array");
        }
    }
}

function main(){
    saveNumbers();
    findEvenNumbers(array);
}

main();