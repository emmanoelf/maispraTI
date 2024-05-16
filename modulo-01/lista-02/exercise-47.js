const sheet = {
    strength: 13,
    dexteriity: 16,
    constitution: 10,
    intelligence: 8,
    wisdom: 6,
    charisma: 12
};

function rollAttributes(sheet){
    const new_sheet = {};

    for(const key in sheet){
        new_sheet[key] = Math.floor(Math.random() * 20) + 1;
    }

    return new_sheet;
}

function main(){
    console.log("Atributos originais da ficha de RPG: ");
    console.log(sheet);
    console.log("Atributos randomizados da ficha de RPG: ");
    console.log(rollAttributes(sheet));
}

main();