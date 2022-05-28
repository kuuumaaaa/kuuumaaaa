import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'

import styles from '../styles/Home.module.css'


export default function layout ({ children }) {
    return (
        <div className={styles.container}>
            <Head>
            <title>Portfolio</title>
            <meta name="description" content="kuma portfolio" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <p>
                    Kuma Portfolio
                </p>
                {/* <Navbar /> */}
            </header>


            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>

    )
}