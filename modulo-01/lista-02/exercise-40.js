
const winning_ticket = [7, 18, 44, 13, 31];

function makeABet(){
    const bet = [];
    for(let i = 0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * 60) + 1;
        bet.push(randomNumber);
    }

    return bet;
}

function generateBets(){
    const bets = [];
    for(let i = 0; i < 50; i++){
        bets.push(makeABet());
    }

    return bets;
}

function hasWinner(winning_ticket, bets){
    let winner;
    let winners = [];
    for(let i = 0; i < bets.length; i++){
        winner = winning_ticket.filter(chosen_number => bets[i].includes(chosen_number)).length;
        if(winner === winning_ticket.length){
            console.log("Ganhador");
            winners.push(i);
        }
    }
    return winners;
}

function main(){
    const bets = generateBets();
    //bets[0] = [7, 18, 44, 13, 31];
    const has_winners = hasWinner(winning_ticket, bets);
    if(has_winners.length > 0){
        console.log(`Houve ${has_winners.length} ganhador(es) dos bilhetes ${has_winners}`);
    }
}

main();