import { Container, Chip, makeStyles, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
// import { blogLinks } from '../utils'
import BlogRight from './BlogRight'
import Hero from './Hero'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { getBlogs } from '../redux/blogSlice'
import { getCates } from '../redux/categorySlice'

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: '2px 3px',
    fontSize: '0.8rem',
    padding: '4px 4px',
    backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
      margin: '6px 7px',
    },
    border: `1px solid ${theme.palette.secondary.main}`,
    textTransform: 'uppercase',
  },
  wrapper: {
    textAlign: 'center',
  },
}))

export default function BlogBottm({ children }) {
  const history = useHistory()
  const categories = useSelector((state) => state.cates.cates)
  const classes = useStyles()
  const { search } = useLocation()
  const dispatch = useDispatch()

  const handleNavigate = (link) => {
    history.push(link)
    console.log(search)
  }

  //fetch categories
  useEffect(() => {
    dispatch(getCates())
  }, [dispatch])
  // console.log(categories)
  //fetch Posts
  useEffect(() => {
    dispatch(getBlogs(search))
  }, [search, dispatch])
  // console.log(blogs)
  return (
    <Hero>
      <Container maxWidth='lg' style={{ marginTop: 30 }}>
        <div className={classes.wrapper}>
          <Chip
            label='All Posts'
            className={classes.chip}
            textAlign='center'
            onClick={() => handleNavigate('/blog')}
          />
          {categories.map((item, index) => {
            return (
              <Chip
                label={item.name}
                key={index}
                className={classes.chip}
                textAlign='center'
                onClick={() => handleNavigate('/blog/?cat=' + item.slug)}
              />
            )
          })}
        </div>
        <Grid container style={{ marginTop: 30 }} spacing='2'>
          <Grid item md={8}>
            {children}
          </Grid>
          <Grid item md={4}>
            <BlogRight />
          </Grid>
        </Grid>
      </Container>
    </Hero>
  )
}
