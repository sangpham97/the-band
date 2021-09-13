import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BlogBottm from '../components/BlogBottm'
import Hero from '../components/Hero'
import { getOneBlog } from '../redux/BlogApi'
import { getOneCate } from '../redux/CateApi'

export default function SinglePost() {
  return (
    <div>
      <Hero
        bg='https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80'
        bgColor1='rgba(20,27,41,0.6)'
        bgColor2='rgba(20,27,41,0.6)'
      >
        <Container
          maxWidth='md'
          style={{ color: 'white', padding: '80px 10px', textAlign: 'center' }}
        >
          <Typography align='center' variant='h4' gutterBottom>
            The Bandzoogle Blog
          </Typography>
          <Typography variant='p' gutterBottom>
            Advice, inspiration and resources for musicians navigating the new
            music industry.
          </Typography>
          <Typography gutterBottom>
            Get it delivered right to your inbox.
          </Typography>
          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextField
              label='Email address'
              style={{ backgroundColor: 'white' }}
              size='sm'
              variant='filled'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant='contained'
              color='secondary'
              style={{ margin: '0 10px' }}
            >
              get update
            </Button>
          </form>
          <Typography
            style={{ fontSize: '0.8rem', fontWeight: '600' }}
            variant='p'
          >
            Unsubscribe at any time. Read our privacy policy.
          </Typography>
        </Container>
      </Hero>
      {/* {Blog-Bottom} */}
      <BlogBottm>
        <Post />
      </BlogBottm>
    </div>
  )
}

export const Post = () => {
  const PF = 'https://bandsangdev.herokuapp.com/images'
  const { id } = useParams()
  const post = useSelector((state) => state.blogs.blog)
  const category = useSelector((state) => state.cates.cate)
  const dispatch = useDispatch()
  //getBlog
  useEffect(() => {
    getOneBlog(dispatch, id)
  }, [dispatch, id])
  //getCategory
  useEffect(() => {
    getOneCate(dispatch, post?.categories)
  }, [dispatch, post?.categories])
  // console.log(category)
  return (
    <div style={{ marginTop: 50 }}>
      <Typography variant='h3'>{post.title}</Typography>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <Avatar src={post.avatar} />
        <Box ml={2}>
          Updated by {post.username} on {post.createdAt} in: {category?.name}
        </Box>
      </div>
      <CardMedia
        src={PF + post.photo}
        component='img'
        style={{ height: 350 }}
      />
      <Typography>{post.desc}</Typography>
    </div>
  )
}
