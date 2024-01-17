import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useValidation from "../../hooks/useValidation";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function SearchForm({
                        findMovies,
                        isShortChecked,
                        setIsShortChecked,
                        allMovies,
                        filterMovies,
                        isFirstSearch,
                        setIsFirstSearch,
                        searchBarState
                    }) {

    const {values, handleChange, isFormValid, reset, errors} = useValidation();
    const {pathname} = useLocation();

    useEffect(() => {
        pathname === '/movies' && reset({search: searchBarState});
    }, [searchBarState, reset, pathname])

    function onSubmit(evt) {
        evt.preventDefault();
        if (isFirstSearch) {
            setIsFirstSearch(false);
        }
        findMovies(evt.target.search.value);
    }

    function toggleShortsFilter() {
        if (isShortChecked) {
            setIsShortChecked(false);
            filterMovies(values.search || '', false, allMovies);
        } else {
            setIsShortChecked(true);
            filterMovies(values.search || '', true, allMovies);
        }
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={onSubmit}>
                <input type="text" name="search" placeholder="Фильм" className="search__bar" value={values.search || ''}
                       onChange={handleChange} required/>
                <button className="search__submit" disabled={!isFormValid}></button>
            </form>
            <span className="search__error">{errors.search}</span>
            <FilterCheckbox isShortChecked={isShortChecked} toggleShortsFilter={toggleShortsFilter}/>
        </section>
    )
}

export default SearchForm;