import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useCallback, useEffect, useState} from "react";

function SavedMovies({handleDeleteButton, savedMovies}) {

    const [filteredMovies, setFilteredMovies] = useState(savedMovies);
    const [searchBarState, setSearchBarState] = useState('');
    const [isShortChecked, setIsShortChecked] = useState(false);

    const filterMovies = useCallback((searchValue, isChecked, movies) => {
        setSearchBarState(searchValue);
        setFilteredMovies(movies.filter((movie) => {
            const searchedMovie = movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
            return !isChecked ? searchedMovie : (searchedMovie && movie.duration <= 40)
        }));
    }, [])

    function findMovies(searchValue) {
        filterMovies(searchValue, isShortChecked, savedMovies);
    }

    useEffect(() => {
        filterMovies(searchBarState, isShortChecked, savedMovies)
    }, [savedMovies, isShortChecked, searchBarState])

    return (
        <section>
            <SearchForm findMovies={findMovies} allMovies={savedMovies} filterMovies={filterMovies} isShortChecked={isShortChecked}
                        setIsShortChecked={setIsShortChecked} searchBarState={searchBarState}/>
            <MoviesCardList savedMovies={filteredMovies} handleSaveButton={handleDeleteButton}
                            filteredMovies={filteredMovies}/>
        </section>
    )
}

export default SavedMovies;