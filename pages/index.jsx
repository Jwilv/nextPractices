import Link from 'next/link'
import { MainLayout } from '../components/layouts'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.description}>
        <p>
          ve a
          <code className={styles.code}><Link href={"/about"}>about</Link></code>
        </p>
      </div>
    </MainLayout>
  )
}
