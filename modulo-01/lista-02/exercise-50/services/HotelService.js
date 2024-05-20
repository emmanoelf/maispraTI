const Hotel = require('../Hotel');
const HotelGuest = require('../HotelGuest');
const Booking = require('../Booking');
const isEmpty = require('../utils/emptyString');

class HotelService{
    addHotel(hotel){
        const { name, city, total_rooms } = hotel;
        if(isEmpty(name) || isEmpty(city)){
            throw new Error('Dados inválidos. Por favor insira-os corretamente.');
        }
        
        if(isNaN(total_rooms)){
            throw new Error('Dados inválidos. Por favor insira-os corretamente.');
        }
        
        Hotel.prototype.addHotel(hotel);
    }

    findById(id){
        const hotel = Hotel.prototype.findById(id);
        
        if(!hotel){
            throw new Error('Hotel não encontrado.');
        }
        return hotel;
    }

    findByCity(city){
        const hotels = Hotel.prototype.findByCity(city);
        
        if(!hotels){
            throw new Error('Hotel não encontrado.');
        }

        const mapped_hotels = hotels.map(hotel => {
           if(hotel.ratings){
            let stringify = JSON.stringify(hotel.ratings);
            let remove_characters = stringify.replace(/\\"/g, '');
            hotel.ratings = remove_characters;
           }
            return {
                ...hotel,
                ratings: hotel.ratings ? hotel.ratings : "Sem avaliações"
            };
        })

        return mapped_hotels;
    }

    checkIn(name_client){
        const search_booking = Booking.prototype.findByNameClient(name_client);

        if(!search_booking){
            throw new Error(`Reserva no nome de ${name_client} não foi encontrada.`);
        }

        Hotel.prototype.checkIn(search_booking.id_hotel);
        const save_hotel_guest = new HotelGuest(search_booking.id_hotel, name_client);
        HotelGuest.prototype.toCheckIn(save_hotel_guest);
    }

    checkOut(name_client){
        const hotel_guest = HotelGuest.prototype.findByNameClient(name_client);

        if(!hotel_guest){
            throw new Error(`O hospede ${name_client} não foi encontrado.`);
        }

        if(hotel_guest.check_out !== null){
            throw new Error(`O hóspede ${name_client} já realizou o check-out.`);
        }

        Hotel.prototype.checkOut(hotel_guest.id_hotel);
        HotelGuest.prototype.toCheckOut(hotel_guest);
    }

    showOccupations(id){
        const hotel = this.findById(id);

        if(!hotel){
            throw new Error('Hotel não encontrado.');
        }

        const guests = HotelGuest.prototype.findById(id);
        return guests;
    }

    rateHotel(id, name_client, rate, comment){
        const hotel = Hotel.prototype.findById(id);
        const hotel_guest = HotelGuest.prototype.findByNameClient(name_client);

        if(hotel.id !== hotel_guest.id_hotel){
            throw new Error('O hóspede não esteve hospedado nesse hotel.');
        }

        if(hotel_guest.check_out === null){
            throw new Error('O hospede só poderá realizar avaliação após sua estadia!');
        }

        if(!hotel.hasOwnProperty('ratings')){
            hotel.ratings = [];
        }

        const rate_client = { client: name_client, rate, comment };
        hotel.ratings.push(rate_client);
    }
}

module.exports = HotelService