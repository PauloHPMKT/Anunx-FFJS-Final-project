import { Box, Button, Container, IconButton, Select, TextField, Typography } from '@mui/material'
import { DeleteForever } from '@mui/icons-material';
import TemplateDefault from '../../src/templates/Default'
import { createUseStyles } from 'react-jss'
import theme from '../../src/theme'

const useStyles = createUseStyles({
  mask: {},
  mainImage: {},
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  boxContainer: {
    paddingBottom: theme.spacing(3),
  },
  thumbsContainer: {
    display: 'flex',
    marginTop: 15,
  },
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '10px',
    margin: '0 15px 15px 0',
    width: 200,
    height: 150,
    backgroundColor: theme.palette.background.default,
    border: '2px dashed black'
  },
  thumb: {
    width: 200,
    height: 150,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    position: 'relative',

    '& $mainImage': {
      backgroundColor: 'red',
      padding: '6px 10px',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },

    '&:hover $mask': {
      display: 'flex'
    },
    
    '& $mask': {
      display: 'none',
      backgroundColor: 'rgba(0,0,0,0.7)',
      height:'100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    }
  }
})


const Publish = () => {
const classes = useStyles()

  return(
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h2" component="h1" align="center" color="textPrimary">
          Publicar Anúncio
        </Typography>
        <Typography variant="h5" component="h5" align="center" color="textPrimary">
          Quanto mais detalhado, melhor!
        </Typography>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
            Título do Anúncio
          </Typography>
          <TextField 
            label="Ex: Bicicleta Aro 18 c/ Garantia"
            size="small"
            fullWidth
          />
          <br/><br/>
          <Typography variant="h6" component="h6" color="textPrimary">
            Categoria
          </Typography>
          <Select
            native
            value=""
            fullWidth
            //onChange={handleChangeCategory}
            inputProps={{
              name: 'age',
            }}
          >
            <option value="">Selecionar</option>
            <option value="1">Bebe e Crianca</option>
            <option value="2">Agricultura</option>
            <option value="3">Moda</option>
            <option value="3">Carros, Motos e Barcos</option>
            <option value="3">Servicos</option>
            <option value="3">Lazer</option>
            <option value="3">Animais</option>
            <option value="3">Móveis, Casa e Jardim</option>
            <option value="3">Imóveis</option>
            <option value="3">Equipamentos e Ferramentas</option>
            <option value="3">Celulares e Tablets</option>
            <option value="3">Esporte</option>
            <option value="3">tecnologia</option>
            <option value="3">Emprego</option>
            <option value="3">Outros</option>
          </Select>

        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
            Imagem
          </Typography>
          <Typography variant="div" component="body2" color="textPrimary">
            A primeira imagem é a foto principal do seu anúncio
          </Typography>   
          <Box className={classes.thumbsContainer}>
            <Box className={classes.dropzone}>
              <Typography variant="body2" color="textPrimary">
                Clique para adicionar ou arraste a imagem para aquui.
              </Typography>
            </Box>
            <Box 
              className={classes.thumb}
              style={{ backgroundImage: 'url(https://m.media-amazon.com/images/I/619QaGrReCL._AC_SY450_.jpg)' }}
            >
              <Box className={classes.mainImage}>
                <Typography variant='body2' color="secondary">
                  Principal
                </Typography>
              </Box>
              <Box className={classes.mask}>
                <IconButton color="secondary" >
                  <DeleteForever fontSize='large'/>
                </IconButton>
              </Box>
            </Box>
          </Box> 
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary">
            Descricao
          </Typography>
          <Typography variant="div" component="body2" color="textPrimary">
            Escreva os detalhes do que esta vendendo
          </Typography>   
          <TextField 
            multiline
            rows={6} //line height
            variant="outlined"
            fullWidth
          /> 
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}>
        <Box className={classes.box}>
          <Typography variant="h6" component="h6" color="textPrimary" gutterBottom>
            Dados de contato
          </Typography>
          <TextField 
            label="Nome"
            variant="outlined"
            size="small"
            fullWidth
          /> 
          <br/><br/>
          <TextField 
            label="E-mail"
            variant="outlined"
            size="small"
            fullWidth
          /> 
          <br/><br/>
          <TextField 
            label="Telefone"
            variant="outlined"
            size="small"
            fullWidth
          /> 
        </Box>
      </Container>

      <Container maxWidth="md" className={classes.boxContainer}> 
        <Box textAlign="right">
          <Button variant="contained" color="primary">Publicar Anúncio</Button>
        </Box>
      </Container>
    </TemplateDefault>
  )
}

export default Publish