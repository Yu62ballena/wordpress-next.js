import styles from 'styles/author.module.css'
import Image from 'next/image'
import SidebarTitle from 'components/sidebarTItle'
import Social from 'components/social'

const Author = ({authorName, authorDesc, authorAvatar}) => {

    return (
        <div className={styles.authorWrapper}>
            <SidebarTitle
                title="こんな人が書いています"
            />

            <div className={styles.main}>
                <Image className={styles.avater}
                    src={authorAvatar.url}
                    width={authorAvatar.width}
                    height={authorAvatar.height}
                    alt=""
                    layout="intrinsic"
                    sizes="(min-width: 100px) 100px, 50vw"
                />
                <p className={styles.authorName}>{authorName}</p>

                <p className={styles.description}>
                    {/* {authorDesc} */}
                    Next.jsとWordpressを組み合わせたサイト作りについて解説しています。<br /><br />
                    Next.jsの基礎からAPIの叩き方、Wordpressの連携方法まで初心者でもわかりやすいよう、徹底的に説明していきます。
                </p>
            
                <Social className={styles.social} />
            </div>
            
            
            
        </div>
    )
}

export default Author

