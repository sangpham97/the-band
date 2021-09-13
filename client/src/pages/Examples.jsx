import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import ExampleList from '../components/ExampleList'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}))

export default function Examples() {
  const classes = useStyles()
  const Examples = useSelector((state) => state.examples.examples)
  return <div className={classes.root}>{Examples && <ExampleList />}</div>
}
