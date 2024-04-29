const prompt = require('prompt-sync')();
let side_a = parseInt(prompt('Digite o valor do lado A do triângulo: '));
let side_b = parseInt(prompt('Digite o valor do lado B do triângulo: '));
let side_c = parseInt(prompt('Digite o valor do lado C do triângulo: '));

let is_triangle = (side_a < (side_b + side_c)) && (side_b < (side_a + side_c)) && (side_c < (side_a + side_b));

if(is_triangle){
    if(side_a === side_b && side_a === side_c){
        console.log("Triângulo equilátero");
    }else if(side_a === side_b || side_a === side_c || side_b === side_c){
        console.log("Triângulo isósceles");
    }else{
        console.log("Triângulo escaleno");
    }
}else{
    console.log("Não é um triâgulo")
}