import Logo from 'components/parts/logo'
import Container from 'components/layout/container'
import styles from 'styles/footer.module.css'
import Social from 'components/social'
import Sitemap from 'components/sitemap'

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo />
                    <Sitemap />
                    <Social />
                </div>
            </Container>
        </footer>
    )
}

export default Footer