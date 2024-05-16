const prompt = require('prompt-sync')();

let hoursInMonth = parseInt(prompt("Digite a quantidade de horas de exercício deste mês: "));

while(isNaN(hoursInMonth)){
    hoursInMonth = parseInt(prompt("Por favor, insira corretamente a quantidade de horas de exercíciio deste mês: "));
}

function calculatePoints(hoursInMonth){
    let points;
    let total_earn;
    let money = 0.05;

    switch(hoursInMonth){
        case hoursInMonth < 10:
            points = 2;
            total_earn = (hoursInMonth * points) * money;
            break;
        case hoursInMonth >= 10 && hoursInMonth < 20:
            points = 5;
            total_earn = (hoursInMonth * points) * money;
            break;
        default:
            points = 10;
            total_earn = (hoursInMonth * points) * money;
            break;
    }

    console.log(`Você obteve ${points * hoursInMonth} e ganhou R$ ${total_earn.toFixed(2)}.`);
}

calculatePoints(hoursInMonth);