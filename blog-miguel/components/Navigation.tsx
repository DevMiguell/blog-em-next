import { ReactNode } from 'react'
import { useRouter } from 'next/router';
import Intro from "../components/intro"
import Link from 'next/link';

import styles from '../styles/components/Navigation.module.css'

const LINKS = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
]

type NavAnchor = {
  path: string,
  children: ReactNode
}

function NavAnchor({ path, children }: NavAnchor) {
  return (
    <Link href={path}>
      <a>{children}</a>
    </Link>
  )
}

export default function Navigation() {
  const { pathname } = useRouter()

  return (
    <nav className={styles.list}>
      <Intro />
      <ul>
        {LINKS.map(({ name, path }) => (
          <li className={styles.navAnchor} key={path}>
            {path === pathname ? <span>{name}</span>
              : <NavAnchor path={path}>{name}</NavAnchor>}
          </li>
        ))}
      </ul>
    </nav>
  )
}