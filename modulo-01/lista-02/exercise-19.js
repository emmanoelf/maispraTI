const prompt = require('prompt-sync')();

function validateFormatHour(hour){
    let regex = /^(?:2[0-3]|[01]?\d):[0-5]\d:[0-5]\d$/;
    return regex.test(hour);
}

function saveHours(){
    let hours = [];

    for(let i = 0; i < 5; i++){
        let hour = prompt("Digite o horário desejado: (Utilize o padrão HH:MM:SS) ");

        while(!validateFormatHour(hour)){
            hour = prompt("Por favor, insira o horário no formato solicitado (HH:MM:SS): ");
        }

        hours.push(hour);
    }
    
    return hours;
}

function main(){
    const hours = saveHours();
    console.log("Horários salvos")
    hours.forEach(hour => console.log(hour));
}

main();