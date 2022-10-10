import { 
  Card as CardMui, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography,
} from '@mui/material'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  cardMedia: {
    paddingTop: '56%',
  }
})

const Card = ({ image, title, subtitle, actions }) => {
  const classes = useStyles()

  return(
    <CardMui>
      <CardMedia 
        className={classes.cardMedia}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </CardContent>
      {
        actions
        ? (
          <CardActions>
            {actions}
          </CardActions>
        ) : null
      }
    </CardMui>
  )
}

export default Card