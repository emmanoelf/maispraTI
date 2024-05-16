const prompt = require('prompt-sync')();
let number1 = parseInt(prompt('Digite um número: '));
let number2 = parseInt(prompt('Digite um número: '));
let number3 = parseInt(prompt('Digite um número: '));
let number4 = parseInt(prompt('Digite um número: '));

number4 = number1 + number2 + number3;

console.log(`${number1 + 25}, ${number2 * 3}, ${number3 * 0.12}, ${number4}`)