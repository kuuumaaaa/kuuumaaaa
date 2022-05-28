import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function navbar(){
    return (
        <nav className={styles.headerNav}>
        <Link href="/">
            <a>
                Works
            </a>
        </Link>
        <Link href="/about">
            <a>
                About
            </a>
        </Link>
        <Link href="/contact">
            <a>
                Contact
            </a>
        </Link>
        </nav>
    )
}


