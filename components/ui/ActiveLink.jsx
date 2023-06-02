import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const styles = {
    color: "#0070f3",
    textDecoration: "underline",
}

export const ActiveLink = ({ text, href }) => {

    const {asPath} = useRouter()

    return (
        <Link href={href}>
            <span style={ (asPath === href) ? styles : null }>{text}</span>
        </Link>
    )
}
