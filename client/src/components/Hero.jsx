import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10),
    },
  },
}))

export default function Hero({ children, bg, bgColor1, bgColor2 }) {
  const classes = useStyles()
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(${bgColor1},${bgColor2}),url( ${bg} )`,
      }}
    >
      <div>{children}</div>
    </div>
  )
}
