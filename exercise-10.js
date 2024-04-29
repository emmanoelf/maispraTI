const prompt = require('prompt-sync')();
let number = parseInt(prompt('Digite um número: '));

let count = 1;
while(count <= 10){
    console.log(number);
    count++;
}