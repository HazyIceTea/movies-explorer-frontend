import './Profile.css'

function Profile (){
    return (
        <section className="profile">
            <h2 className="profile__title">Привет, Name!</h2>
            <form className="profile__form">
                <div className="profile__form-container">
                    <span className="profile__form-input-name">Имя</span>
                    <input type="text" value="Тут будет имя" disabled className="profile__form-input"/>
                </div>
                <div className="profile__form-container">
                    <span className="profile__form-input-name">E-mail</span>
                    <input type="email" value="Тут будет мыло" disabled className="profile__form-input"/>
                </div>
                <button className="profile__form-submit">Редактировать</button>
            </form>
            <button className="profile__exit-button">Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;