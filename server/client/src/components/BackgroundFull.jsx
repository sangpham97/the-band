import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10),
    },
    position: 'fixed',
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
  },
}))
export default function BackgroundFull({ bgColor1, bgColor2, bg, children }) {
  const classes = useStyles()
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(${bgColor1},${bgColor2}),url( ${bg} )`,
      }}
      className={classes.root}
    >
      <div>{children}</div>
    </div>
  )
}
