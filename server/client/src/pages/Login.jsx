import {
  Box,
  Button,
  CardMedia,
  Container,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import BackgroundFull from '../components/BackgroundFull'
import { LoginAction } from '../redux/userSlice'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()

  const handleNavigate = () => {
    history.push('/try-it-free')
  }

  const handleLogin = () => {
    dispatch(LoginAction({ email, password }))
    history.push('/')
  }

  return (
    <BackgroundFull
      bg='https://images.unsplash.com/photo-1583470037890-73cc6850b7eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80'
      bgColor1='rgba(20,27,41,0.9)'
      bgColor2='rgba(20,27,41,0.9)'
    >
      <Container maxWidth='lg' style={{ position: 'relative' }}>
        <Typography
          variant='p'
          style={{
            position: 'absolute',
            top: 40,
            right: 20,
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Don't have an account?{' '}
          <span
            style={{ color: 'orangered', textDecoration: 'underline' }}
            onClick={() => handleNavigate()}
          >
            Sign up for free here
          </span>
        </Typography>
      </Container>
      <Container maxWidth='sm' style={{ paddingTop: 120, color: 'white' }}>
        <Box style={{ backgroundColor: '#141A28', padding: 60 }}>
          <Typography align='center'>
            <form onSubmit={handleLogin} noValidate autoComplete='false'>
              <CardMedia
                src='https://assets-production.bzzgl.com/assets/frontend/bz/logo-a1576ddfd581207281414c6f189bd95cc7d80e87d75be2c841160e159f804903.svg'
                component='img'
              />
              <Typography variant='p'>Sign in to your account</Typography>
              <TextField
                type='email'
                label='Email'
                fullWidth
                style={{ backgroundColor: 'white', margin: '10px 0' }}
                variant='filled'
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type='password'
                label='Password'
                fullWidth
                variant='filled'
                style={{ backgroundColor: 'white', margin: '10px 0' }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant='contained'
                size='large'
                color='secondary'
                type='submit'
              >
                Sign in
              </Button>
            </form>
          </Typography>
        </Box>
      </Container>
    </BackgroundFull>
  )
}
