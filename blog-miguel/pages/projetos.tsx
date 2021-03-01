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
          <title>Projetos</title>
        </Head>
        <Container>
          <Navigation />
          <header className="flex justify-center flex-col text-center">
            <Image
              src="/favicon/logo-svg.svg"
              alt="Picture of the author"
              width={50}
              height={50}
              quality={100}
            />
            <h1 className=" my-4 text-5xl ">Pagina de Progetos em breve</h1>
          </header>
        </Container>
      </Layout>
    </>
  )
}