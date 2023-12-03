import AuthPage from "../AuthPage/AuthPage";
import '../AuthPage/AuthPage.css'

function Register() {
    return (
        <AuthPage title="Добро пожаловать!" buttonName="Зарегистрироваться" subtitle="Уже зарегистрированы?"
                  linkPath="/signin"
                  linkText="Войти">
            <span className="auth-page__form-input-title">Имя</span>
            <input type="email" name="registerName" className="auth-page__form-input" required/>
            <span className="auth-page__form-input-error">test</span>
            <span className="auth-page__form-input-title">E-mail</span>
            <input type="email" name="loginEmail" className="auth-page__form-input" required/>
            <span className="auth-page__form-input-error"></span>
            <span className="auth-page__form-input-title">Пароль</span>
            <input type="password" name="loginPassword" className="auth-page__form-input" required/>
            <span className="auth-page__form-input-error"></span>
        </AuthPage>
    )
}

export default Register;