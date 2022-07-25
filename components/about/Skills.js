import React from "react";

import styles from "../../styles/about/Skills.module.css"

 const Skills = () => {

    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.title}>Principais Conhecimentos</h1>
                <h2 className={styles.chemistry}>Química</h2>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Química Inorgânica </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.chemistryProgress1}>
                                <h1 className={styles.chemistryDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Estequiometria </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.chemistryProgress1}>
                                <h1 className={styles.chemistryDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Termodinâmica Química </h2>
                            <h2 className={styles.porcent}> 80% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.chemistryProgress2}>
                                <h1 className={styles.chemistryDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Cinética Química </h2>
                            <h2 className={styles.porcent}> 80% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.chemistryProgress2}>
                                <h1 className={styles.chemistryDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Química Orgânica </h2>
                            <h2 className={styles.porcent}>60%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.chemistryProgress3}>
                                <h1 className={styles.chemistryDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Eletroquímica </h2>
                            <h2 className={styles.porcent}>60%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.chemistryProgress3}>
                                <h1 className={styles.chemistryDash}>.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <h2 className={styles.math}> Matemática </h2>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Matemática Básica </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.mathProgress1}>
                                <h1 className={styles.mathDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Visão Espacial </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.mathProgress1}>
                                <h1 className={styles.mathDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Geometria </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.mathProgress1}>
                                <h1 className={styles.mathDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Trigonometria </h2>
                            <h2 className={styles.porcent}> 80% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.mathProgress2}>
                                <h1 className={styles.mathDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Análise Combinatória </h2>
                            <h2 className={styles.porcent}>40%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.mathProgress4}>
                                <h1 className={styles.mathDash}>.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <h2 className={styles.physical}> Física </h2>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Cinemática </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.physicalProgress1}>
                                <h1 className={styles.physicalDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Mecânica </h2>
                            <h2 className={styles.porcent}> 60% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.physicalProgress3}>
                                <h1 className={styles.physicalDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Ondulatória </h2>
                            <h2 className={styles.porcent}> 80% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.physicalProgress2}>
                                <h1 className={styles.physicalDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Eletrodinâmica </h2>
                            <h2 className={styles.porcent}> 60% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.physicalProgress2}>
                                <h1 className={styles.physicalDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Hidrodinâmica </h2>
                            <h2 className={styles.porcent}>80%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.physicalProgress2}>
                                <h1 className={styles.physicalDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Calorimetria </h2>
                            <h2 className={styles.porcent}>100%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.physicalProgress1}>
                                <h1 className={styles.physicalDash}>.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className={styles.biology}> Biologia </h2>
                <div className={styles.grid}>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Metabolismo </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.biologyProgress1}>
                                <h1 className={styles.biologyDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Genética </h2>
                            <h2 className={styles.porcent}> 80% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.biologyProgress2}>
                                <h1 className={styles.biologyDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Fisiologia Humana </h2>
                            <h2 className={styles.porcent}> 100% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.biologyProgress1}>
                                <h1 className={styles.biologyDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Saúde e Bem-Estar </h2>
                            <h2 className={styles.porcent}> 80% </h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.biologyProgress2}>
                                <h1 className={styles.biologyDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Evolução </h2>
                            <h2 className={styles.porcent}>60%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.biologyProgress3}>
                                <h1 className={styles.biologyDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Ecologia </h2>
                            <h2 className={styles.porcent}>80%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.biologyProgress2}>
                                <h1 className={styles.biologyDash}>.</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <h2 className={styles.field}> Diversidade </h2>
                            <h2 className={styles.porcent}>40%</h2>
                        </div>
                        <div className={styles.tab}>
                            <div className={styles.biologyProgress4}>
                                <h1 className={styles.biologyDash}>.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
 }

 export default Skills;