const data = [
    { id: 1, value: 147.50, date: '20-11-2023', category: 'toys' },
    { id: 2, value: 117.89, date: '18-12-2023', category: 'toys' },
    { id: 3, value: 419.24, date: '19-01-2024', category: 'food' },
    { id: 4, value: 313.27, date: '23-01-2024', category: 'food' },
    { id: 5, value: 22.50, date: '24-01-2024', category: 'food' },
    { id: 6, value: 119.75, date: '25-02-2024', category: 'automotive' },
    { id: 7, value: 238.34, date: '01-02-2024', category: 'cleaning' }
];

function financialTransactions(data){
    const transactions_by_category = data.reduce((accum, transaction) => {
        const { category } = transaction;

        if(!accum[category]){
            accum[category] = [];
            accum[category].subtotal = 0;
        }

        accum[category].subtotal += transaction.value;
        accum[category].push(transaction);

        return accum;
    }, {});

    return transactions_by_category;
}


function main(){
    console.log(financialTransactions(data));
}

main();