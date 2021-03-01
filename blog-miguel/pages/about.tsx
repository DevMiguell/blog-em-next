import Layout from '../components/layout'
import Navigation from '../components/Navigation'
import Container from '../components/container'
import Head from 'next/head'

import styles from '../styles/components/Home.module.css'

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About Page</title>
        </Head>
        <Container>
          <Navigation />
          <header>
            <div className={styles.container}>
              <h2>Hello About page</h2>
            </div>
          </header>
        </Container>
      </Layout>
    </>
  )
}