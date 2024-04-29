
let count = 0;
let num = 101;

while (count < 50) {
    let isPrime = true;
    let divider = 2; 
    while (divider <= Math.sqrt(num)) {
        if (num % divider === 0) {
            isPrime = false;
            break;
        }
        divider++;
    }

    if (isPrime) {
        console.log(num);
        count++;
    }

    num++;
}