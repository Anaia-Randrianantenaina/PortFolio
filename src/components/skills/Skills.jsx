import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Autre from "./Autre";


const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Compétences</h2>
            <span className="section__subtitle">Mon niveau technique</span>

            <div className="skills__container container grid">
                <Frontend />

                <Backend />

                <Autre />
            </div>
        </section>
    )
}

export default Skills