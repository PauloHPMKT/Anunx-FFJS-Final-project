import { 
  Button, 
  Container, 
  Typography 
} from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import theme from '../../src/theme'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  buttonAdd: {
    margin: '30px auto',
    display: 'block'
  }
})

const Home = () => {
  const classes = useStyles()

  return(
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center">
          Meus Anúncios
        </Typography>
        <Button variant="contained" color="primary" className={classes.buttonAdd}>
          Publicar novo anúncio
        </Button>
      </Container>
    </TemplateDefault>
  )
}

export default Home