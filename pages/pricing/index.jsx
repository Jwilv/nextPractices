import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../../components/layouts'

export default function Pricing() {
    return (
        <>
            <div className={styles.description}>
                <p>
                    ve a
                    <code className={styles.code}> <Link href={"/"}>/home</Link> </code>
                </p>
            </div>
        </>
    )
}

Pricing.getLayaout = function (page) {

    return (
        <MainLayout >
            {page}
        </MainLayout>
    )
}
