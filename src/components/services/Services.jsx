import React, { useState } from "react";
import "./services.css";

const Services = () => {

    // Toggle Modal
    const [toogleState, setToggleState] = useState(0);

    const toogleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Mes services</span>

            <div className="services__container container grid">
                
                
                 {/* PARTIE 1 */}
                <div className="services__content">
                <i class='bx bx-grid-alt services__icon '></i>
                    <h3 className="services_title">
                        Produit <br /> Designer
                    </h3>
             

                <span className="services__button" onClick={() => toogleTab(1)}>
                    Voir plus<i class='bx bx-right-arrow-alt services__button-icon'></i>
                </span>

                <div className={toogleState === 1 ? "services__modal active-modal" : "services__modal"}>

                   
                    <div className="services__modal-content">
                        <i className="bx bx-x services__modal-close" onClick={() => toogleTab(0)}></i>

                        <h3 className="services__modal-title">
                            Produit Designer
                        </h3>
                        <p className="services__modal-description">
                        Fournir un travail de qualité aux clients et aux entreprises.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                            Je développe l'interface utilisateur.
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                                Développement de pages et des application Web.
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                            Je crée des interactions ux.
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                            Je positionne votre marque d'entreprise.
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                            Conception et maquettes de produits pour les entreprises.
                            </p>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>


                 {/* PARTIE 2 */}
                <div className="services__content">
                <i class='bx bx-code services__icon '></i>
                    <h3 className="services_title">
                       <br /> Frontend
                    </h3>
             

                    <span className="services__button" onClick={() => toogleTab(2)}>
                   Voir plus <i class='bx bx-right-arrow-alt services__button-icon'></i>
                </span>

                <div className={toogleState === 2 ? "services__modal active-modal" : "services__modal"}>

                   
                    <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close" onClick={() => toogleTab(0)}></i>

                        <h3 className="services__modal-title">
                           Frontend
                        </h3>
                        <p className="services__modal-description">
                           En tant que développeur frontend, je crée des interaces utilisateur attrayantes et intuitives en utilisant RéactJS(NextJS)
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                               Développement d'interfaces Utilisateur
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                               Optimisation des Performances
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                              Intégration de l'Accessibilté
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                               Responsive Design
                            </p>
                            </li>

                            <li className="services__modal-service">
                            <i class='bx bx-check-circle services__modal-icon'></i>
                            <p className="services__modal-info">
                                Maintenance et Mise à Jour
                            </p>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>


               {/* PARTIE 3 */}
<div className="services__content">
    <i class='bx bxs-paint services__icon '></i>
    <h3 className="services_title">
        <br /> UI/UX Designer
    </h3>

    <span className="services__button" onClick={() => toogleTab(3)}>
        Voir plus <i class='bx bx-right-arrow-alt services__button-icon'></i>
    </span>

    <div className={toogleState === 3 ? "services__modal active-modal" : "services__modal"}>

        <div className="services__modal-content">
            <i className="bx bx-x services__modal-close" onClick={() => toogleTab(0)}></i>

            <h3 className="services__modal-title">
                UI/UX Designer
            </h3>
            <p className="services__modal-description">
                En tant que designer UI/UX, je crée des expériences utilisateur optimales, avec un équilibre parfait entre esthétisme et fonctionnalité.
            </p>

            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i class='bx bx-check-circle services__modal-icon'></i>
                    <p className="services__modal-info">
                        Conception de maquettes et prototypes interactifs.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class='bx bx-check-circle services__modal-icon'></i>
                    <p className="services__modal-info">
                        Analyse des besoins utilisateurs et optimisation des parcours.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class='bx bx-check-circle services__modal-icon'></i>
                    <p className="services__modal-info">
                        Création de designs responsives et adaptatifs.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class='bx bx-check-circle services__modal-icon'></i>
                    <p className="services__modal-info">
                        Design d'interfaces intuitives pour applications web et mobiles.
                    </p>
                </li>

                <li className="services__modal-service">
                    <i class='bx bx-check-circle services__modal-icon'></i>
                    <p className="services__modal-info">
                        Respect des principes d'accessibilité et des standards modernes.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>





            </div>
        </section>
    )
}

export default Services