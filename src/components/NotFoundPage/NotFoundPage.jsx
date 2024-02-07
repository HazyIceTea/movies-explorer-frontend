import './NotFoundPage.css';
import {useNavigate} from "react-router-dom";

function NotFoundPage (){
    const navigate = useNavigate();
    return (
        <section className="not-found-page">
            <h2 className="not-found-page__title">404</h2>
            <p className="not-found-page__subtitle">Страница не найдена</p>
            <button onClick={() => {navigate(-1)}} className="not-found-page__link">Назад</button>
        </section>
    )
}

export default NotFoundPage;