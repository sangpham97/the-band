import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { questions } from '../utils'
import Hero from './Hero'
import { Link } from 'react-router-dom'

export default function Questions() {
  return (
    <Hero>
      <Container maxWidth='md' style={{ marginTop: 30 }}>
        <Typography
          align='center'
          variant='h4'
          gutterBottom
          style={{ color: 'tomato', textDecoration: 'underline' }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing='2'>
          {questions.map((q, i) => {
            return (
              <Grid item md={6} sm={6} key={i}>
                <Typography
                  variant='h6'
                  gutterBottom
                  style={{ fontWeight: '700', color: 'tomato' }}
                >
                  {q.title}
                </Typography>
                {q.sub && (
                  <Typography variant='p' gutterBottom>
                    {q.sub}
                  </Typography>
                )}
                {q.link && (
                  <Link
                    to={q.link}
                    style={{
                      textDecoration: 'none',
                      color: 'oranged',
                      textTransform: 'capitalize',
                      borderBottom: '1px solid orange',
                    }}
                  >
                    get in touch
                  </Link>
                )}
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Hero>
  )
}
