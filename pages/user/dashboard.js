import { 
  Button, 
  Container, 
  Grid, 
  Typography 
} from '@mui/material'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  buttonAdd: {
    margin: '30px auto',
    display: 'block'
  },
  cardMedia: {
    paddingTop: '56%',
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
        <Button variant="contained" color="primary">
          Publicar novo anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
              actions={
                <>
                  <Button size="small" color="primary">Editar</Button>
                  <Button size="small" color="primary">Remover</Button>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  )
}

export default Home