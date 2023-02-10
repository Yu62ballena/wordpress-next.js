import Link from 'next/link'
import styles from 'styles/logo.module.css'
import logoImage from 'public/site-logo.png'
import Image from 'next/image'

const Logo = ({boxOn = false}) => {
    return (
        <Link href="/" className={boxOn ? styles.box : styles.basic}>
            <Image 
                src={logoImage}
                alt=""
                width={150}
                height={97.5}
                placeholder="blur"

            />
        </Link>
    )
}

export default Logo