import Link from 'next/link'
import React from 'react'
import stylesNav from '../../styles/Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={stylesNav['nav-container']}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>about</Link>
            <Link href={"/contact"}>contact</Link>
        </nav>
    )
}
