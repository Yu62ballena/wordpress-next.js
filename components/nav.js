import Link from 'next/link'
import styles from 'styles/nav.module.css'

const Nav = () => {

    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href="/" className={styles.anchor}>
                        <div>
                            <p>Home</p>
                            <p>ホーム</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="about" className={styles.anchor}>
                        <div>
                            <p>About me</p>
                            <p>サイトについて</p>
                        </div>
                        
                    </Link>
                </li>
                <li>
                    <Link href="blog" className={styles.anchor}>
                        <div>
                            <p>Blog</p>
                            <p>記事一覧</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="contact" className={styles.anchor}>
                        <div>
                            <p>Contact</p>
                            <p>お問い合わせ</p>
                        </div>
                    </Link>
                </li>
                {/* <li>
                    <Link href="codeTest" className={styles.anchor}>
                        <div>
                            <p>CodeTest</p>
                            <p>テスト</p>
                        </div>
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Nav