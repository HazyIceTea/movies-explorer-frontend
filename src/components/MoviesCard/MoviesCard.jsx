import './MoviesCard.css';
import savedimg from '../../images/card-saved.svg';
import deleteimg from '../../images/card-delete.svg'
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

function MoviesCard({savedMovies, movieData, handleSaveButton}) {

    const {pathname} = useLocation()
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setIsSaved(savedMovies.some(element => movieData.id === element.movieId))
    }, [movieData])

    function convertTime(time) {
        if (time >= 60) {
            const hours = Math.floor(time / 60);
            return `${hours}ч ${time % 60}м`;
        } else {
            return `${time}м`;
        }
    }

    function clickSave() {
        handleSaveButton(movieData);
        setIsSaved(true);
    }

    function clickDelete() {
        handleSaveButton(movieData._id || movieData);
        setIsSaved(false);
    }

    return (
        <div className="movie-card">
            <Link to={movieData.trailerLink} target='_blank'>
                <img className="movie-card__image"
                     src={pathname === '/movies' ? `https://api.nomoreparties.co${movieData.image.url}` : movieData.image}
                     alt="Превью фильма"/>
            </Link>
            {
                pathname === '/saved-movies'
                    ?
                    <img src={deleteimg} onClick={clickDelete} alt="Иконка 'сохранено'" className="movie-card__saved"/>
                    : !isSaved
                        ? <button className="movie-card__save" onClick={clickSave}>Сохранить</button>
                        : <img src={savedimg} alt="Иконка 'сохранено'" onClick={clickDelete} className="movie-card__saved"/>
            }
            <div className="movie-card__info-container">
                <h2 className="movie-card__title">{movieData.nameRU}</h2>
                <p className="movie-card__duration">{convertTime(movieData.duration)}</p>
            </div>
        </div>
    )
}

export default MoviesCard;