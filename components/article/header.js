import Logo from "components/parts/logo"
import Nav from 'components/nav'
import Container from 'components/layout/container'
import styles from 'styles/header.module.css'
import MenuLinkBar from 'components/menuLinkBar'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <Container large>
                    <div className={styles.flexContainer}>                    
                        <div className={styles.flexContainer}>
                            <Logo 
                                boxOn
                            />
                            <Nav />
                        </div>
                        <MenuLinkBar />
                    </div>

                </Container>
            </header>
        </>
    )
}

export default Header