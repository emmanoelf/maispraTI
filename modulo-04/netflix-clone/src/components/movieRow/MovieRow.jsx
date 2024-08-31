import { useState } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Modal from "../modal/Modal";
import '../movieRow/MovieRow.css';
import PropTypes from 'prop-types';

const MovieRow = ({ title, items }) => {
    const [scrollx, setScroolx] = useState(-400);
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

    const hadleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScroolx(x);
    }

    const hadleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScroolx(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={hadleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--right" onClick={hadleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list"
                    style={
                        {
                            marginLeft: scrollx,
                            width: items.results.length * 150
                        }
                    }>
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

MovieRow.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired
}

export default MovieRow