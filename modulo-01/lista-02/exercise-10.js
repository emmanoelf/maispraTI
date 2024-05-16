const prompt = require('prompt-sync')();

let number;
let keep_going;
let sum = 0;
let minor = Number.MAX_VALUE;
let average = 0;
let even_count = 0;
let countNumbers = 0;

function main(){
    do{
        number = parseFloat(prompt("Digite um número: "));
        countNumbers++;
        sum += number;
        guaranteeMinor(number);
        calculateAverage();
        isEven(number);
        
        keep_going = prompt("Deseja continuar a inserção de números? Sim ou não ").toLowerCase();
    }while(keep_going === "sim");

    console.log("Somatório dos valores: " + sum + "\n" + 
    "Menor número: " + minor + "\n" + 
    "Média dos valores: " + average + "\n" + 
    "Quantos números foram pares: " + even_count);
}

function guaranteeMinor(number){
    if(number < minor){
        minor = number;
    }
}

function calculateAverage(){
    average = sum / countNumbers;
}

function isEven(number){
    if(number % 2 === 0){
        even_count++;
    }
}

main();