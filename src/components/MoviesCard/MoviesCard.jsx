import './MoviesCard.css';
import cardimg from '../../images/cardtest.png';
import savedimg from '../../images/card-saved.svg';
import deleteimg from '../../images/card-delete.svg'

function MoviesCard({saved, savedList}) {
    return (
        <div className="movie-card">
            <img className="movie-card__image" src={cardimg} alt="Превью фильма"/>
            {
                saved
                ? <img src={savedList? deleteimg: savedimg} alt="Иконка 'сохранено'" className="movie-card__saved"/>
                : <button className="movie-card__save">Сохранить</button>
            }
            <div className="movie-card__info-container">
                <h2 className="movie-card__title">Типа название dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</h2>
                <p className="movie-card__duration">1ч 17м</p>
            </div>
        </div>
    )
}

export default MoviesCard;