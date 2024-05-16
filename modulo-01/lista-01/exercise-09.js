const prompt = require('prompt-sync')();
let origin_code = parseInt(prompt('Digite o código de origem do produto: '));

if((origin_code >= 5 && origin_code <= 6) || (origin_code >= 25 && origin_code <= 50)){
    origin_code = 5;
}

if(origin_code >= 10 && origin_code <= 20){
    origin_code = 10;
}

switch(origin_code){
    case 1:
        console.log("Produto de origem da região SUL");
        break;
    case 2:
        console.log("Produto de origem da região NORTE");
        break;
    case 3:
        console.log("Produto de origem da região LESTE");
        break;
    case 4:
        console.log("Produto de origem da região OESTE");
        break;
    case 5:
        console.log("Produto de origem da região NORDESTE");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Produto de origem da região SUDESTE");
        break;
    case 10:
        console.log("Produto de origem da região CENTRO-OESTE");
        break;
    default:
        console.log("Fora dos Intervalos - Prooduto Importado");
        break;
}