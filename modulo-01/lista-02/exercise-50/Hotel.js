const { hotels } = require('./utils/data');

class Hotel{
    constructor(name, city, total_rooms){
        this.name = name;
        this.city = city;
        this.total_rooms = total_rooms;
        this.available_rooms = this.total_rooms - (this.booked_rooms + this.occupied_rooms);
        this.booked_rooms = 0;
        this.occupied_rooms = 0;
    }

    addHotel(hotel){
        const new_hotel = { ...hotel, id: hotels.length + 1 };
        hotels.push(new_hotel);
    }

    findByCity(city){
        const search_hotels = hotels.filter((hotel) => hotel.city === city);
        return search_hotels;
    }

    findById(id){
        const hotel = hotels.find((hotel) => hotel.id === id);
        return hotel;
    }

    findAll(){
        return hotels;
    }

    checkIn(id){
        const hotel = this.findById(id);
        hotel.booked_rooms--;
        hotel.occupied_rooms++;
    }

    checkOut(id){
        const hotel = this.findById(id);
        hotel.occupied_rooms--;
    }

}

module.exports = Hotel;