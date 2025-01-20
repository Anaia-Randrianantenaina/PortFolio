import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
           <h2 className="section__title">Mettez-vous en contact</h2>
           <span className="section__subtitle">Contactez-moi</span>

           <div className="contact__container container grid">
            {/* CONTACT CONTENT */}
            <div className="contact__content">
                {/* <h3 className="contact__title">Parle-moi</h3> */}

                <div className="contact__info">
                    {/* CONTACT CARD */}
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">anaiarandrianantenaina@gmail.com</span>

                        <a href="anaiarandrianantenaina@gmail.com" className="contact__button">Écris-moi
                        <i class='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>

                    {/* CONTACT CARD */}
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+261 34 27 284 60</span>

                        <a href="https://wa.me/261342728460" className="contact__button">Écris-moi
                        <i class='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>

                        {/* CONTACT CARD */}
                    <div className="contact__card">
                    <i className="bx bxl-linkedin contact__card-icon"></i>

                    <h3 className="contact__card-title">LinkedIn</h3>
                    <span className="contact__card-data">Anaïa Randrianantenaina</span>

                    <a href="https://www.linkedin.com/search/results/all/?keywords=Anaia%20Randria" className="contact__button">Écris-moi 
                    <i class='bx bx-right-arrow-alt contact__button-icon'></i>
                    </a>
                </div>
            </div>
            </div>

            

            {/* CONTACT CONTENT */}
            <div className="contact__content">
                <h3 className="contact__title">Écrivez-moi votre projet (pas encore fonctionnel)</h3>

                <form action="" className="contact__form">
                    {/* FORM DIV */}
                    <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">Nom</label>
                    <input type="text" name="name" className="contact__form-input" placeholder="Insérez votre nom"/>
                    </div>

                      {/* FORM DIV */}
                    <div className="contact__form-div">
                    <label htmlFor="" className="contact__form-tag">Mail</label>
                    <input type="email" name="mail" className="contact__form-input" placeholder="Insérez votre Mail"/>
                    </div>

                      {/* FORM DIV */}
                    <div className="contact__form-div contact__form-area">
                    <label htmlFor="" className="contact__form-tag">Projet</label>
                    <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Écrivez votre projet"></textarea>
                    </div>

                    <button href="#contact" className="button button--flex">
                     Envoyer 
                    <i class='bx bx-send send'></i>
                    </button>
                </form>
            </div>
           </div>
        </section>
    )
}

export default Contact