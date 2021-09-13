import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
    minHeight: 300,
  },
  image: {
    maxHeight: 300,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  content: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    minHeight: 240,
    [theme.breakpoints.down('sm')]: {
      minHeight: 300,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 200,
    },
  },
  link: {
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
}))

export default function SingleExample({ example }) {
  const classes = useStyles()
  return (
    <Grid item md={6} sm={6} xs={12}>
      <Card className={classes.card}>
        <a
          className={classes.link}
          href={example.link}
          target='_blank'
          rel='noreferrer'
        >
          <CardMedia src={example.image} component='img' />
        </a>
        <CardContent className={classes.content} style={{ display: 'flex' }}>
          <Avatar src={example.avatar} className={classes.large}></Avatar>
          <div style={{ margin: '0 5px' }}>
            <Typography>{example.content}</Typography>
            <a
              className={classes.link}
              href={example.link}
              target='_blank'
              rel='noreferrer'
            >
              {example.name}
            </a>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}
