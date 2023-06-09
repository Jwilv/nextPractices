import React from 'react'
import stylesNav from '../../styles/Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={stylesNav['nav-container']}>
            {
                menuItems.map( ({text, href}) => {
                    return <ActiveLink key={href} text={text} href={href} />
                })
            }
        </nav>
    )
}
