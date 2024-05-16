const prompt = require('prompt-sync')();

function calculatePA(first, reason, n) {
    let elements = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let element = first + i * reason;
        elements.push(element);
        sum += element;
    }
    return { elements, sum };
}

function main() {
    const first = parseInt(prompt("Digite o primeiro termo da PA: "));
    const reason = parseInt(prompt("Digite a razão da PA: "));
    const n = 10;

    const { elements, sum } = calculatePA(first, reason, n);

    console.log("Os 10 primeiros elementos da PA são:", elements);
    console.log("A soma dos 10 primeiros elementos da PA é:", sum);
}

main();