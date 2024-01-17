import {Link} from "react-router-dom";
import './AuthPage.css'
import Preloader from "../Preloader/Preloader";

function AuthPage({children, title, buttonName, subtitle, linkPath, linkText, onSubmit, isRequesting, isFormValid}) {
    return (
        <section className="auth-page">

            <form className="auth-page__form">
                <Link to="/" className="auth-page__logo"></Link>
                <h2 className="auth-page__title">{title}</h2>
                {children}
                {isRequesting
                    ? <Preloader/>
                    : <button
                        className={`auth-page__form-submit ${!isFormValid && "auth-page__form-submit_disabled"}`}
                        onClick={onSubmit} disabled={!isFormValid}>{buttonName}</button>}
            </form>
            <div className="auth-page__bottom">
                <p className="auth-page__bottom-subtitle">{subtitle}</p>
                <Link to={linkPath} className="auth-page__bottom-link">{linkText}</Link>
            </div>
        </section>
    )
}

export default AuthPage;