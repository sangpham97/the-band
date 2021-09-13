import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'

import Banner from '../components/Banner'
import bg from '../assets/img/background-1.jpg'
import poster from '../assets/img/band-image.png'
import Hero from '../components/Hero'
import { features } from '../utils'
import { Link, useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary,
  },
  btn: {
    marginRight: 20,
    border: '1px solid #555',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: 'white',
    },
  },
  btn2: {
    color: 'white',
    marginRight: 20,
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: theme.palette.primary.main,
    },
  },
  btn3: {
    color: 'white',
    marginRight: 20,
    border: '1px solid #fff',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
  icon: {
    color: 'orangered',
  },
}))
export default function Home() {
  const history = useHistory()

  const handleNavigate = () => {
    history.push('/try-it-free')
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/* {Hero 1} */}
      <Hero bg={bg} bgColor1='rgba(20,27,41,0.9)' bgColor2='rgba(20,27,41,0.9)'>
        <Container maxWidth='md' style={{ paddingBottom: 50 }}>
          <Banner image={poster} left='8' right='4'>
            <Typography variant='h4' style={{ color: 'white' }}>
              Build a stunning band website and store in minutes
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              style={{ margin: '20px 0' }}
              onClick={() => handleNavigate()}
            >
              get started
            </Button>
            <p style={{ color: 'white' }}>
              Free 30 day trial, no credit card needed.
            </p>
          </Banner>
        </Container>
      </Hero>
      {/* {Hero 2} */}
      <Hero>
        <Container maxWidth='md'>
          <Banner
            image='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/home/sections/kaia-kater@2x-d3a479e65d11b9316e539bc2f232a0f8478c1f40ddf95e6d865d776bc931f50c.webp'
            left='8'
            right='4'
          >
            <Typography variant='h5'>
              "Bandzoogle has made website management so easy. I can update my
              tour dates and blog from the road, and manage everything from
              newsletters to store purchases."
            </Typography>
            <p style={{ color: 'orange' }}>Kaia Kaiter</p>
            <Button
              variant='outlined'
              size='large'
              color='default'
              className={classes.btn}
              onClick={() => handleNavigate()}
            >
              get started
            </Button>
          </Banner>
        </Container>
      </Hero>
      {/* {Hero-3} */}
      <Hero
        bg='https://s3.amazonaws.com/content.sitezoogle.com/u/173275/a2f62587c465d451d0581fcd6dba9f3558754d91/original/1781381-230875613784788-609138951-o.jpg'
        bgColor1='rgba(242,130,80,0.8)'
        bgColor2='rgba(242,130,80,0.9)'
      >
        <Container maxWidth='md'>
          <Banner
            image='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/home/sections/music@2x-4a2a75105dbf4f89715631d2cdb0c124cc1c04520bd6bf48d931b64a372bb7d4.webp'
            left='7'
            right='5'
            direction='row-reverse'
          >
            <Typography variant='h5' style={{ color: 'white' }}>
              Sell music, merch, downloads & tickets, commission-free
            </Typography>
            <p style={{ padding: '10px 0', color: 'white' }}>
              Add a store in just two clicks and start selling music, downloads,
              tickets, and band merch today. Best of all, we don't charge any
              commission on sales.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'capitalize',
              }}
            >
              <Button
                variant='outlined'
                size='large'
                color='default'
                className={classes.btn2}
                onClick={() => handleNavigate()}
              >
                get started
              </Button>
              <Link to='/feature' style={{ textDecoration: 'none' }}>
                <p style={{ color: 'white' }}>learn more</p>
              </Link>
            </div>
          </Banner>
        </Container>
      </Hero>
      {/* {Hero-4} */}
      <Hero
        bg='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/home/sections/altaquan-mockup@2x-1132b3dc7a1836fe760c7040866b3c1dbc79cae7dd7911bfc26e66a7aa774fe6.webp'
        bgColor1='rgba(20,27,41,0.9)'
        bgColor2='rgba(20,27,41,0.9)'
      >
        <Container maxWidth='md'>
          <Banner
            image='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/home/sections/altaquan-mockup@2x-1132b3dc7a1836fe760c7040866b3c1dbc79cae7dd7911bfc26e66a7aa774fe6.webp'
            left='6'
            right='6'
          >
            <Typography variant='h5' style={{ color: 'white' }}>
              Beautiful, mobile-friendly themes
            </Typography>
            <p style={{ padding: '10px 0', color: 'white' }}>
              Build a gorgeous band website in minutes. Customize fonts, colors,
              and layouts with just a few clicks. Best of all, our modern,
              responsive themes look great on all devices.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'capitalize',
              }}
            >
              <Button
                variant='outlined'
                size='large'
                color='default'
                className={classes.btn3}
                onClick={() => handleNavigate()}
              >
                get started
              </Button>
              <Link
                to='/feature'
                style={{ textDecoration: 'none' }}
                href='#feature'
              >
                <p style={{ color: 'white' }}>learn more</p>
              </Link>
            </div>
          </Banner>
        </Container>
      </Hero>
      {/* {All-Feature} */}
      <ALLFeature handleNavigate={handleNavigate} />
      {/* {Hero-5} */}
      <EndPage
        bgColor1='rgba(20,27,41,0.9)'
        bgColor2='rgba(20,27,41,0.9)'
        bg='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/shared/team/polaroids-small-4b8cf17cd5faab24163afffae34c0708a24d3eab053b401d66f0cfbbd859f20a.png'
        textColor='white'
      />
    </div>
  )
}

