import Header from 'components/article/header'
import Footer from 'components/article/footer'

const Layout = ({children}) => {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        
        </>
    )
}

export default Layout