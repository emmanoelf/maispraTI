const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,29];

function sepatareOddAndEven(array){
    let odd = [];
    let even = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            even.push(array[i]);
            if(even.length === 5){
                console.log("Números pares: " + even);
                even = [];
            }
        }else{
            odd.push(array[i]);
            if(odd.length === 5){
                console.log("Números ímpares: " + odd);
                odd = [];
            }
        }
    }

    if(even.length > 0){
        console.log("Números pares: " + even);
    }

    if(odd.length > 0){
        console.log("Números ímpares: " + odd);
    }
}

function main(){
    sepatareOddAndEven(array);
}

main();