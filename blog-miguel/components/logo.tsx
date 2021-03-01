import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'
import Link from 'next/link'


const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="my-auto cursor-pointer flex" >
          <Image
            src="/favicon/logo-svg.svg"
            alt="Picture of the author"
            width={50}
            height={50}
            quality={100}
          />
        </div>
      </Link>
    </>
  )
}

export default Logo
