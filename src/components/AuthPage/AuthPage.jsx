import logo from "../../images/logo.svg"
import {Link} from "react-router-dom";
import './AuthPage.css'

function AuthPage ({children, title, buttonName, subtitle, linkPath, linkText}) {
    return (
        <section className="auth-page">
            <img src={logo} alt="Логотип" className="auth-page__logo"/>
            <h2 className="auth-page__title">{title}</h2>
            <form className="auth-page__form">
                {children}
                <button className="auth-page__form-submit">{buttonName}</button>
            </form>
            <div className="auth-page__bottom">
                <p className="auth-page__bottom-subtitle">{subtitle}</p>
                <Link to={linkPath} className="auth-page__bottom-link">{linkText}</Link>
            </div>
        </section>
    )
}

export default AuthPage;