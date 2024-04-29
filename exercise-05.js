const prompt = require('prompt-sync')();
let grade1 = parseFloat(prompt('Digita a primeira nota do aluno: '));
let grade2 = parseFloat(prompt('Digita a segunda nota do aluno: '));

let calculatedGrade = (grade1 + grade2)/2;

if(calculatedGrade >= 6){
    console.log('PARABÉNS! Você foi aprovado');
}else{
    console.log('Você foi REPROVADO! Estude mais');
}