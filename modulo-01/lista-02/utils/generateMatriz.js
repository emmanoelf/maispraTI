const generateRandomMatriz = (size_i, size_j, generate_until) => {
    let matriz = [];
    for (let i = 0; i < size_i; i++) {
        matriz[i] = [];
        for (let j = 0; j < size_j; j++) {
            matriz[i][j] = Math.floor(Math.random() * generate_until) + 1;
        }
    }
    return matriz;
}

module.exports = generateRandomMatriz;