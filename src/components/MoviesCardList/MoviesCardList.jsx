import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({savedList}) {
    return(
        <section className="movies-list">
            <div className="movies-list__container">
                <MoviesCard saved={true} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={true} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={false} savedList={savedList}/>
                <MoviesCard saved={true} savedList={savedList}/>
            </div>
            {!savedList && <button className="movies-list__more-button">Ещё</button>}
        </section>
    )
}

export default MoviesCardList;