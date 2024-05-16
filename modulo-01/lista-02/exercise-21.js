const prompt = require('prompt-sync')();

function calculateIdealWeight(height, gender){
    let ideal_weight;
    if(gender === 1){
        ideal_weight = 72.7 * height - 58;
    }else{
        ideal_weight = 62.1 * height - 44.7;
    }

    return ideal_weight;
}

function main(){
    let height;
    let gender;
    do{
        height = parseFloat(prompt("Insira a altura: "));
        gender = parseInt(prompt("Digte o sexo: 1 - Masculino ou 2 - Feminino "));
    }while(gender !== 1 && gender !== 2);

    console.log(`O peso ideal para uma pessoa do sexo ${gender} e de altura ${height} é de `, calculateIdealWeight(height, gender));
}

main();