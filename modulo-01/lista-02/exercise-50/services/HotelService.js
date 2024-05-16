const Hotel = require('../Hotel');

class HotelService{
    addHotel(hotel){
        const { name, city, total_rooms } = hotel;
        if(name === undefined || city === undefined){
            throw new Error('Dados inválidos. Por favor insira-os corretamente.');
        }
    
        if(total_rooms === isNaN){
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
        const hotel = Hotel.prototype.findByCity(city);
        
        if(!hotel){
            throw new Error('Hotel não encontrado.');
        }

        return hotel;
    }
}

module.exports = HotelService