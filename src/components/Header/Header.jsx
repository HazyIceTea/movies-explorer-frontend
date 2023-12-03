import logo from '../../images/logo.svg';
import {Link} from "react-router-dom";
import './Header.css';
import {useState} from "react";

function Header({loggedIn}) {

    const [burgerOpened, setBurgerOpened] = useState(false);

    function openBurger () {
        setBurgerOpened(true);
    }

    function closeBurger () {
        setBurgerOpened(false);
    }

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип"/>
            <div className={`header__burger-container ${burgerOpened? "header__burger-container_opened": ""}`}>
                <button className="burger__close" onClick={closeBurger}></button>
                <nav>
                    <ul className="burger__links">
                        <li>
                            <Link to={'/'} className="burger__link">Главная</Link>
                        </li>
                        <li>
                            <Link to={'/movies'} className="burger__link">Фильмы</Link>
                        </li>
                        <li>
                            <Link to={'/saved-movies'} className="burger__link">Сохранённые фильмы</Link>
                        </li>
                    </ul>
                </nav>
                <Link to={'/profile'} className="header__account">Аккаунт</Link>
            </div>
            <nav className="header__navigation-container">
                {loggedIn ?
                    <>
                        <ul className="header__navigation">
                            <li>
                                <Link to={'/movies'} className="header__navigation-link">Фильмы</Link>
                            </li>
                            <li>
                                <Link to={'/saved-movies'} className="header__navigation-link">Сохранённые
                                    фильмы</Link>
                            </li>
                        </ul>
                        <Link to={'/profile'} className="header__account">Аккаунт</Link>
                    </>
                    :
                    <ul className="header__navigation">
                        <li>
                            <Link to={'/signup'} className="header__navigation-link">Регистрация</Link>
                        </li>
                        <li>
                            <Link to={'/signin'}
                                  className="header__navigation-link header__navigation-link_type_login">Войти</Link>
                        </li>
                    </ul>

                }
            </nav>
            <button className="header__burger" onClick={openBurger}></button>

            {/*{loggedIn && <Link to={'/profile'} className="header__account">Аккаунт</Link>}*/}
        </header>
    )
}

export default Header;