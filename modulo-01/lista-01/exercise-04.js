const prompt = require('prompt-sync')();
let grade1 = parseInt(prompt('Digita a primeira nota do aluno: '));
let grade2 = parseInt(prompt('Digita a segunda nota do aluno: '));

if((grade1 && grade2) >= 6){
    console.log('PARABÉNS! Você foi aprovado');
}