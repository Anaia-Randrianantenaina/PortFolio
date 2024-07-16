import React from "react";

const Info = () => {
    return (
       <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>

            <h3 className="about__title">Expériences</h3>
            <span className="about__subtitle">2 ans de travail</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase about__icon' ></i>

            <h3 className="about__title">Réalisés</h3>
            <span className="about__subtitle"> + 10 projets</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>

            <h3 className="about__title">Appuis</h3>
            <span className="about__subtitle">En ligne 24/7</span>
        </div>
       </div>
    )
}

export default Info