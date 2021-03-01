import Layout from '../components/layout'
import Navigation from '../components/Navigation'
import Container from '../components/container'
import Head from 'next/head'
import Image from 'next/image'


export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>Sobre</title>
        </Head>
        <Container>
          <Navigation />
          <header className="flex justify-center flex-col text-center  items-center mt-16">
            <img className="w-48 rounded-full" src="https://github.com/DevMiguell.png" alt="Miguel Santos" />
            <h1 className=" my-4 text-4xl ">DevMiguel</h1>
          </header>
        </Container>
      </Layout>
    </>
  )
}