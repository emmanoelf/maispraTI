const prompt = require('prompt-sync')();

function saveNames(){
    const names = [];

    for(let i = 0; i< 7; i++){
        let name = prompt(`Insira o nome da ${i + 1} pessoa: `);
        names.push(name);
    }

    return names;
}

function reversedNames(names){
    const inversed_names = [];
    const names_copy = [...names];
    while(names_copy.length !== 0){
        inversed_names.push(names_copy.pop());
    }
    return inversed_names;
}

function main(){
    let names = saveNames();
    console.log("Ordem original de inserção: " + names);
    console.log("Ordem invertida de inserção: " + reversedNames(names));
}

main();