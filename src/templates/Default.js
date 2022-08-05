import Footer from '../components/Footer'
import Header from '../components/Header'

const Default = ({ children }) => {
    return(
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default Default