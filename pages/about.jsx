import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {MainLayout} from '../components/layouts'

export default function AboutPage() {
    return (
        <>
            <MainLayout>
                <div className={styles.description}>
                    <p>
                        ve a
                        <code className={styles.code}> <Link href={"/"}>/home</Link> </code>
                    </p>
                </div>
            </MainLayout>
        </>
    )
}
