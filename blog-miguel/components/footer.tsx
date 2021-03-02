import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="border-t ">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center  ">
          <h3 className=" text-1xl font-bold tracking-tighter leading-tight text-center lg:mb-0">
            © 2021 Blog do Miguel 💻
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
