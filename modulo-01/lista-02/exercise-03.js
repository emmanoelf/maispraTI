const prompt = require('prompt-sync')();
let distance = parseInt(prompt('Digite a distância que deseja percorrer: '));

function ticket_price(distance){
    let price;

    if(distance < 200){
        price = distance * 0.50;
        console.log("O valor da passagem é de R$", price.toFixed(2));
    }else{
        price = distance * 0.45;
        console.log("O valor da passagem é de R$", price.toFixed(2));
    }
}

ticket_price(distance);