import React from 'react'
import ListPrices from '../components/ListPrices'
import PriceTop from '../components/PriceTop'
import Hero from '../components/Hero'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Plans from '../components/Plans'
import Questions from '../components/Questions'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(3),
  },
}))

export default function Pricing() {
  const classes = useStyles()

  return (
    <>
      <Hero
        bg='https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1576&q=80'
        bgColor1='rgba(20,27,41,0.9)'
        bgColor2='rgba(20,27,41,0.9)'
      >
        <PriceTop />
        <div className={classes.wrapper}>
          <Container maxWidth='lg'>
            <Grid container alignContent='center' justifyContent='center'>
              <Grid item md={7} sm={12} xs={12}>
                <ListPrices />
              </Grid>
              <Grid item md={5}>
                <Plans />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Hero>
      <Questions />
    </>
  )
}
