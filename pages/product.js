import { Avatar, Box, CardHeader, CardMedia, Chip, Container, Grid, Typography, Card } from '@mui/material'
import { createUseStyles } from 'react-jss'
import Default from '../src/templates/Default'

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
  }
})

const Product = () => {
  const classes = useStyles()

  return(
    <Default>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sx={8}>
            <Box className={classes.box}>
              Carrocel
            </Box>
            <Box className={classes.box} textAlign="left">
              <Typography component="span" variant="caption">Publicado  16 Junho de 2021</Typography>
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
          <Grid item sx={4}>
            <Card elevation={0} className={classes.box}>
              <CardHeader 
                avatar={
                  <Avatar>T</Avatar>
                }
                title="Paulo Sergio"
                subheader="paulo@example.com"
              />
              <CardMedia 
                image="https://source.unsplash.com/ramdom"
                title="Paulo Sergio"
              />
            </Card>
            <Box className={classes.box}>
              <Typography component="h6" variant="h6">Localizacao</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Default>
  )
}

export default Product