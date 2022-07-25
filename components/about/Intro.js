import Link from "next/link";
import React from "react";

import styles from '../../styles/about/Intro.module.css'

const Intro = () => {

    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}> Minha Academia <br/>de Ciências </h1>
                <h1 className={styles.scienceSchool}> Science School </h1>
                <p className={styles.description}>
                Somos uma empresa voltada a distribuição de conteúdos científicos em matemática, física, química e biologia
                com a finalidade de auxiliar o máximo de pessoas possíveis a entender como funciona o mundo em que vivemos, 
                dando assim um sentido aos principais fenômenos que acontecem diariamente ao nosso redor. Além disso, auxiliamos 
                na sua caminhada estudantil, explicando desde conceitos básicos até avançados de forma simples e eficaz, podendo 
                dessa forma, ajudar nos estudos para concursos e vestibulares.
                </p>
                <Link href="/">
                    <a className={styles.button}>
                        Veja Mais
                    </a>
                </Link>
            </div>
            <div>
                <h1 className={styles.mac}>MAC</h1>
            </div>
        </div>
    )
}

export default Intro;