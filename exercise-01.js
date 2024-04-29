const prompt = require('prompt-sync')();
let celsius = parseInt(prompt('Digite a temperatura em graus Celsius para converter em Fahrenheit: '));
console.log(`${celsius} graus celsius (°C) equivalem a ${celsius * 1.8 + 32} Farenheint (°F)`)