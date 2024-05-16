const prompt = require('prompt-sync')();
const generateRandomMatriz = require('./utils/generateMatriz');

function createMatrizX(matriz_v, a){
    let matriz_x = [];
    let count = 0
    for(let i = 0; i < matriz_v.length; i++){
        matriz_x[i] = [];
        for(let j = 0; j < matriz_v.length; j++){
            if(matriz_v[i][j] !== a){
                matriz_x[i].push(matriz_v[i][j]);
            }else{
                count++;
            }
        }
    }

    return { matriz_x, count };
}

function main(){
    const matriz_v = generateRandomMatriz(30, 30, 50);
    let a = parseInt(prompt("Digite o número que deseja excluir da matriz: "));
    const { matriz_x, count } = createMatrizX(matriz_v, a);

    console.log("O número escolhido para ser removido foi: " + a);
    console.log(`O número ${a} apareceu ${count} vezes na matriz`);
    console.log("Matriz original:");
    console.log(matriz_v);
    console.log("Matriz com o número " + a + " removido: ");
    console.log(matriz_x);
}

main();