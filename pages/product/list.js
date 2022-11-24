import Default from "../../src/templates/Default"
import { Box, Typography, IconButton, InputBase, Paper, Container, Grid } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import Card from '../../src/components/Card'
import theme from '../../src/theme'

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    marginBottom: 20,
  }
})

const List = () => {
  const classes = useStyles()
  return(
    <Default>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper component="form" className={classes.searchBox}>
              <InputBase 
                placeholder="Ex: iPhone XS Max com garantia"
                fullWidth
              />
              <IconButton type="submit" arial-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={22} size={12} nd={22}>
            <Box className={classes.box}>
              <Typography component="h6" variant="h6">
                Anúncios
              </Typography>
              <Typography component="subtitle2" variant="span">
                Anúncios
              </Typography>
              <br/><br/>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card 
                    image={`https://source.unsplash.com/random?a=1`}
                    title="Produto X"
                    subtitle="R$ 69,00"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card 
                    image={`https://source.unsplash.com/random?a=1`}
                    title="Produto X"
                    subtitle="R$ 69,00"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card 
                    image={`https://source.unsplash.com/random?a=1`}
                    title="Produto X"
                    subtitle="R$ 69,00"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Default>
  )
}

export default List