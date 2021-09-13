import { Container, Typography, makeStyles, Grid } from '@material-ui/core'
import React from 'react'
import Banner from '../components/Banner'
import { teamJob } from '../utils'
import JobTeam from '../components/JobTeam'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    paddingTop: theme.spacing(5),
  },
  title: {
    margin: theme.spacing(4, 0),
  },
  word: {
    display: 'block',
    padding: theme.spacing(2, 0),
  },
  wrapper: {
    marginTop: theme.spacing(5),
  },
}))

export default function About() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='sm'>
        <Typography variant='h4' align='center' className={classes.title}>
          The website builder created by musicians for musicians.
        </Typography>
      </Container>
      <Banner
        image='https://assets-production.bzzgl.com/assets/frontend/bz/landing-pages/shared/team/polaroids-c8a4b8682c092d51652030db957c222a1e58812ad534cd46e9579ee7f36d6a84.png'
        left='12'
        right='12'
      >
        <Container maxWidth='sm'>
          <Typography>
            <span className={classes.word}>
              From the beginning we’ve had one goal: to empower artists to build
              effective websites for their music.
            </span>
            <span className={classes.word}>
              It all started in 1999, with a single band website built by
              Bandzoogle's founder Chris Vinson for his alt-rock band,
              Rubberman. Grassroots promotion, plus the online community that
              the website created, helped the band get a record deal.
            </span>
            <span className={classes.word}>
              In between tours, Chris worked at the record label designing
              websites for multi-platinum selling artists. To save time, he
              built a "control panel" to let artists make changes themselves.
              Realizing this could help independent bands and musicians build
              their own websites, Chris launched Bandzoogle in late 2003.
            </span>
            <span className={classes.word}>
              As the needs of musicians have evolved, so has our mission to help
              them succeed online. Hired as Bandzoogle’s first support tech in
              2007, Stacey Bedford became CEO in 2018. Named as a Billboard
              Digital Power Player in 2019, Stacey has helped expand the
              platform to include everything a musician needs to run a
              successful business online.
            </span>
            <span className={classes.word}>
              From mobile design options, to commission-free music and merch
              sales, built-in crowdfunding, and fan subscriptions tools, now
              tens of thousands of artists from around the world use Bandzoogle
              to create beautiful websites and power their direct-to-fan
              marketing and sales.
            </span>
          </Typography>
        </Container>
      </Banner>
      <div>
        <Banner
          image='https://www.balancethegrind.com.au/wp-content/uploads/2020/05/bandzoogle-website-builder-for-musicians-5.jpg'
          left='12'
          right='12'
        >
          <div className={classes.wrapper}>
            <Typography align='center' variant='h3' gutterBottom>
              The Team
            </Typography>
            <Container maxWidth='md'>
              <Grid container spacing='1' justifyContent='center'>
                {teamJob.map((person, index) => (
                  <JobTeam person={person} key={index} />
                ))}
              </Grid>
            </Container>
          </div>
        </Banner>
      </div>
    </div>
  )
}
