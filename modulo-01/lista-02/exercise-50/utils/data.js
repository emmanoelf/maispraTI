const hotels = [
    { id: 1, name: 'First Hotel', city: 'São Leopoldo', total_rooms: 10, available_rooms: 3 },
    { id: 2, name: 'Continental', city: 'New York', total_rooms: 10, available_rooms: 3 },
    { id: 3, name: 'Random', city: 'New York', total_rooms: 10, available_rooms: 3 }
];

const bookings = [
    { id_booking: 1, id_hotel: 2, name_client: 'John Wick' },
];

module.exports = { hotels , bookings};