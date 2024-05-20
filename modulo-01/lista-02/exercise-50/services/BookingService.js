const Booking = require('../Booking');
const Hotel = require('../Hotel');

class BookingService{
    addBooking(booking){
        const { id_hotel } = booking;
        const hotel = Hotel.prototype.findById(id_hotel);

        if(!hotel){
            throw new Error('Hotel não encontrado.');
        }

        if(hotel.available_rooms <= 0){
            throw new Error('Desculpe! Não há mais quartos disponíveis neste hotel.');
        }

        Booking.prototype.addBooking(booking);
        hotel.booked_rooms++;
    }

    removeBooking(name_client){
        const remove = Booking.prototype.removeBooking(name_client);

        if(remove === -1){
            throw new Error(`A reserva no nome de ${name_client} não foi encontrada!`);
        }

        const hotel = Hotel.prototype.findById(remove.id_hotel);
        hotel.booked_rooms++;
    }

    showAllBookings(){
        const bookings = Booking.prototype.findAll();
        
        const mapped_bookings = bookings.map(booking => {
            const hotel = Hotel.prototype.findById(booking.id_hotel);

            return {
                booking_number: booking.id_booking,
                hotel_name: hotel.name,
                hotel_city: hotel.city,
                hotel_total_rooms: hotel.total_rooms,
                hotel_available_rooms: hotel.available_rooms,
                client: booking.name_client
            }
        });

        return mapped_bookings;
    }
}

module.exports = BookingService;