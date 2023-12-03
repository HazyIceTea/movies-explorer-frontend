import AuthPage from "../AuthPage/AuthPage";
import '../AuthPage/AuthPage.css'

function Login() {
    return (
        <AuthPage title="Рады видеть!" buttonName="Войти" subtitle="Ещё не зарегистрированы?" linkPath="/signup"
                  linkText="Регистрация">
            <span className="auth-page__form-input-title">E-mail</span>
            <input type="email" name="loginEmail" className="auth-page__form-input" required/>
            <span className="auth-page__form-input-error">test</span>
            <span className="auth-page__form-input-title">Пароль</span>
            <input type="password" name="loginPassword" className="auth-page__form-input" required/>
            <span className="auth-page__form-input-error auth-page__form-input-error_type_login-last"></span>
        </AuthPage>
    )
}

export default Login;