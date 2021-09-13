import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import SingleExample from './SingleExample'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getExamples } from '../redux/exampleSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    paddingTop: theme.spacing(5),
  },
}))

export default function ExampleList() {
  const classes = useStyles()
  const Examples = useSelector((state) => state.examples.examples)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getExamples())
  }, [dispatch])

  console.log(Examples)
  return (
    <div className={classes.root}>
      <Container maxWidth='md'>
        <Typography variant='h4' gutterBottom align='center'>
          Thousands of musicians have built websites on Bandzoogle.
        </Typography>
        <Typography variant='h6' gutterBottom align='center'>
          Here are some live examples.
        </Typography>
        <Grid container justifyContent='center' alignItems='center' spacing='2'>
          {Examples &&
            Examples.map((example) => (
              <SingleExample example={example} key={example.id} />
            ))}
        </Grid>
      </Container>
    </div>
  )
}
