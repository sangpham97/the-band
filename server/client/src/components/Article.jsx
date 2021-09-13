import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'teal',
    cursor: 'pointer',
  },
}))
export default function Article({ link }) {
  const classes = useStyles()
  return (
    <Grid item md={6} sm={6} xs={12}>
      <Typography variant='p' className={classes.link}>
        {link}
      </Typography>
    </Grid>
  )
}
