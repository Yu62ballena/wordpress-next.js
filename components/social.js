import styles from 'styles/social.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons'

const Social = ({ iconSize = 'initial'}) => {
    return (

        <ul className={styles.list} style={{ '--iconSize': iconSize}}>
            <li>
                <Link href="https://twitter.com/wp_next_builder">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span className="sr-only">Twitter</span>
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/yu62ballena/?hl=ja">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className="sr-only">Facebook</span>
                </Link>
            </li>
            <li>
                <Link href="https://github.com/Yu62ballena?tab=repositories">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className="sr-only">GitHub</span>
                </Link>
            </li>
        </ul>

    )
}

export default Social