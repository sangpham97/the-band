import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BlogBottm from '../components/BlogBottm'
import BlogLeft from '../components/BlogLeft'
import Hero from '../components/Hero'

export default function Blog() {
  return (
    <div>
      <Hero
        bg='https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80'
        bgColor1='rgba(20,27,41,0.6)'
        bgColor2='rgba(20,27,41,0.6)'
      >
        <Container
          maxWidth='md'
          style={{ color: 'white', padding: '80px 10px', textAlign: 'center' }}
        >
          <Typography align='center' variant='h4' gutterBottom>
            The Bandzoogle Blog
          </Typography>
          <Typography variant='p' gutterBottom>
            Advice, inspiration and resources for musicians navigating the new
            music industry.
          </Typography>
          <Typography gutterBottom>
            Get it delivered right to your inbox.
          </Typography>
          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextField
              label='Email address'
              style={{ backgroundColor: 'white' }}
              size='sm'
              variant='filled'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant='contained'
              color='secondary'
              style={{ margin: '0 10px' }}
            >
              get update
            </Button>
          </form>
          <Typography
            style={{ fontSize: '0.8rem', fontWeight: '600' }}
            variant='p'
          >
            Unsubscribe at any time. Read our privacy policy.
          </Typography>
        </Container>
      </Hero>
      {/* {Blog-Bottom} */}
      <BlogBottm>
        <BlogLeft />
      </BlogBottm>
    </div>
  )
}
