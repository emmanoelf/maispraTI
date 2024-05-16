const prompt = require('prompt-sync')();

const possibilities = ['popular', 'luxo'];
let vehicle_type = prompt("Digite o tipo do veículo: ").toLowerCase();

while(!possibilities.includes(vehicle_type)){
    console.log("Por favor, digite o tipo do veículo corretamente. Popular ou luxo? ");
    vehicle_type = prompt("Digite o tipo do veículo: ").toLowerCase();
}

let distance = parseFloat(prompt("Digite a quilometragem rodada: "))
let daily = parseInt(prompt("Digite quantos dias o carro ficou alugado: "))

function main(vehicle_type, distance){
    let total_debts;

    if(vehicle_type === 'popular'){
        total_debts = popularVehicle(distance);
        totalDebts(distance, vehicle_type, daily, total_debts)
    }else{
        total_debts = luxuryVehicle(distance);
        totalDebts(distance, vehicle_type, daily, total_debts)
    }
    
}

function popularVehicle(distance){
    let debts;
    if(distance <= 100){
        debts = (distance * 0.20) + (90 * daily);
    }else{
        debts = (distance * 0.10) + (90 * daily);
    }
    return debts;
}

function luxuryVehicle(distance){
    let debts;
    if(distance <= 200){
        debts = (distance * 0.30) + (150 * daily);
    }else{
        debts = (distance * 0.25) + (150 * daily);
    }
    return debts;
}

function totalDebts(distance, vehicle_type, daily, total_debts){
    console.log(`Você rodou por ${distance} km, com um carro ${vehicle_type}, por ${daily} dia(s). Seu gasto total é de R$ ${total_debts.toFixed(2)}`);
}

main(vehicle_type, distance);