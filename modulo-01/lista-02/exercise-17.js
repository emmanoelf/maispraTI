const prompt = require('prompt-sync')();

function saveInfos(){
    const names = [];
    const ages = [];

    for(let i = 0; i < 9; i++){
        let name = prompt(`Digite o nome da pessoa ${i + 1}: `);
        let age = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `));
    
        names.push(name);
        ages.push(age);
    }

    return { names, ages };
}

function showMinorAge(ages, names){
    console.log("Pessoas menores de idade: ")
    for(let i = 0; i < ages.length; i++){
        if(ages[i] < 18){
            console.log(`Nome: ${names[i]} - Idade: ${ages[i]}`);
        }
    }
}

function main(){
    const { ages, names } = saveInfos();
    showMinorAge(ages, names)
}

main();