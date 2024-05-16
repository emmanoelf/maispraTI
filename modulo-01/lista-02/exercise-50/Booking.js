const { bookings } = require('./utils/data');

class Booking{
    constructor(id_hotel, name_client){
        this.id_hotel = id_hotel;
        this.name_client = name_client;
    }

    addBooking(booking){
        const create_booking = { ...booking, id_booking: bookings.length + 1 };        
        bookings.push(create_booking);
    }

    removeBooking(name_client){
        const delete_booking = this.findByNameClient(name_client);

        if(delete_booking === undefined){
            return -1;
        }

        bookings.splice(delete_booking.id_booking, 1);
        return delete_booking;
    }

    findByNameClient(name_client){
        const name_client_lower_case = name_client.toLowerCase();
        const booking = bookings.find((booking) => booking.name_client.toLowerCase() === name_client_lower_case);
        return booking;
    }

    findAll(){
        return bookings;
    }

}

module.exports = Booking;