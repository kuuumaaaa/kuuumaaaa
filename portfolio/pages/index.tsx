import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Layout from '../components/layout'
import About from '../components/about'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1> Portfolio</h1>
        < About />  
      </main>
    </Layout>
  )
}

export default Home
