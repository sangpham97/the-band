import { Avatar, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: '600',
  },
}))

export default function JobTeam({ person }) {
  const classes = useStyles()

  return (
    <Grid item md={2} sm={4} xs={6} className={classes.wrapper}>
      <Avatar src={person.img} className={classes.large} gutterBottom />
      <Typography gutterBottom className={classes.name}>
        {person.name}
      </Typography>
      <Typography variant='p'>{person.location}</Typography>
    </Grid>
  )
}
