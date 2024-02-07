import './Profile.css'
import {useContext, useEffect, useState} from "react";
import currentUserContext from "../../contexts/CurrentUserContext";
import useValidation from "../../hooks/useValidation";
import Preloader from "../Preloader/Preloader";
import { emailRegex } from "../../utils/constants";

function Profile({onLogOut, isRequesting, sendUserData, profileSuccess, setProfileSuccess, profileError, setProfileError}) {

    const [isEditing, setIsEditing] = useState(false);
    const currentUser = useContext(currentUserContext);
    const {values, errors, isFormValid, handleChange, reset} = useValidation();

    function onEdit(evt) {
        evt.preventDefault();
        setProfileSuccess(false);
        setProfileError(false);
        setIsEditing(true);
    }

    function onSave(evt) {
        evt.preventDefault();
        sendUserData(values.username, values.email);
        setIsEditing(false);

    }

    function onCancel(evt) {
        evt.preventDefault();
        setIsEditing(false);
        reset({'username': currentUser.name, 'email': currentUser.email});
    }


    useEffect(() => {
        reset({'username': currentUser.name, 'email': currentUser.email});
    },[currentUser])

    const disabledRules = isEditing && ((values.username === currentUser.name && values.email === currentUser.email) || !isFormValid);

    return (
        <section className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form">
                <div className="profile__form-container">
                    <span className="profile__form-input-name">Имя</span>
                    <input type="text" name="username" required disabled={!isEditing}
                           value={values.username || ''} onChange={handleChange}
                           className="profile__form-input" minLength={3}/>
                </div>
                <span className="profile__form-input-error">{errors.username}</span>
                <div className="profile__form-container">
                    <span className="profile__form-input-name">E-mail</span>
                    <input type="email" name="email" required disabled={!isEditing}
                           value={values.email || ''} onChange={handleChange}
                           pattern={emailRegex}
                           className="profile__form-input" />
                </div>
                <span className="profile__form-input-error">{errors.email}</span>
                <span className={`profile__form-success ${profileSuccess && "profile__form-success_visible"}`}>Успешно сохранено</span>

                <span className={`profile-form-submit-error ${profileError && "profile-form-submit-error_visible"}`}>Ошибка обновления данных профиля</span>
                {isRequesting
                    ? <Preloader/>
                    : <button className={`profile__form-submit ${disabledRules && "profile__form-submit_disabled"}`} disabled = {disabledRules}
                              onClick={isEditing ? onSave : onEdit}>{isEditing ? "Сохранить" : "Редактировать"}</button>}
                {isEditing && <button className="profile__form-submit"
                                      onClick={onCancel}>Отменить</button>}
            </form>
            <button className="profile__exit-button" onClick={onLogOut}>Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;