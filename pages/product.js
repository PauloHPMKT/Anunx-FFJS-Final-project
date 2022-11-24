import { Avatar, 
  Box, 
  CardHeader, 
  CardMedia, 
  Chip, 
  Container, 
  Grid, 
  Typography, 
  Card 
} from '@mui/material'
import { createUseStyles } from 'react-jss'
import Default from '../src/templates/Default'
import Carousel from 'react-material-ui-carousel'

import theme from '../src/theme'

const useStyles = createUseStyles({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3), 
  },

  productName: {
    margin: '15px 0',
  },

  productPrice: {
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    height: '100%',
  },

  cardMedia: {
    paddingTop: '56%',
  }
})

const Product = () => {
  const classes = useStyles()

  return(
    <Default>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box className={classes.box}>
            <Carousel 
              autoPlay={false}
              navButtonsAlwaysInvisible
              animation="slide"
              navButtonsProps={{
                style: {
                  color: 'white',
                  borderRadius: 0,
                }
              }}  
            >
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/ramdom?a=1"
                  title="Titulo da Imagem"
                />
              </Card>
              <Card className={classes.card}>
                <CardMedia 
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/ramdom?a=3"
                  title="Titulo da Imagem"
                />
              </Card>
            </Carousel>
            </Box>
            <Box className={classes.box} textAlign="left"> 
              <Typography component="span" variant="caption">Publicado  16 Junho de 2022</Typography>
              <Typography component="h4" variant="h4" className={classes.productName}>Jaguar XE 2.0 R-Sport Aut.</Typography>
              <Typography component="h4" variant="h4" className={classes.productPrice}>R$ 50.000,00</Typography>
              <Chip label="Categoria" />
            </Box>
            <Box className={classes.box} textAlign="left"> 
              <Typography component="h6" variant="h6">Descricao</Typography>
              <Typography component="p" variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader 
                avatar={
                  <Avatar>P</Avatar>
                }
                title="Paulo Sérgio"
                subheader="pauloserg861@gmail.com"
              />
              <CardMedia 
                image="https://source.unsplash.com/ramdom"
                title="Paulo Sérgio"
              />
            </Card>

            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Localicazao
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Default>
  )
}

export default Product