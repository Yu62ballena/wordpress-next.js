import styles from 'styles/menuLinkBar.module.css'
import { useState } from 'react'
import Link from 'next/link'

const MenuLinkBar = () => {
    const [navIsOpen, setNavIsOpen] = useState(false)
    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }
    const closeNav = () => {
        setNavIsOpen(false)
    }


    return (
        
        <nav className={navIsOpen ? styles.open : styles.close}>
                {navIsOpen && (<style jsx global> {`
                    body{
                        overflow: hidden;
                        position: fixed;
                        width: 100%;
                    }
                `}</style>)}
            <button className={styles.btn} onClick={toggleNav}>
                <span className={styles.bar}></span>
                <span className="sr-only">MENU</span>
            </button>

            <ul className={styles.list} onClick={closeNav}>
                <li> 
                    <Link href="/" className={styles.anchor} onClick={closeNav}>
                        <div>
                            <p>Home</p>
                            <p>ホーム</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="about" className={styles.anchor} onClick={closeNav}>
                        <div>
                            <p>About me</p>
                            <p>サイトについて</p>
                        </div>
                        
                    </Link>
                </li>
                <li>
                    <Link href="blog" className={styles.anchor} onClick={closeNav}>
                        <div>
                            <p>Blog</p>
                            <p>記事一覧</p>
                        </div>
                    </Link>
                </li>
                <li>
                <Link href="contact" className={styles.anchor} onClick={closeNav}>
                    <div>
                        <p>Contact</p>
                        <p>お問い合わせ</p>
                    </div>
                </Link>
                </li>
                
            </ul>
        </nav>

        
    )
}

export default MenuLinkBar
