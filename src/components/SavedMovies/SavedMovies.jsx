import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <section>
            <SearchForm/>
            <MoviesCardList savedList={true}/>
        </section>
    )
}

export default SavedMovies;