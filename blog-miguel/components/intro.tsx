import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'
import Link from 'next/link'


const Intro = () => {
  return (
    <>
      <Link href="/">
        <div className=" my-auto  " >
          <Image
            src="/favicon/favicon.ico"
            alt="Picture of the author"
            width={40}
            height={40}
          />
        </div>
      </Link>
    </>
  )
}

export default Intro
