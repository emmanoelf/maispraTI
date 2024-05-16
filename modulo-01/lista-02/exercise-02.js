const prompt = require('prompt-sync')();

let speed = parseInt(prompt('Qual a velocidade o carro está? '));

if(speed > 80){
    let limit_exceeded = speed - 80;
    let traffic_ticket = limit_exceeded * 5;
    console.log(`Você foi multado em R$ ${traffic_ticket.toFixed(2)}, pois estava a ${limit_exceeded} km/h excedido do limite`);
}