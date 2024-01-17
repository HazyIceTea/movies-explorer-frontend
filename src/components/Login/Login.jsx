import AuthPage from "../AuthPage/AuthPage";
import '../AuthPage/AuthPage.css'
import useValidation from "../../hooks/useValidation";

function Login({onLogin, isRequesting}) {

    const {values, errors, handleChange, isFormValid} = useValidation();

    function loginSubmit (evt) {
        evt.preventDefault();
        onLogin(values.email, values.password);
    }

    return (
        <AuthPage title="Рады видеть!" buttonName="Войти" subtitle="Ещё не зарегистрированы?" linkPath="/signup"
                  linkText="Регистрация" onSubmit={loginSubmit} isRequesting={isRequesting} isFormValid={isFormValid}>
            <span className="auth-page__form-input-title">E-mail</span>
            <input type="email" name="email" className="auth-page__form-input" onChange={handleChange} required/>
            <span className="auth-page__form-input-error">{errors.email}</span>
            <span className="auth-page__form-input-title">Пароль</span>
            <input type="password" name="password" className="auth-page__form-input" onChange={handleChange} required/>
            <span className="auth-page__form-input-error auth-page__form-input-error_type_login-last">{errors.password}</span>
        </AuthPage>
    )
}

export default Login;