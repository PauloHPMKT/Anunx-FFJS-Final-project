import { Grid, IconButton, InputBase, Paper, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import SearchIcon from '@mui/icons-material/Search';
import Default from "../src/templates/Default"
import Card from '../src/components/Card'

import { createUseStyles } from "react-jss";

import theme from "../src/theme";

const useStyles = createUseStyles({
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    marginTop: 20,
  },

  cardGrid: {
    margiTop: 50, 
  }
})

const Home = () => {
  const classes = useStyles()

  return(
    <Default>
      <Container maxWidth="md">
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

      <Container maxWidth="lg" className={classes.cardGrid}>
        <Typography component="h2" variant="h4" align="center" color="textPrimary">
          Destaques
        </Typography>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card 
              image={'https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg'}
              title={'produtoX'}
              subtitle={'R$ 60,00'}
            />
          </Grid>
        </Grid>
      </Container>
    </Default>
  )
}

export default Home