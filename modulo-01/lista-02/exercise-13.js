function fibonacci(number) {
    if (number <= 1) {
        return number;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

function fulfillFibonacci(size_array) {
    let fibonacci_values = [];
    for (let i = 1; i < size_array + 1; i++) {
        fibonacci_values.push(fibonacci(i));
    }
    return fibonacci_values;
}

function main() {
    const array_size = 15;
    const fibonacci_values = fulfillFibonacci(array_size);
    console.log("Os " + array_size + " primeiros números do fibonacci são: ", fibonacci_values.toString());
}

main();