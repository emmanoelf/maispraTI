function mainDiagonal() {
    let matriz = [];
    for (let i = 0; i < 7; i++) {
        matriz[i] = [];
        for (let j = 0; j < 7; j++) {
            matriz[i][j] = (i === j) ? 1 : null;
        }
    }
    return matriz;
}

function showMatriz(matriz) {
    for (let linha of matriz) {
        console.log(linha.join(" "));
    }
}

function main(){
    showMatriz(mainDiagonal());
}

main();