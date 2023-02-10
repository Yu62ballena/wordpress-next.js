import Image from 'next/image'
import styles from 'styles/eyecatch.module.css'
import eyecatch from 'public/top-eyecatch.jpg'

const Eyecatch = ({pageTitle, imageOn = false}) => {
    return (
        <div className={styles.centered}>
            {imageOn && (
                <figure style={{width: "50vw", margin: "auto" }}>
                <Image 
                    src={eyecatch}
                    alt="アイキャッチ画像"
                    layout="responsive"
                    sizes="(min-width: 1000px) 1000px, 50vw"
                    width={1280}
                    height={1000}
                    placeholder="blur"
                    style={{ transition: ' 0.3s' }}
                />
            </figure>
            )}
            <p className={styles.pageTitle}>{pageTitle}</p>
        </div>

    )
}

export default Eyecatch