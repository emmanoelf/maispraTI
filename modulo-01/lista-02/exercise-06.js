const prompt = require('prompt-sync')();

function randomize(){
    return Math.floor(Math.random() * 5) + 1;
}

function main(){
    let pickedNumber = randomize();
    let guess = parseInt(prompt('Adivinhe um número entre 1 e 5: '));

    while(guess !== pickedNumber){
        guess = parseInt(prompt('Você errou. Adivinhe o número de 1 a 5: '));
    }

    console.log(`Você acertou. O número era ${guess}`);
}

main();