import { ReactNode } from 'react'
import { useRouter } from 'next/router';
import Logo from "../components/logo"
import Link from 'next/link';


const LINKS = [
  {
    name: 'Início',
    path: '/'
  },
  {
    name: 'Sobre',
    path: '/about'
  },
  {
    name: 'Projetos',
    path: 'https://github.com/DevMiguell?tab=repositories'
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
    <>
      <nav className="flex flex-row justify-between py-4  ">
        <Logo />
        <ul className="flex items-center ">
          {LINKS.map(({ name, path }) => (
            <li className="mr-10 p-4 text-lg  hover:text-white text-white cursor-default tracking-widest" key={path}>
              {path === pathname ? <span>{name}</span>
                : <a className="text-gray-400 hover:text-white duration-300"><NavAnchor path={path}>{name}</NavAnchor></a>}
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}