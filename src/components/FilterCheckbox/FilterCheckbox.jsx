import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
            <div className="filter-container">
                <label className="filter-wrap">
                    <input type="checkbox" className="filter__check"/>
                    <span className="filter__check-pseudo"></span>
                </label>
                <span className="filter__check-text">Короткометражки</span>
            </div>
    )
}

export default FilterCheckbox;