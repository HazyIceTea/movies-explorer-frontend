import './FilterCheckbox.css';

function FilterCheckbox({isShortChecked, toggleShortsFilter}) {

    return (
            <div className="filter-container">
                <label className="filter-wrap">
                    <input name="checkbox" checked={isShortChecked} type="checkbox" className="filter__check" onChange={toggleShortsFilter}/>
                    <span className="filter__check-pseudo"></span>
                </label>
                <span className="filter__check-text">Короткометражки</span>
            </div>
    )
}

export default FilterCheckbox;