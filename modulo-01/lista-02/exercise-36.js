const winning_ticket = [1, 32, 44, 7, 18, 31, 24, 17, 53, 59, 41, 13, 29];

const bettors = [
    { ticket_number: 1237, bet_ticket: [7, 14, 21, 28, 35, 42, 49, 56, 31, 12, 24, 59, 29] },
    { ticket_number: 666, bet_ticket: [1, 32, 44, 7, 18, 31, 24, 17, 53, 59, 41, 13, 29] },
];

function randomizeTicketNumber(){
    const ticket_number = Math.floor(Math.random() * 1000000) + 1
    return ticket_number;
}

function generateBetTicket(){
    let bet_ticket = [];
    for(let i = 0; i < 13; i++){
        bet_ticket.push(Math.floor(Math.random() * 60) + 1);
    }
    return bet_ticket;
}

function fulfillBettors(array){
    for(let i = 2; i < 100; i++){
        let bettor = {};
        bettor.ticket_number = randomizeTicketNumber();
        bettor.bet_ticket = generateBetTicket();
        array.push(bettor);
    }
    return bettors;
}

function checkBet(winning_ticket, bettors){
    let hits;
    for(const element of bettors){
        hits = winning_ticket.filter(chosen_number => element.bet_ticket.includes(chosen_number)).length;
        console.log(`O bilhete de número ${element.ticket_number} teve ${hits} acertos.`);
        if(hits === winning_ticket.length){
            console.log("Parabéns, tu foi o GANHADOR.");
        }
    } 
}

function main(){
    fulfillBettors(bettors);
    checkBet(winning_ticket, bettors);
}

main();