export const EndPage = ({ bgColor1, bgColor2, bg, textColor }) => {
  return (
    <Hero bg={bg} bgColor1={bgColor1} bgColor2={bgColor2}>
      <Banner
        image='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/shared/team/polaroids-c8a4b8682c092d51652030db957c222a1e58812ad534cd46e9579ee7f36d6a84.png'
        left='12'
        right='12'
        direction='column-reverse'
      >
        <Container maxWidth='md' style={{ color: `${textColor}` }}>
          <Typography variant='h4' style={{ margin: '20px 0' }} align='center'>
            <span style={{ color: 'orangered' }}>Award-winning</span> web
            experts on your team
          </Typography>
          <Typography
            align='center'
            variant='p'
            style={{
              margin: '10px 0',

              textAlign: 'center',
              fontSize: '1rem',
            }}
          >
            Our friendly and knowledgeable support team is online every day by
            live chat and email. We are musicians and web design wizards who are
            dedicated to helping you build the most effective website for your
            music.
          </Typography>
        </Container>
      </Banner>
      <Typography
        variant='p'
        align='center'
        style={{ display: 'block', padding: '60px 0' }}
        gutterBottom
      >
        <span>Artist in photo: The Bandzoogle Team // members since 2003</span>
      </Typography>
    </Hero>
  )
}

export const ALLFeature = ({ handleNavigate }) => {
  const classes = useStyles()
  return (
    <Hero>
      <Container maxWidth='md' style={{ marginTop: 50 }}>
        <Typography
          gutterBottom
          variant='h4'
          align='center'
          style={{ marginBottom: '10px', fontWeight: '700' }}
        >
          All the features you need to{' '}
          <span style={{ color: 'orangered' }}>grow your fan base online</span>
        </Typography>
        <Grid container>
          {features.map((item, index) => (
            <Grid item key={index} md={4} sm={6} spacing='3'>
              <div style={{ textAlign: 'center', margin: '25px 0' }}>
                <Typography className={classes.icon}>{item.icon}</Typography>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography variant='p'>{item.sub}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
        <Typography align='center' gutterBottom>
          <Button
            size='large'
            variant='outlined'
            color='primary'
            onClick={() => handleNavigate()}
          >
            get started
          </Button>
          <p style={{ fontSize: '0.8rem', paddingBottom: '40px' }}>
            *Some features may be available only to members of the Pro or
            Standard plan
          </p>
        </Typography>
      </Container>
    </Hero>
  )
}
