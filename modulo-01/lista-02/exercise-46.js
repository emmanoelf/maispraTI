const sales = [
    { seller: 'Maria', value: 323 },
    { seller: 'João', value: 176 },
    { seller: 'Lucas', value: 401 },
    { seller: 'Júlia', value: 269 },
    { seller: 'Maria', value: 333 },
    { seller: 'Júlia', value: 217 }
];

function calculateTotalSalesPerSeller(sales){
    const total_sales = sales.reduce((sum, sale) => {
        const { seller, value } = sale;
        
        if(sum[seller]){
            sum[seller] += value;
        }else{
            sum[seller] = value;
        }

        return sum;
    }, {});

    return total_sales;
}

function main(){ 
    console.log(calculateTotalSalesPerSeller(sales));
}

main();