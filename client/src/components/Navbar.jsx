import {
  AppBar,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { navLinks } from '../utils'
import { Link, useHistory } from 'react-router-dom'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import noAvatar from '../assets/img/no-avatar.png'
import UserInfo from './UserInfo'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary,
  },
  logo: {
    height: '2rem',
  },
  links: {
    flexGrow: 1,
    textTransform: 'capitalize',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    padding: theme.spacing(2),
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  btns: {
    display: 'block',
  },
  btn1: {
    margin: '0 13px',
    '&:hover': {
      backgroundColor: 'white',
      color: theme.palette.primary,
    },
  },
  btn2: {
    backgroundColor: theme.palette.primary,
    color: 'white',
    border: '1px solid white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'orange',
      border: '1px solid orange',
    },
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  Sidebar: {
    // width: '80%',
    maxWidth: 250,
    width: 250,
  },
  sidebarItem: {
    fontSize: '1.3rem',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#5555',
    },
  },
}))

export const Navbar = () => {
  const User = useSelector((state) => state.user.user)

  const classes = useStyles()
  const [Open, setOpen] = useState(false)
  const history = useHistory()

  const handleNavigate = (navigate) => {
    history.push('/' + navigate)
  }
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Container
            maxWidth='md'
            style={{ display: 'flex', alignItems: 'center', padding: '4px 0' }}
          >
            <Link style={{ flexGrow: 1 }} to='/'>
              <img
                src='https://assets-production.bzzgl.com/assets/frontend/bz/logo-a1576ddfd581207281414c6f189bd95cc7d80e87d75be2c841160e159f804903.svg'
                alt='logo-band'
                className={classes.logo}
              />
            </Link>
            <div className={classes.links}>
              {navLinks.map((item, index) => (
                <Link key={index} className={classes.link} to={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
            {User ? (
              <UserInfo User={User} noAvatar={noAvatar} />
            ) : (
              <div className={classes.btns}>
                <Button
                  color='secondary'
                  variant='contained'
                  className={classes.btn1}
                  onClick={() => handleNavigate('try-it-free')}
                >
                  try it free
                </Button>
                <span>
                  <Button
                    variant='outlined'
                    className={classes.btn2}
                    onClick={() => handleNavigate('sign-in')}
                  >
                    sign in
                  </Button>
                </span>
              </div>
            )}
            <IconButton
              edge='end'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor='right' open={Open} onClose={() => setOpen(false)}>
              <List className={classes.Sidebar}>
                {navLinks.map((item, index) => (
                  <ListItem className={classes.sidebarItem}>
                    <Link
                      key={index}
                      to={item.link}
                      onClick={() => setOpen(false)}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography color='primary' variant='h6'>
                        {item.name}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}
