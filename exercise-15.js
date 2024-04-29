const prompt = require('prompt-sync')();

let grade = parseFloat(prompt('Digite uma nota ou digite 0 para que a média seja calculada: '));
let weight = parseFloat(prompt('Digite o peso ou digite 0 para que a média seja calculada: '));

let average = 0;
let weights = 0;

while (grade != 0) {
    average += (grade*weight);
    weights += parseFloat(weight);
    grade = prompt('Digite uma nota ou digite 0 para que a média seja calculada: ');
    weight = prompt('Digite o peso ou digite 0 para que a média seja calculada: ');
}
let mediaPonderada =  parseFloat(average/weights).toFixed(2);
console.log(`Média Aritimética Ponderada: ${mediaPonderada}`);