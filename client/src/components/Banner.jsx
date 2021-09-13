import { CardMedia, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  video: {
    borderRadius: 4,
  },
}))

export default function Banner({
  image,
  children,
  left,
  right,
  direction,
  imgHeight,
  image2,
  video,
  smallvideo,
}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing='2'
        justifyContent='center'
        alignItems='center'
        direction={direction}
      >
        <Grid item md={left} sm={12} xs={12}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {image && (
              <img
                src={image}
                alt='poster'
                className={classes.image}
                style={{ maxHeight: `${imgHeight}px` }}
              />
            )}
            {image2 && (
              <img
                src={image2}
                alt='poster'
                className={classes.image}
                style={{ maxHeight: `${imgHeight}px` }}
              />
            )}
            {video && (
              <CardMedia
                src={video}
                component='iframe'
                height='400'
                className={classes.video}
              ></CardMedia>
            )}
            {smallvideo && (
              <CardMedia component='video' autoPlay>
                <source src={smallvideo}></source>
              </CardMedia>
            )}
          </div>
        </Grid>
        <Grid item md={right} sm={12} xs={12}>
          {children}
        </Grid>
      </Grid>
    </div>
  )
}
