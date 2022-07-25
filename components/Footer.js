import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "../styles/Footer.module.css"

const Footer = () => {

    return (
        <>
            <div className={styles.container}>
                <div>
                    <Image
                        src="/python-variables-thumbnail.jpeg"
                        className={styles.image}
                        alt="thumbnail"
                        width={200}
                        height={100}
                        objectFit="cover"
                    />
                    <ul className={styles.list}>
                        <li>
                            Minha Academia de Ciências - 2022
                        </li>
                        <li>
                            Todos os direitos reservados
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.list}>
                        <li className={styles.title}>
                            <Link href="/">
                                <a> Programas </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/index">
                                <a> Blog </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/maciencias/">
                                <a> Instagram </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/channel/UCMkOEK_jNLm--xvzeOZZ9WA">
                                <a> Youtube </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.list}>
                        <li className={styles.title}>
                            <Link href="/about">
                                <a> Sobre </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a onClick={()=>{
                                alert("Página em construção, qualquer dúvida me um email para minhaacademiadeciencias@outlook.com")
                            }}> Direitos Autorais </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a onClick={()=>{
                                alert("Página em construção, qualquer dúvida me um email para minhaacademiadeciencias@outlook.com")
                            }}> Termos de Uso </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <a onClick={()=>{
                                alert("Página em construção, qualquer dúvida me um email para minhaacademiadeciencias@outlook.com")
                            }}> Politícas de Privacidade </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={styles.list}>
                        <li className={styles.title}>
                            <Link href="">
                                <a> Dúvidas </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" >
                                <a onClick={()=>{
                                alert("Página em construção, qualquer dúvida me um email para minhaacademiadeciencias@outlook.com")
                            }}> Perguntas Frequentes </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a onClick={()=>{
                                alert("Página em construção, qualquer dúvida me um email para minhaacademiadeciencias@outlook.com")
                            }}> Central de Ajuda </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a onClick={()=>{
                                alert("Página em construção, qualquer dúvida me um email para minhaacademiadeciencias@outlook.com")
                            }}> Encontrou algum erro? </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;