import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useCallback, useEffect, useState} from "react";
import moviesApi from "../../utils/MoviesApi";

function Movies({handleSaveButton, savedMovies, isFirstSearch, setIsFirstSearch}) {

    const [allMovies, setAllMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchBarState, setSearchBarState] = useState('');
    const [isShortChecked, setIsShortChecked] = useState(false);
    const [isRequesting, setIsRequesting] = useState(false);

    const filterMovies = useCallback((searchValue, isChecked, movies) => {
        localStorage.setItem('searchValue', JSON.stringify(searchValue));
        localStorage.setItem('shortsChecked', JSON.stringify(isChecked));
        localStorage.setItem('allMovies', JSON.stringify(movies));
        setSearchBarState(searchValue);
        setFilteredMovies(movies.filter((movie) => {
            const searchedMovie = movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
            return !isChecked ? searchedMovie : (searchedMovie && movie.duration <= 40)
        }));
    }, [])

    function findMovies(searchValue) {
        if (allMovies.length !== 0) {
            filterMovies(searchValue, isShortChecked, allMovies);
        } else {
            setIsRequesting(true);
            moviesApi.getMovies()
                .then((res) => {
                    setAllMovies(res);
                    setIsShortChecked(false);
                    filterMovies(searchValue, isShortChecked, res);
                })
                .catch(err => {
                    console.error(`Ошибка поиска фильмов ${err}`)
                })
                .finally(() => setIsRequesting(false))
        }
    }

    useEffect(() => {
        if (!isFirstSearch) {
            const movies = JSON.parse(localStorage.allMovies);
            const searchValue = JSON.parse(localStorage.searchValue);
            const shortsIsChecked = JSON.parse(localStorage.shortsChecked);
            setAllMovies(movies);
            setSearchBarState(searchValue);
            setIsShortChecked(shortsIsChecked);
            filterMovies(searchValue, shortsIsChecked, movies);
        }
    }, [filterMovies])


    return (
        <section className="movies">
            <SearchForm findMovies={findMovies} filterMovies={filterMovies} allMovies={allMovies}
                        isShortChecked={isShortChecked} setIsShortChecked={setIsShortChecked}
                        searchBarState={searchBarState} isFirstSearch={isFirstSearch} setIsFirstSearch={setIsFirstSearch}/>
            <MoviesCardList savedMovies={savedMovies} handleSaveButton={handleSaveButton}
                            filteredMovies={filteredMovies} isRequesting={isRequesting} isFirstSearch={isFirstSearch}
                            setIsFirstSearch={setIsFirstSearch}/>
        </section>
    )
}

export default Movies;