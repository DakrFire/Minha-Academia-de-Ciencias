import React from "react";

import styles from '../../styles/about/Testimonials.module.css'

const Testimonials = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}> O que as pessoas estão falando <br/>sobre nós </h1>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Ryan Cavalcanti </h4>
                    <p className={styles.comment}>
                        Minha história chega ser um pouco engraçada kkkkk, conheci a MAC a partir de um vídeo de 
                        Aplicações que estava ligado com meu trabalho, porém não gostava nem um pouco de estudar 
                        qualquer área científica, mas quando vi esse vídeo me interessei bastante pelo assunto e 
                        comecei a pesquisar mais sobre e quando vi, já tinha assistido um monte vídeos, onde um 
                        completava o outro, me senti uma pessoa maratonando uma série de televisão, só que aprendendo 
                        mais e mais com o passar dos vídeos, que sensação incrível, só tenho a agradecer MAC.
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Diogo Castro </h4>
                    <p className={styles.comment}>
                    Química sempre foi um problema para mim, nunca entendi nada do que estava acontecendo, de onde vinha 
                    aqueles valores gigantescos e como eram feitos aqueles cálculos estequiométricos kkkkkkk, mas quando 
                    conheci a MAC pelo youtube, peguei desde o começo e finalmente entendi como que a matéria estava se 
                    comportando. Não estou completamente confiante, mas vejo que melhorei bastante e espero continuar 
                    evoluindo cada vez mais.
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Gustavo da Paz </h4>
                    <p className={styles.comment}>
                    Meu pavor do ensino médio é matemático, pois eu não entendia como essa matéria funciona, porém quando 
                    comecei a assistir os vídeos da MAC entendi como realmente as coisas estavam funcionando, agora, não 
                    preciso mais decorar as fórmulas ou exercícios, consigo usar meu raciocínio e resolver qualquer questão 
                    que esteja a altura de meus conhecimentos.
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Bianca Lima </h4>
                    <p className={styles.comment}>
                    Acho demais o modo como a MAC explica os conteúdos sem deixar qualquer lacuna solta e quando deixam, 
                    sempre colocam algo na descrição que contempla o conteúdo que não foi falado. Demonstram todas as fórmulas,
                    explicam para que elas servem, quando e onde usar, acho que nunca vi nada assim antes.
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Valentina Moura </h4>
                    <p className={styles.comment}>
                    Nunca vi uma didática como a da MAC, acho simplesmente incrível o modo como são organizados os 
                    conteúdos e como são explicados, fazendo com que a gente perceba como tudo está conectado e relacionado. 
                    Parabéns a toda equipe.
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Pietra Freitas </h4>
                    <p className={styles.comment}>
                    Tive um ano difícil e bastante conturbado devido a pressão causada pelo vestibular, porém com 
                    as aulas distribuídas pela MAC consegui absorver bastante conteúdo de todas as áreas de exatas.
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Pedro Lucas Vieira </h4>
                    <p className={styles.comment}>
                    Cara, sério, parabéns pelo conteúdo de qualidade que vocês estão distribuindo de cara para a população brasileira, 
                    espero que continuem assim, pois estou achando massa demais.
                    </p>
                </div>
                <div className={styles.card}>
                    <h4 className={styles.avatar}> Letícia Peixoto </h4>
                    <p className={styles.comment}>
                    Os exercícios propostos pela MAC são muito importantes, pois eles ajudam você a fixar todo conteúdo abordado 
                    nas aulas, adorei essa parte.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;