import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import { Button, Container, Grid, Typography } from '@material-ui/core'

export default function EndHelp() {
  return (
    <Hero>
      <Container maxWidth='lg'>
        <Banner
          image='https://assets-production.bzzgl.com/assets/frontend/bz/help/staff/luis-bfc946d6a1cad4f04983ea1711720863250d5d655953ad8086a5cb85b7e9df3c.jpg'
          image2='https://assets-production.bzzgl.com/assets/frontend/bz/help/staff/julia-419d57760c5c467dd9db4e22cfa6e47dbe2bd66acd1cfd23608bc1fd1621166c.jpg'
          left='6'
          right='6'
          direction='row-reverse'
          imgHeight='250'
        >
          <Typography variant='h5' gutterBottom>
            Still looking for answers?
          </Typography>
          <Typography gutterBottom>
            Our award-winning support team is online every day by live chat and
            email to help you with your website.
          </Typography>
          <Grid container spacing='2'>
            <Grid item md={6} sm={6} xs={6}>
              <span>
                <Typography style={{ fontWeight: '600' }}>
                  Mon - Fri: 3am - 10pm EST
                </Typography>
                <Typography style={{ fontWeight: '600' }}>
                  Sat - Sun: 8am - 8pm EST
                </Typography>
                <Button variant='outlined' color='secondary'>
                  Email Support
                </Button>
              </span>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <span>
                <Typography style={{ fontWeight: '600' }}>
                  Mon - Fri: 9am - 8pm EST
                </Typography>
                <Typography style={{ fontWeight: '600' }}>
                  Mon - Fri: 9am - 8pm EST
                </Typography>
                <Button variant='outlined' color='secondary'>
                  Live Chat
                </Button>
              </span>
            </Grid>
          </Grid>
        </Banner>
      </Container>
    </Hero>
  )
}
