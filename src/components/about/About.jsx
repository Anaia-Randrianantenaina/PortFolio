import React from "react";
import "./about.css";
import AboutImg from "../../assets/AboutImg.jpg";
import CV from "../../assets/CV_Officiel.pdf";
import Info from "./Info";

const About = () => {
    return (
     <section className="about section" id="about">
        <h2 className="section__title">À propos</h2>
        <span className="section__subtitle">Mon introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">
                Passionné par la conception d'interfaces utilisateurs intuitives et le développement d'applications modernes, 
                je combine mes compétences en design UI/UX et en développement frontend pour créer des solutions performantes et esthétiques.
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