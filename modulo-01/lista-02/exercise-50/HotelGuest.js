const { hotel_guests } = require('./utils/data');

class HotelGuest{
    constructor(id_hotel, name_client){
        this.id_hotel = id_hotel;
        this.name_client = name_client;
        this.check_in = new Date().toLocaleString();
        this.check_out = null;
    }

    toCheckIn(hotel_guest){
        hotel_guests.push(hotel_guest);
    }

    toCheckOut(hotel_guest){
        hotel_guest.check_out = new Date().toLocaleString();
    }

    findByNameClient(name_client){
        const name_client_lower_case = name_client.toLowerCase();
        const hotel_guest = hotel_guests.find((hotel_guest) => hotel_guest.name_client.toLowerCase() === name_client_lower_case);
        return hotel_guest;
    }

    findById(id_hotel){
        const hotel_occupations = hotel_guests.filter((occupation) => occupation.id_hotel === id_hotel);
        return hotel_occupations;
    }

    findAll(){
        return hotel_guests;
    }
}

module.exports = HotelGuest;