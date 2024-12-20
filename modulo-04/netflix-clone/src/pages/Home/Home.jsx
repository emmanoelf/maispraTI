import { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";
import MovieRow from "../../components/movieRow/MovieRow";
import FeaturedMovie from "../../components/featuredMovie/FeaturedMovie";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "../Home/Home.css";
import SearchMovie from "../../components/searchMovie/SearchMovie";

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(true);
    const [searchResponse, setSearchResponse] = useState([]);

 
    useEffect(()=>{
        const loadAll = async () => {
            let list = await tmdb.getHomeList();
            setMovieList(list);
            let originals = list.filter( i => i.slug === 'originals');
            let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randonChosen];
            let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);
        }

        loadAll();
    },[]);

    useEffect(() =>{
        const scrollListner = () => {
            window.scrollY > 10 ? setBlackHeader(false) : setBlackHeader(true);
        }

        window.addEventListener('scroll', scrollListner);

        return () => {
            window.removeEventListener('scroll',scrollListner);
        }
    },[]);

    return (
        <div className="page">
            <Header black={blackHeader} onSearchResponse={setSearchResponse} />
            {searchResponse.length > 0 ? (
                <section className="lists--searched">
                    <SearchMovie title="Resultados da pesquisa" items={{ results: searchResponse }} />
                </section>
            ) : (
                <>
                    {featuredData && <FeaturedMovie item={featuredData} />}
                    <section className="lists">
                        {movieList.map((item, key) => (
                            <MovieRow key={key} title={item.title} items={item.items} />
                        ))}
                    </section>
                </>
            )}
            <Footer/>
            {movieList.length <= 0 && 
                <div className="loading">
                    <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_1920,c_limit/Netflix_LoadTime.gif" alt="loading" />
                </div> 
            }
        </div>
    );
}

export default Home