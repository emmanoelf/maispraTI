const prompt = require('prompt-sync')();

const possibilities = ['pedra', 'papel', 'tesoura'];

function randomPick(){
    let random_pick = Math.floor(Math.random() * 3) + 1;
    return possibilities[random_pick];
}

function pickWinner(player_choise, ia_choise){
    if(player_choise === "pedra" && ia_choise === "tesoura" || 
    player_choise === "papel" && ia_choise === "pedra" || 
    player_choise === "tesoura" && ia_choise === "papel"){
        return "Você venceu!";
    } else if(player_choise === ia_choise){
        return "Houve empate.";
    }else{
        return "Você perdeu";
    }
}

function playJoKenPo(){
    let player_choise = prompt('Escolha entre pedra, papel ou tesoura: ').toLowerCase();
    let ia_choice = randomPick();

    while(!possibilities.includes(player_choise)){
        console.log("Escolha inválida. Por favor, escolha entre pedra, papel ou tesoura!");
        player_choise = prompt('Escolha entre pedra, papel ou tesoura ').toLowerCase();
    }

    console.log("Você escolheu: " + player_choise + "\n" +
    "IA escolheu: " + ia_choice + "\n" +
    pickWinner(player_choise, ia_choice));
}

playJoKenPo();