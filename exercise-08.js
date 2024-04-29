const prompt = require('prompt-sync')();
let value1 = parseInt(prompt('Digite o primeiro valor: '));
let value2 = parseInt(prompt('Digite o segundo valor: '));

while(value1 === value2){
    console.log("Os números inseridos não podem ser iguais!");
    value1 = parseInt(prompt('Digite o primeiro valor: '));
    value2 = parseInt(prompt('Digite o segundo valor: '));
}

if(value1 < value2){
    console.log(value1, value2);
}else{
    console.log(value2, value1);
}