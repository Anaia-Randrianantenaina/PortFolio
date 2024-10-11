import React from "react";
import "./about.css";
import AboutImg from "../../assets/AboutImg.jpg";
import CV from "../../assets/CV_Officiel.pdf";
import Info from "./Info";

const About = () => {
    return (
     <section className="about section" id="about">
        <h2 className="section__title">À propos de moi</h2>
        <span className="section__subtitle">Mon introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
              En tant que développeur full-stack spécialisé en frontend et backend (JS/PHP), et design UI/UX,
              je conçois et développe des interfaces attrayantes, des systèmes serveur robustes et des éxpériences utilisateur optimales
                </p>

                <a download="" href={CV} className="button button--flex">
                   Telecharger le CV
                    <i class='bx bxs-file filee'></i>
                </a>
            </div>
        </div>
     </section>
    )
}
export default About