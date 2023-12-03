import './AboutProject.css';

function AboutProject() {
    return (
        <section id={"project"} className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__mini-section">
                <h3 className="about-project__mini-section-title">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__mini-section-subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                    доработки.</p>
            </div>
            <div className="about-project__mini-section">
                <h3 className="about-project__mini-section-title">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__mini-section-subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                    защититься.</p>
            </div>
            <div className="about-project__time">
                <p className="about-project__time-bar about-project__time-bar_type_back">1 неделя</p>
                <p className="about-project__time-bar">4 недели</p>
                <span className="about-project__time-span">Back-end</span>
                <span className="about-project__time-span">Front-end</span>
            </div>
        </section>
    )
}

export default AboutProject;