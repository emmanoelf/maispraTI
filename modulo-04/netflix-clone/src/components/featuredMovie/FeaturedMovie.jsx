import "../featuredMovie/FeaturedMovie.css";
import PropTypes from 'prop-types';

const FeaturedMovie = ({ item }) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push( item.genres[i].name);
    }

    let description = item.overview;

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }
        }>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average.toFixed(1)} pontos</div>
                        <div className="featured--year"> {firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{description ? description.substring(0,200)+'...' : 'Descricão não encontrada...'}</div>
                    <div className="featured--buttons">
                        <a className="featured--watchButton" href={`/watch/${item.id}`}>⮞ Assistir</a>
                        <a className="featured--addButton" href={`/list/add/${item.id}`}>➕ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}

FeaturedMovie.propTypes = {
    item: PropTypes.shape({
        first_air_date: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ).isRequired,
        overview: PropTypes.string,
        backdrop_path: PropTypes.string.isRequired,
        original_name: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        number_of_seasons: PropTypes.number,
        id: PropTypes.number.isRequired
    }).isRequired
};

export default FeaturedMovie