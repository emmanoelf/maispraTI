function generateRandomNumber(){
    const array = [];
    for(let i = 0; i < 100; i++){
        let random_number = Math.floor(Math.random() * 401) - 200;
        array.push(random_number);
    }
    return array;
}

function removeNullsAndNegativesNumbers(array){
    const array_compacted = [];
    for(const element of array){
        if(element > 0){
            array_compacted.push(element);
        }
    }

    return array_compacted;
}

function main(){
    const array = generateRandomNumber();
    console.log("Array original");
    console.log(array);
    console.log("Array Compactado");
    console.log(removeNullsAndNegativesNumbers(array));
}

main();