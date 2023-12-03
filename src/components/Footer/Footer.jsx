import './Footer.css';
import {Link} from "react-router-dom";

function Footer () {
    return(
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум x BeatFilm.</p>
            <div className="footer__links-container">
                <p className='footer__copyright'>&copy;2023</p>
                <nav>
                    <ul className='footer__links'>
                        <li>
                            <Link to={'https://practicum.yandex.ru/'} target='_blank' className='footer__link'>Яндекс.Практикум</Link>
                        </li>
                        <li>
                            <Link to={'https://github.com/HazyIceTea'} target='_blank' className='footer__link'>Github</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;