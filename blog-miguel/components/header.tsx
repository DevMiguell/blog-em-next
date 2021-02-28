import Link from 'next/link'
import style from '../styles/components/Home.module.css'

const Header = () => {
  return (
    <h2 className={style.arrow}>
      <Link href="/">
        <a className={style.link}>ᐊ</a>
      </Link>
    </h2>
  )
}

export default Header
