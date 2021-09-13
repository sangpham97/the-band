import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { OurJobs, sells } from '../utils'
import { team } from '../utils'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  MemName: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sellWrapper: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  titleSell: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}))

export default function Feature() {
  const classes = useStyles()
  return (
    <div>
      <Hero
        bg='https://assets-production.bzzgl.com/assets/frontend/bz/features/features/sections/mockups-9b470d0a03cbbd518b7c19e23de44523e7aa852c3395b427c79733b552bff9b1.png'
        bgColor1='rgba(20,27,41,0.9)'
        bgColor2='rgba(20,27,41,0.9)'
      >
        <Container maxWidth='md'>
          <Banner
            image='https://assets-production.bzzgl.com/assets/frontend/bz/features/features/sections/mockups-9b470d0a03cbbd518b7c19e23de44523e7aa852c3395b427c79733b552bff9b1.png'
            left='5'
            right='7'
            direction='row-reverse'
          >
            <Typography
              variant='h3'
              gutterBottom
              style={{ color: 'white', fontWeight: '800' }}
              id='feature'
            >
              The all-in-one website platform for musicians
            </Typography>
            <Typography
              variant='p'
              gutterBottom
              style={{ color: 'white', fontSize: '1.1rem' }}
            >
              Discover the features that make Bandzoogle the ultimate toolkit to
              build, manage, and promote your music website.
            </Typography>
          </Banner>
        </Container>
      </Hero>
      {/* {Hero-design} */}
      <Hero>
        <Container
          maxWidth='sm'
          style={{ textAlign: 'center', padding: '20px 0', marginTop: 40 }}
        >
          <Typography variant='h4' gutterBottom>
            Design
          </Typography>
          <Typography variant='p' style={{ fontSize: '1.1rem' }} gutterBottom>
            Set your creativity free with easy, flexible design tools to create
            a beautiful website that’s as unique as your music.
          </Typography>
        </Container>
      </Hero>
      {/* {Hero-2} */}
      <Hero>
        <Banner
          image='https://assets-production.bzzgl.com/assets/frontend/bz/features/features/sections/design@2x-64176ad854dc8ee84193526f1a10d588cf8bfaddaff9b239c1ab134dd4da0eb1.png'
          left='12'
          right='12'
        >
          <Container maxWidth='md'>
            <Grid container spacing='1'>
              {OurJobs.map((item, index) => {
                return (
                  <Grid item md={4} sm={6} key={index}>
                    <Typography variant='h6' gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography
                      variant='p'
                      gutterBottom
                      style={{ color: '#555', fontSize: '0.9rem' }}
                    >
                      {item.sub}
                    </Typography>
                    <div>
                      {item.link && (
                        <Typography
                          variant='p'
                          gutterBottom
                          style={{
                            marginTop: '20px',
                            borderBottom: '1px solid orange',
                            color: 'orangered',
                          }}
                        >
                          <Link
                            to={item.link}
                            style={{
                              textDecoration: 'none',
                              color: 'orangered',
                            }}
                          >
                            Learn more
                          </Link>
                        </Typography>
                      )}
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </Container>
        </Banner>
      </Hero>
      {/* {Hero-3} */}
      <Hero>
        <Container
          maxWidth='sm'
          style={{ textAlign: 'center', marginBottom: 60, marginTop: 30 }}
        >
          <Typography variant='h4' align='center'>
            Sell
          </Typography>
          <Typography variant='p' align='center' style={{ color: '#555' }}>
            Bandzoogle websites feature selling tools made to help you earn more
            revenue as an artist. Sell directly to fans on your own terms, with
            no commission on sales.
          </Typography>
        </Container>
      </Hero>
      {/* {Sells} */}
      <Hero>
        <Container maxWidth='md' className={classes.sellWrapper}>
          <Grid container spacing='2'>
            {sells.map((item, index) => {
              return (
                <Grid item md={4} sm={6} key={index}>
                  <Typography variant='h5' className={classes.titleSell}>
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Typography>
                  <Typography
                    variant='p'
                    style={{
                      color: '#555',
                      fontSize: '1rem',
                      // padding: '0 25px',
                    }}
                  >
                    {item.sub}
                  </Typography>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Hero>
      {/* {Hero-team} */}
      <Hero>
        <Banner
          image='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/shared/team/team@2x-d105bb8060385246486917b9b9846eccdc66080489b4b72bdea4c68aca25d433.jpg'
          left='12'
          right='12'
          direction='column-reverse'
        >
          <Container maxWidth='sm' align='center'>
            <Typography variant='h4' gutterBottom>
              Team
            </Typography>
            <Typography variant='p' style={{ color: '#555' }} gutterBottom>
              Team Bandzoogle is more than a platform. We’re your web team with
              over 17 years of experience helping musicians succeed online. And
              we’re musicians too.
            </Typography>
          </Container>
        </Banner>
        <Grid
          container
          align='center'
          justifyContent='center'
          alignItems='center'
          className={classes.MemName}
        >
          <Grid item md={12} align='center'>
            <Grid
              container
              justifyContent='space-around'
              spacing='3'
              alignItems='center'
            >
              {team.map((mem, index) => {
                return (
                  <Grid item md={2} key={index}>
                    <Typography variant='h5'>{mem.name}</Typography>
                    <Typography variant='p'>{mem.job}</Typography>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Hero>
    </div>
  )
}
