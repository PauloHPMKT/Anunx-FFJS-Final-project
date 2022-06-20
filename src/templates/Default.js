import Header from '../components/Header'

const Default = ({ children }) => {
    return(
        <>
            <Header />
            { children }
            <footer>Footer</footer>
        </>
    )
}

export default Default