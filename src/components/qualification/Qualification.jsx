import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">Mes qualifications</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className='bx bxs-graduation qualification__icon'></i>
                        Education
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className='bx bx-briefcase qualification__icon'></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* QUALIFICATION EDUCATION */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                         {/* QUALIFICATION DATA 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">L3 en informatique(DAII)</h3>
                                <span className="qualification__subtitle">EMIT Fianarantsoa</span>
                                <div className="qualification__calender">
                                    <i className='bx bx-calendar'></i> 2024 - Présent
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                         {/* QUALIFICATION DATA 2 */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">L2 en informatique(DAII)</h3>
                                <span className="qualification__subtitle">EMIT Fianarantsoa</span>
                                <div className="qualification__calender">
                                    <i className='bx bx-calendar'></i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                         {/* QUALIFICATION DATA 3 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">L1 en informatique(DAII)</h3>
                                <span className="qualification__subtitle">EMIT Fianarantsoa</span>
                                <div className="qualification__calender">
                                    <i className='bx bx-calendar'></i> 2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* QUALIFICATION DATA */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">BACC série D</h3>
                                <span className="qualification__subtitle">Lycée Raherivelo Ramamonjy</span>
                                <div className="qualification__calender">
                                    <i className='bx bx-calendar'></i> 2020 - 2021
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* QUALIFICATION EXPERIENCE */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

                        {/* QUALIFICATION DATA 1 */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Développeur application web</h3>
                                <span className="qualification__subtitle">EMIT Fianarantsoa (Stage)</span>
                                <div className="qualification__calender">
                                    <i className='bx bx-calendar'></i> Juin 2024 - Présent
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                         {/* QUALIFICATION DATA  2*/}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Développeur d'application web</h3>
                                <span className="qualification__subtitle">Direction Régional des Impôts HM (Stage)</span>
                                <div className="qualification__calender">
                                    <i className='bx bx-calendar'></i> Juin 2023 - Août 2023
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;
