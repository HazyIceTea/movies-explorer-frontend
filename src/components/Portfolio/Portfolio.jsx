import './Portfolio.css'
import {Link} from "react-router-dom";
import arrow from '../../images/link-arrow.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <nav>
                <ul className="portfolio__links">
                    <li className="portfolio__link-wrapper">
                        <Link to={"https://github.com/HazyIceTea/how-to-learn"} target={"_blank"} className="portfolio__link">
                            Статичный сайт
                            <img src={arrow} alt="Иконка ссылки" className="portfolio__link-img"/>
                        </Link>
                    </li>
                    <li className="portfolio__link-wrapper">
                        <Link to={"https://github.com/HazyIceTea/russian-travel"} target={"_blank"} className="portfolio__link">
                            Адаптивный сайт
                            <img src={arrow} alt="Иконка ссылки" className="portfolio__link-img"/>
                        </Link>
                    </li>
                    <li className="portfolio__link-wrapper">
                        <Link to={"https://github.com/HazyIceTea/react-mesto-api-full-gha"} target={"_blank"} className="portfolio__link">
                            Одностраничное приложение
                            <img src={arrow} alt="Иконка ссылки" className="portfolio__link-img"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Portfolio;