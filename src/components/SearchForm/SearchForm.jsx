import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return(
        <section className="search">
            <form className="search__form">
                <input type="text" placeholder="Фильм" className="search__bar" required/>
                <button className="search__submit"></button>
            </form>
            <span className="search__error">Тут будет текст ошибки</span>
            <FilterCheckbox/>
        </section>
    )
}

export default SearchForm;