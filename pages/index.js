import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, InputBase, Paper, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import Default from "../src/templates/Default"
import { createUseStyles } from "react-jss";

import theme from "../src/theme";

const useStyles = createUseStyles({
  searchContainer: {
    padding: theme.spacing(8, 10, 6)
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20,
  },
  cardMedia: {
    paddingTop: '56%',
  }
})

const Home = () => {
  const classes = useStyles()

  return(
    <Default>
      <Container maxWidth="md" className={classes.searchContainer}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary">
          O que deseja encontrar?
        </Typography>
        <Paper className={classes.searchBox}>
          <InputBase 
            placeholder="Ex.: iPhone 12 com garantia"
            fullWidth
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Paper>
      </Container>

      <Container maxWidth="md" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
          Destaques
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
                title="Titulo da imagem"
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Default>
  )
}

export default Home