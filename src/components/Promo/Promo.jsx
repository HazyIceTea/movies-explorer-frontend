import './Promo.css'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

function Promo () {
    return(
        <section className="promo">
            <h1 className="promo__title">Учебный проект студента факультета&nbsp;Веб-разработки.</h1>
            <nav>
                <ul className="promo__links">
                    <li>
                        <HashLink to="#project" className="promo__link">О проекте</HashLink>
                    </li>
                    <li>
                        <HashLink to="#techs" className="promo__link">Технологии</HashLink>
                    </li>
                    <li>
                        <HashLink to="#student" className="promo__link">Студент</HashLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Promo;