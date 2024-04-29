const prompt = require('prompt-sync')();
let grade = parseFloat(prompt('Digite um nota ou digite zero para calcular a média das notas inseridas: '));

let average = 0;
let count = 0;

while(grade !== 0){
    average += grade;
    count++;
    grade = parseFloat(prompt('Digite um nota ou digite zero para calcular a média das notas inseridas: '));
}

console.log(`Média: ${(average/count).toFixed(2)}`);