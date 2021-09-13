import { Typography, TextField, Container, Grid } from '@material-ui/core'
import Hero from '../components/Hero'
import Article from '../components/Article'
import AllArticle from '../components/AllArticle'
import EndHelp from '../components/EndHelp'

export default function Help() {
  return (
    <div>
      <Hero
        bg='https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        bgColor1='rgba(20,27,41,0.9)'
        bgColor2='rgba(20,27,41,0.9)'
      >
        <Container
          maxWidth='xs'
          style={{ color: 'white', padding: '40px 10px' }}
        >
          <Typography variant='h3' align='center' gutterBottom>
            Bandzoogle Help
          </Typography>
          <Typography variant='h6' align='center' gutterBottom>
            Find up-to-date guides and support articles to help make the most of
            your Bandzoogle website.
          </Typography>
          <TextField
            label='Search help articles'
            fullWidth
            variant='filled'
            type='email'
            style={{ backgroundColor: 'white', margin: '30px 0' }}
          />
        </Container>
      </Hero>
      <Container maxWidth='lg' style={{ marginTop: '30px' }}>
        <Grid container spacing='2'>
          <Grid item md={6} sm={6}>
            <Typography variant='h6'>Popular articles</Typography>
            <Grid container spacing='1'>
              <Article link='Upgrading and Publishing Your Site' />
              <Article link='Header Images ' />
              <Article link='Domain Names' />
              <Article link='SEO and Google Listing for your Website' />
              <Article link='Selling Music' />
            </Grid>
          </Grid>
          <Grid item md={6} sm={6}>
            <Typography variant='h6'>Recently updated</Typography>
            <Grid container spacing='2'>
              <Article link='Sharing Music' />
              <Article link='Text Feature' />
              <Article link='Domain Names' />
              <Article link='Selling CDs, Vinyl, and Cassettes' />
              <Article link='Bandzoogle Hosting' />
              <Article link='Integrating Printful Into Your Website Store' />
              <Article link='Selling an album' />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <AllArticle />
      <EndHelp />
    </div>
  )
}
