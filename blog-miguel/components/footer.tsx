import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-5 flex flex-col lg:flex-row items-center">
          <h3 className=" lg:text-3xl font-bold tracking-tighter leading-tight text-center lg:mb-0">
            Statically Generated with Next.js.
          </h3>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
