import AuthPage from "../AuthPage/AuthPage";
import '../AuthPage/AuthPage.css'
import useValidation from "../../hooks/useValidation";

function Register({onRegistration, isRequesting}) {

    const {values, errors, handleChange, isFormValid} = useValidation();

    function registerSubmit (evt) {
        evt.preventDefault();
        onRegistration(values.name, values.email, values.password);
    }

    return (
        <AuthPage title="Добро пожаловать!" buttonName="Зарегистрироваться" subtitle="Уже зарегистрированы?"
                  linkPath="/signin" isRequesting={isRequesting}
                  isFormValid={isFormValid}
                  linkText="Войти" onSubmit={registerSubmit}>
            <span className="auth-page__form-input-title">Имя</span>
            <input type="text" name="name" className="auth-page__form-input" onChange={handleChange} required/>
            <span className="auth-page__form-input-error">{errors.name}</span>
            <span className="auth-page__form-input-title">E-mail</span>
            <input type="email" name="email" className="auth-page__form-input" onChange={handleChange} required/>
            <span className="auth-page__form-input-error">{errors.email}</span>
            <span className="auth-page__form-input-title">Пароль</span>
            <input type="password" name="password" className="auth-page__form-input" onChange={handleChange} required/>
            <span className="auth-page__form-input-error">{errors.password}</span>
        </AuthPage>
    )
}

export default Register;