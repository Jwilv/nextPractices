import Link from 'next/link'
import React from 'react'

const styles = {
    color: "#0070f3",
    textDecoration: "underline",
}

export const ActiveLink = ({ text, href }) => {
    return (
        <Link href={href}>
            <span style={styles}>{text}</span>
        </Link>
    )
}
