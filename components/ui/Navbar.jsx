import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <>
    <ul>
        <li> <Link href={"/"}>Home</Link> </li>
        <li> <Link href={"/about"}>about</Link> </li>
        <li> <Link href={"/contact"}>contact</Link> </li>
    </ul>
    </>
  )
}
