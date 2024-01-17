import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function MoviesCardList({handleSaveButton, savedMovies, filteredMovies, isFirstSearch}) {

    const {pathname} = useLocation();

    const [moreCounter, setMoreCounter] = useState('');
    const moviesList = filteredMovies.slice(0, moreCounter);

    function loadMoreMovies() {

        const tracker = {size: 12, toLoad: 3};
        if (window.innerWidth >= 1241) {
            tracker.size = 12;
            tracker.toLoad = 3;
        }

        if (window.innerWidth < 1241) {
            tracker.size = 8;
            tracker.toLoad = 2;
        }
        if (window.innerWidth < 751) {
            tracker.size = 5;
            tracker.toLoad = 2;
        }

        return tracker
    }

    function checkScreenResize() {
        if (window.innerWidth >= 1241 || window.innerWidth < 1241 || window.innerWidth < 751) {
            setMoreCounter(loadMoreMovies().size)
        }
    }

    useEffect(() => {
        setMoreCounter(loadMoreMovies().size);
        window.addEventListener('resize', checkScreenResize);
    }, [filteredMovies])

    function onMoreButton() {
        setMoreCounter(moreCounter + loadMoreMovies().toLoad)
    }

    return (
        <section className="movies-list">
            {!isFirstSearch?
                <div className="movies-list__container">
                    {
                        pathname !== '/saved-movies'
                            ? moviesList.length !== 0
                                ? moviesList.map(data => {
                                    return <MoviesCard key={data.id} handleSaveButton={handleSaveButton}
                                                       savedMovies={savedMovies} movieData={data}></MoviesCard>
                                })
                                : <span className="movies-list__not-found">Ничего не найдено :(</span>
                            : savedMovies.map(data => {
                                return <MoviesCard key={data._id} handleSaveButton={handleSaveButton}
                                                   savedMovies={savedMovies} movieData={data}/>
                            })
                    }
                </div>
                :
                <span className="movies-list__not-found">Чтобы увидеть список фильмов начните поиск</span>
            }

            {pathname === '/movies' && moreCounter < filteredMovies.length &&
                <button className="movies-list__more-button" onClick={onMoreButton}>Ещё</button>}
        </section>
    )
}

export default MoviesCardList;