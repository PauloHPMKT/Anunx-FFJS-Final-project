import { Box } from '@mui/system'
import { createUseStyles } from 'react-jss'
import Footer from '../components/Footer'
import Header from '../components/Header'

import theme from '../theme'

const useStyles = createUseStyles({
  container: {
    padding: theme.spacing(6, 0, 6)
  }
})

const Default = ({ children }) => {
  const classes = useStyles()

  return(
    <>
      <Header />
      <Box className={classes.container}>
        { children }
      </Box>
      <Footer />
    </>
  )
}

export default Default