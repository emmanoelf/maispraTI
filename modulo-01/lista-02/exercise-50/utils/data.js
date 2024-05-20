const hotels = [
    { id: 1, name: 'Continental', city: 'Rome', total_rooms: 10, available_rooms: 3, ratings: [{ name_client: 'Cassian', rate: 5, comment: null }] },
    { id: 2, name: 'Continental', city: 'New York', total_rooms: 10, available_rooms: 3, ratings: [{ name_client: 'Ms. Perkins', rate: 5, comment: 'muito bom'}, { name_client: "Santino D'Antonio", rate: 5, comment: 'muito bom'} ] },
    { id: 3, name: 'Continental', city: 'Osaka', total_rooms: 10, available_rooms: 3 }
];

const bookings = [
    { id_booking: 1, id_hotel: 2, name_client: 'John Wick' },
];

const hotel_guests = [
    { id_hotel: 2, name_client: 'John Wick', check_in: new Date().toLocaleString(), check_out: null },
    { id_hotel: 2, name_client: 'Ms. Perkins', check_in: new Date().toLocaleString(), check_out: new Date().toLocaleString() },
];

module.exports = { hotels , bookings, hotel_guests };