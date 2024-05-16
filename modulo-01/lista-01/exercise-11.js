const prompt = require('prompt-sync')();
let number = parseInt(prompt('Digite um número inteiro: '));

while(number >= 0 && !isNaN(number)){
    if(number %2 === 0){
        console.log("PAR");
    }else{
        console.log("ÍMPAR");
    }
    number = parseInt(prompt('Digite outro número inteiro: '));
}