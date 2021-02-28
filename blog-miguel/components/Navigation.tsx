import { ReactNode } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/components/Navigation.module.css'

const LINKS = [
  {
    name: '💻TipsWeb',
    path: '/'
  },
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
      <a className={styles.navAnchor}>{children}</a>
    </Link>
  )
}

export default function Navigation() {
  const { pathname } = useRouter()

  return (
    <nav>
      <ul className={styles.list}>
        {LINKS.map(({ name, path }) => (
          <li key={path}>
            {path === pathname ? <span>{name}</span>
              : <NavAnchor path={path}>{name}</NavAnchor>}
          </li>
        ))}
      </ul>
    </nav>
  )
}