import { Avatar, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Banner from './Banner'
import Hero from './Hero'

export default function Compliments({ bg, bgColor1, bgColor2, Data }) {
  return (
    <Hero bg={bg} bgColor1={bgColor1} bgColor2={bgColor2}>
      <Container maxWidth='md' style={{ padding: '50px 10px', color: 'white' }}>
        <Typography variant='h4' align='center'>
          Over <span style={{ color: 'orangered' }}> 55,000 </span>musicians
          trust Bandzoogle for their home on the web
        </Typography>
        <Grid container spacing='2'>
          {Data.map((item, index) => {
            return <Compliment key={index} item={item} />
          })}
        </Grid>
      </Container>
    </Hero>
  )
}

export const Compliment = ({ item }) => {
  return (
    <Grid item md={4} sm={6} xs={6} style={{}}>
      <Banner image={item.img} left={12} right={12}>
        <Typography style={{ color: 'white', minHeight: 120 }}>
          {item.comment}
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textDecoration: 'underline',
            color: 'orangered',
            cursor: 'pointer',
            marginTop: 10,
            fontFamily: 'fantasy',
          }}
        >
          <Avatar src={item.avatar} />
          <Typography style={{ margin: '0 8px' }}>{item.name}</Typography>
        </div>
      </Banner>
    </Grid>
  )
}
