import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Lite, Pro, Standard } from '../utils'
import ListPrice from './ListPrice'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}))

export default function ListPrices() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ListPrice
        Data={Standard[0]}
        bgColor='white'
        color='blue'
        BtnColor='outlined'
      />
      <ListPrice
        Data={Pro[0]}
        bgColor='orange'
        color='purple'
        BtnColor='contained'
      />
      <ListPrice
        Data={Lite[0]}
        bgColor='white'
        color='blue'
        BtnColor='outlined'
      />
    </div>
  )
}
