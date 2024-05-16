const games = ["The Witcher 3", "Bloodborne", "Dark Souls", "Hollow Knight", "Bloodborne", "Hades", "Bloodborne", "The Witcher 3"];

function ocorrenceCounter(array){
    const count = {};
    array.forEach((element) =>{
        if(count[element]){
            count[element]++;
        }else{
            count[element] = 1;
        }
    });
    return count;
}

function main(){
    const counter = ocorrenceCounter(games)
    for(const key in counter){
        console.log(`${key}: ${counter[key]}`);
    }
}

main();