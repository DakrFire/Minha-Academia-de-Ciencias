// import { MDXProvider } from '@mdx-js/react'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

import styles from "../styles/App.module.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossOrigin="anonymous" />
      </Head>
      <div className={styles.container}>
        <header>
          <Header />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default MyApp