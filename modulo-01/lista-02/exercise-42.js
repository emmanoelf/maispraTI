const dados = { 
    name: 'Yugi Muto', 
    age: 15, 
    favorite_cards: ['Dark Magician', 'Summoned Skull'], 
    magic_cards: ['Swords of Revealing Light', 'Polymerization', 'Monster reborn'] 
};

function onlyArray(object){
    const object_array = {};
    for(const key in object){
        if(object[key] instanceof Array){
            object_array[key] = object[key];
        }
    }
    return object_array;
}

function main(){
    console.log(onlyArray(dados));
}

main();