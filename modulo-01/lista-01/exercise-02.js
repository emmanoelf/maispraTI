const prompt = require('prompt-sync')();
let electors = parseInt(prompt('Digite a quantidade total de eleitores: '));
let empty_votes = parseInt(prompt('Digite a quantidade de votos em branco: '));
let null_votes = parseInt(prompt('Digite a quatidade de votos nulos: '));
let valid_votes = parseInt(prompt('Digite a quantidade de votos válidos: '));

console.log(`A quantidade total de eleitores é de ${electors} e suas respectivas porcentagens são:
Votos em Branco: ${(empty_votes/electors)*100}%,
Votos Nulos: ${(null_votes/electors)*100}%,
Votos Validos: ${(valid_votes/electors)*100}%`);