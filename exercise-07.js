const prompt = require('prompt-sync')();
let quantity_apple = parseInt(prompt('Digite a quantidade de maças compradas: '));

if(quantity_apple < 12){
    console.log(`Valor total da compra foi de R$ ${(quantity_apple * 0.30).toFixed(2)}`);
}else{
    console.log(`Valor total da compra foi de R$ ${(quantity_apple * 0.25).toFixed(2)}`);
}