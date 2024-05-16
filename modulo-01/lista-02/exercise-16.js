function randomize(){
    return Math.floor(Math.random() * 100);
}

function fulfillArray(){
    const array = new Array(20);
    for(let i = 0; i < array.length; i++){
        array[i] = randomize();
    }

    return array;
}

function main(){
    const array = fulfillArray();
    const ordered_array = array.toSorted((a, b) => a - b);
    console.log("O array de forma crescente é: " + ordered_array.toString());
}

main();