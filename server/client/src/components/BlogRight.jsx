import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { books, webinars } from '../utils'
import Hero from './Hero'

export default function BlogRight() {
  return (
    <div style={{ marginTop: 60 }}>
      <AdsBox />
      <Documents title='FREE BOOK' Data={books} />
      <Documents title='FREE WEBINARS' Data={webinars} />
    </div>
  )
}

export const AdsBox = () => {
  return (
    <Hero bgColor1='#ebf0f9' bgColor2='#ebf0f9'>
      <div style={{ padding: '20px 10px', textAlign: 'center' }}>
        <Typography variant='h5'>
          Build a stunning website for your music
        </Typography>
        <Typography>
          Bandzoogle gives you all the tools you need to create a your own
          unique band website, including responsive templates and
          commission-free selling tools.
        </Typography>
        <Button variant='contained' color='secondary'>
          <Link
            to='/try-it-free'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            build your website
          </Link>
        </Button>
        <p>Free 30 day trial, no credit card needed.</p>
      </div>
    </Hero>
  )
}

export const Documents = ({ title, Data }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <Typography variant='h6' align='left' gutterBottom>
        {title}
      </Typography>
      <Grid container spacing='1'>
        {Data.map((item, index) => (
          <Document key={index} item={item} />
        ))}
      </Grid>
    </div>
  )
}

export const Document = ({ item }) => {
  return (
    <Grid item md={6} sm={4} xs={6}>
      <Card>
        <a href={item.link} style={{ textDecoration: 'none' }}>
          <CardMedia src={item.img} component='img' />
          <CardContent style={{ minHeight: 100 }}>
            <Typography variant='p' style={{ color: 'teal' }}>
              {item.title}
            </Typography>
          </CardContent>
        </a>
      </Card>
    </Grid>
  )
}
