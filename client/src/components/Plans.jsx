import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { plans } from '../utils'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
  item: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2),
    },
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '1.5rem',
    color: 'white',
  },
}))

export default function Plans() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {plans.map((plan, i) => (
        <Typography key={i} className={classes.item}>
          <span>{plan.icon}</span> <span>{plan.sub}</span>
        </Typography>
      ))}
    </div>
  )
}
