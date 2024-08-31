import { useState } from "react";
import Modal from "../modal/Modal";
import '../searchMovie/SearchMovie';
import PropTypes from 'prop-types';

const SearchMovie = ({ title, items }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (item) => {
        setSelectedMovie(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className="searchedRow">
            <h1>{title}</h1>
            <div className="movieRow--listarea">
            <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item) => (
                    <div className="movieRow--item" key={item.id}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} 
                            alt={item.original_title} 
                            className="movie-item" 
                            onClick={() => openModal(item)} 
                        />
                    </div>
                ))}
            </div>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                movie={selectedMovie} 
            />
        </div>
    );
}

SearchMovie.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired
}


export default SearchMovie