const prompt = require('prompt-sync')();

let number1 = parseInt(prompt("Digite o primeiro valor para N:"));
let number2 = parseInt(prompt("Digite o segundo valor para N:"));
let number3 = parseInt(prompt("Digite o terceiro valor para N:"));
let number4 = parseInt(prompt("Digite o quarto valor para N:"));
let number5 = parseInt(prompt("Digite o quinto valor para N:"));

// Verifica se os valores são válidos e calcula a tabuada
if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3) && !isNaN(number4) && !isNaN(number5)) {
    // Cálculo e exibição da tabuada para o primeiro valor
    for (let i = 1; i <= number1; i++) {
        let resultado = i * number1;
        console.log(`${i} X ${number1} = ${resultado}`);
    }
    
    // Cálculo e exibição da tabuada para o segundo valor
    for (let i = 1; i <= number2; i++) {
        let resultado = i * number2;
        console.log(`${i} X ${number2} = ${resultado}`);
    }

    // Cálculo e exibição da tabuada para o terceiro valor
    for (let i = 1; i <= number3; i++) {
        let resultado = i * number3;
        console.log(`${i} X ${number3} = ${resultado}`);
    }

    // Cálculo e exibição da tabuada para o quarto valor
    for (let i = 1; i <= number4; i++) {
        let resultado = i * number4;
        console.log(`${i} X ${number4} = ${resultado}`);
    }

    // Cálculo e exibição da tabuada para o quinto valor
    for (let i = 1; i <= number5; i++) {
        let resultado = i * number5;
        console.log(`${i} X ${number5} = ${resultado}`);
    }
} else {
    console.log("Um ou mais valores são inválidos. Por favor, digite números válidos.");
}