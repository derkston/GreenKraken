"use client"
import Link from 'next/link'
import style from './Navigation.module.css'
import { usePathname } from 'next/navigation'

export default function Navigation(){
    const pathname = usePathname()
    return <nav className={style.nav}>
        <Link
         className={pathname == '/' ? 'active' : ''}
         href='/'
         >
        Главная</Link>
        <Link
         className={pathname == '/Contact' ? 'active' : ''}
          href='/Contact'
         >
        Контакты</Link>
        <Link
         className={pathname == '/Catalog' ? 'active' : ''}
          href='/Catalog'
         >
        Каталог</Link>
        <Link
         className={pathname == '/About' ? 'active' : ''}
          href='/About'
         >
        О нас</Link>
    </nav>
}
