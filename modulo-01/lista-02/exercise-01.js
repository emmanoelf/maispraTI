const prompt = require('prompt-sync')();

let cigars_days = parseInt(prompt('Quantos cigarros você fuma por dia? '));
let cigars_years = parseInt(prompt('Há quantos anos você fuma? '));

let total_cigars = (cigars_days * 365) * cigars_years;

let total_time_loss = (total_cigars * 10) / (24 * 60);

console.log(`Você perdeu ${Math.round(total_time_loss)} dias de vida por fumar`);