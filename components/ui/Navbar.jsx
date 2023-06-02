import Link from 'next/link'
import React from 'react'
import stylesNav from '../../styles/Navbar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
    return (
        <nav className={stylesNav['nav-container']}>
            <ActiveLink text={"home"} href={"/"} />
            <ActiveLink text={"about"} href={"/about"} />
            <ActiveLink text={"contact"} href={"/contact"} />
        </nav>
    )
}
