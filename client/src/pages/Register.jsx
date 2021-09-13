import {
  Box,
  CardMedia,
  Container,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import React, { useState } from 'react'
import axios from 'axios'
import BackgroundFull from '../components/BackgroundFull'
import { Link, useHistory } from 'react-router-dom'

export default function Register() {
  const history = useHistory()
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    const user = {
      username,
      email,
      password,
    }
    try {
      await axios.post('/users/register', user)
      history.push('/sign-in')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <BackgroundFull
      bg='https://images.unsplash.com/photo-1508979822114-db019a20d576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80'
      bgColor1='rgba(20,27,41,0.9)'
      bgColor2='rgba(20,27,41,0.9)'
    >
      <Container
        maxWidth='sm'
        style={{
          color: 'white',
          marginTop: 30,
        }}
      >
        <Typography align='center'>
          <Typography variant='h4' gutterBottom style={{ fontWeight: 800 }}>
            Create a great website for your music.
          </Typography>
          <Typography variant='p' gutterBottom>
            Try Bandzoogle risk-free for 30 days. No credit card needed.
          </Typography>
          <Box>
            <form
              style={{
                backgroundColor: 'transparent',
                padding: '20px 20px',
                border: '1px solid white',
              }}
              onSubmit={handleRegister}
              noValidate
              autoComplete='off'
            >
              <CardMedia
                src='https://assets-production.bzzgl.com/assets/frontend/bz/logo-a1576ddfd581207281414c6f189bd95cc7d80e87d75be2c841160e159f804903.svg'
                component='img'
                style={{ marginBottom: 10 }}
              />

              <TextField
                label='Band/Project/Artist name'
                variant='filled'
                fullWidth
                style={{ backgroundColor: 'white' }}
                gutterBottom
                require
                onChange={(e) => setUserName(e.target.value)}
                type='username'
              ></TextField>
              <TextField
                label='Email'
                type='email'
                variant='filled'
                require
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                style={{ backgroundColor: 'white', margin: '10px 0' }}
                gutterBottom
              ></TextField>
              <TextField
                label='Password'
                variant='filled'
                type='password'
                require
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                style={{ backgroundColor: 'white' }}
                gutterBottom
              ></TextField>
              <Button
                variant='contained'
                color='secondary'
                style={{ marginTop: 6 }}
                size='large'
                type='submit'
              >
                Register
              </Button>
            </form>
          </Box>
          <Typography style={{ marginTop: 10 }}>
            Already have an account?{' '}
            <Link
              to='sign-in'
              style={{ textDecoration: 'none', color: 'orange' }}
            >
              Sign in here
            </Link>
          </Typography>
        </Typography>
      </Container>
    </BackgroundFull>
  )
}
