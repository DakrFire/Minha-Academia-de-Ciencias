import React from "react";
import Link from "next/link"
import Image from "next/image";

import styles from '../../styles/about/Products.module.css'

const Products = () => {

    return (
        <div>
            <h1 className={styles.title}> Nosso E-book </h1>
            <div className={styles.container}>
                <Image
                    src='/Livro-3D.png'
                    alt="thumbnail"
                    width={400}
                    height={700}
                    objectFit="cover"
                />
                <div className={styles.box}>
                    <p className={styles.description}>
                     Ao adquirir esse e-book, você finalmente entenderá a grande maioria dos assuntos básicos relacionados
                     a química, para que assim você possa posteriormente se aprofundar em conceitos mais avançados, ou 
                     ainda integra-los a outras áreas do conhecimento, como biologia e física por exemplo. Além disso, 
                     esse e-book também foi pensado para quem presta vestibular, pois nele é possível encontrar conteúdos 
                     que aparecerem direto em provas e vestibular como ENEM, FUVEST e até mesmo o ITA. Porém o mais importante 
                     é o método empregado no desenvolvimento desse produto, pois ao lê-lo, você saberá capaz de entender de onde 
                     está vindo todos os conceitos básicos e como eles estão interligados entre si.
                    </p>
                    
                    <Link href="https://go.hotmart.com/G60395985Y?dp=1">
                        <a className={styles.button}>
                            Saiba Mais
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Products;