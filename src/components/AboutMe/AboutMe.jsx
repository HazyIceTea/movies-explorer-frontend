import './AboutMe.css'
import {Link} from "react-router-dom";
import photo from '../../images/photo-placeholder.jpg' //у меня нет фоток, поэтому пока вот

function AboutMe() {
    return (
        <section id={"student"} className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div>
                    <h3 className="about-me__name">Леонид</h3>
                    <p className="about-me__job">Фронтенд-разработчик, 25 лет</p>
                    <p className="about-me__description">Хай, я фронт из СПБ, в своё время пробовал C, python, немного
                        знаком с бэкендом, но в итоге решил остановиться на JS разработке.</p>
                    <Link to="#" className="about-me__link">GitHub</Link>
                </div>
                <img src={photo} alt="фотка" className="about-me__photo"/>
            </div>
        </section>
    )
}

export default AboutMe;