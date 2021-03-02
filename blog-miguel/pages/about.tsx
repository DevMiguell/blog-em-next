import { FaDribbble, FaGithub, FaInstagram } from 'react-icons/fa'

import Image from 'next/image'
import Head from 'next/head'

import Layout from '../components/layout'
import Navigation from '../components/Navigation'
import Container from '../components/container'


export default function About() {
  return (
    <Layout>
      <Head>
        <title>Sobre</title>
      </Head>

      <Container>
        <Navigation />

        <header className="flex justify-center flex-col text-center  items-center mt-16">
          <Image src="/favicon/logo-svg.svg" alt="Picture of the author" width={200} height={200} />

          <h1 className=" mt-6 mb-2 text-4xl tracking-wider ">Dev Miguel</h1>

          <section className="text-gray-400 items-center flex flex-col">
            <p>Desenvolvedor FrontEnd na empresa DevSP</p>

            <div className="my-6 text-4xl flex">
              <a href="https://github.com/DevMiguell" target="_blank" className="mx-2 hover:text-white duration-300">
                <FaGithub />
              </a>

              <a href="https://dribbble.com/MiguelSants" target="_blank" className="mx-2 hover:text-white duration-300">
                <FaDribbble />
              </a>

              <a href="https://www.instagram.com/faby_guerreiro/?hl=pt-br" target="_blank" className="mx-2 hover:text-white duration-300">
                <FaInstagram />
              </a>
            </div>
          </section>
        </header>
      </Container>
    </Layout>
  )
}