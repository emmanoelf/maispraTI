const Booking = require('./Booking');
const Hotel = require('./Hotel');
const BookingService = require('./services/BookingService');
const HotelService = require('./services/HotelService');

const showMenu = require('./utils/showMenu');
const prompt = require('prompt-sync')();

function main(){
    console.log("---Bem-vindo ao sistema de gerenciamento de hoteis---");

    let option;

    while(option !== 0){
        showMenu();
        option = parseInt(prompt("Digite a opção desejada: "));

        switch(option){
            case 1: {
                let name_hotel = prompt("Digite o nome do hotel: ");
                let city = prompt("Digte a cidade a qual o hotel pertence: ");
                let total_rooms = parseInt(prompt("Digite o total de quartos que o hotel possui: "));

                let new_hotel = new Hotel(name_hotel, city, total_rooms);
                HotelService.prototype.addHotel(new_hotel);

                break;
            }
            case 2: {
                let city = prompt("Digite o nome da cidade para ver todos os hoteis que ela fornece: ");

                console.log(HotelService.prototype.findByCity(city));
                break;
            }
            case 3: {
                let id_hotel = parseInt(prompt("Digite o id do hotel para fazer uma reserva: "));
                let name_client = prompt("Digite o nome do cliente que deseja fazer a reserva: ");

                let booking = new Booking(id_hotel, name_client);
                BookingService.prototype.addBooking(booking);
                break;
            }
            case 4: {
                let name_client = prompt("Digite o nome do cliente para cancelar a reserva: ");
                BookingService.prototype.removeBooking(name_client);
                break;
            }
            case 5: {
                console.log(BookingService.prototype.showAllBookings());
                break;
            }
            case 6: {
                let id = parseInt(prompt("Digite o id do hotel verificar suas ocupações: "));
                console.log(HotelService.prototype.showOccupations(id));
                break;
            }
            case 7: {
                let name_client = prompt("Digite o nome do cliente para realizar o check-in: ");
                HotelService.prototype.checkIn(name_client);
                break;
            }
            case 8: {
                let name_client = prompt("Digite o nome do cliente para realizar o check-out: ");
                HotelService.prototype.checkOut(name_client);
                break;
            }
            case 9:{
                let name_client = prompt("Digite o nome do cliente para realizar realizar a avaliação do hotel: ");
                let id_hotel = parseInt(prompt("Digite id do hotel: "));
                let rate = parseFloat(prompt("Digite a nota do hotel: "));
                let comment = prompt("Digite um comentário para o hotel: ");
                HotelService.prototype.rateHotel(id_hotel, name_client, rate, comment);
                break;
            }
            default: {
                console.log("Encerrando");
                break;
            }
        }
    }
    
}

main();