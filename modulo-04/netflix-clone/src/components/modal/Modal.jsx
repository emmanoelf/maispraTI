import { useState, useEffect, useCallback } from 'react';
import tmdb from "../../api/tmdb";
import "../modal/Modal.css";
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, movie }) => {
    const [movieInfo, setMovieInfo] = useState([]);
    const [dateMovie, setDateMovie] = useState(0);

    const loadActors = useCallback(async () => {
        let item;
        if (movie.release_date) {
            item = await tmdb.getCast(movie.id, 'movie');
            setDateMovie(new Date(movie.release_date).getFullYear());
        } else {
            item = await tmdb.getCast(movie.id, 'tv');
            setDateMovie(new Date(movie.first_air_date).getFullYear());
        }
        setMovieInfo(item.cast);
    }, [movie]);
    
    useEffect(() => {
        loadActors();
    }, [loadActors]);

    if (!isOpen){
        return null;
    } 
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content container" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className='tx-center'>{movie.name || movie.original_name || movie.original_title}</h2>
                <div className='info--movie'>
                    <p>Avaliações: {movie.vote_average.toFixed(1)}</p>
                    <p>Ano: {dateMovie}</p>
                </div>
                <div className='modal--description'>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
                    <p className='movie--overview'>{movie.overview}</p>
                </div>
                <h3>Elenco</h3>
                <div className='movie-actors'>
                    {movieInfo.length > 0 && movieInfo.slice(0, 5).map((item, index) => (
                        <span key={index}>
                            {item.name}
                            {index < movieInfo.slice(0, 5).length - 1 && <span>,&nbsp;</span>}
                        </span>
                    ))}
                </div>
                
            </div>
        </div>
    );
};

Modal.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        original_title: PropTypes.string,
        original_name: PropTypes.string,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        vote_average: PropTypes.number,
        release_date: PropTypes.string,
        first_air_date: PropTypes.string
    }),
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
};

export default Modal;
