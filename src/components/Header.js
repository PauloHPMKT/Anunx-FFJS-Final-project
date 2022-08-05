import * as React from 'react';
import { useState } from 'react'
import Link from 'next/link';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material'
import { Container } from '@mui/system';
import { AccountCircle } from '@mui/icons-material';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  userName: {
    marginLeft: '6px'
  },
  divider: {
    margin: '8px 0'
  }
})

export default function ButtonAppBar() {
  const classes = useStyles()

  const [anchorUserMenu, setAnchorUseMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)
  
  return (
    <AppBar position="static" elevation={3}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Anunx
          </Typography>
          <Link href="/user/publish" passHref>
            <Button color="inherit" variant="outlined">
              Anunciar e Vender
            </Button>
          </Link>
          <IconButton color="secondary" onClick={(e) => setAnchorUseMenu(e.currentTarget)}>
            {
              true === false
                ? <Avatar src="" />
                : <AccountCircle />
            }
            <Typography variant="subtitle2" color="secondary" className={classes.userName}>
              Paulo Sérgio
            </Typography>
          </IconButton>
          
          <Menu
            anchorEl={anchorUserMenu}
            open={openUserMenu}
            onClose={() => setAnchorUseMenu(null)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Link href="/user/dashboard" passHref>
              <MenuItem>Meus anúncios</MenuItem>
            </Link>
            <Link href="/user/publish" passHref> 
              <MenuItem>Publicar novo anúncio</MenuItem>
            </Link>
            <Divider className={classes.divider}/>
            <MenuItem>Sair</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}