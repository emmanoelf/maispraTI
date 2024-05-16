const prompt = require('prompt-sync')();
let segment1 = parseFloat(prompt('Digite o tamanho do primeiro segmento de uma reta: '));
let segment2 = parseFloat(prompt('Digite o tamanho do segundo segmento de uma reta: '));
let segment3 = parseFloat(prompt('Digite o tamanho do terceiro segmento de uma reta: '));

function straight_segments(segment1, segment2, segment3){
    if(segment1 < (segment2 + segment3) && segment2 < (segment1 + segment3) && segment3 < (segment1 + segment2)){
        return console.log("É possível formar um triângulo com esses segmentos de reta.");
    }else{
        return console.log("Não é possível formar um triângulo com esses segmentos de reta.");
    }
}

straight_segments(segment1, segment2, segment3);