import Link from "next/link";
import React from "react";

import styles from "../styles/Header.module.css"

const Header = () => {

  return (
        <div className={styles.container}>
          <Link href="/">
            <a>
              <h1 className={styles.mac}> MAC </h1>
            </a>
          </Link>
          
          <ul className={styles.list}>
            <li>
              <Link href="/">
                <a> Blog </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a> Sobre </a>
              </Link>
            </li>
          </ul>
        </div>
  )
}

export default Header;