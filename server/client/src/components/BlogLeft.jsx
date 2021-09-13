import {
  Typography,
  Avatar,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import noAvatar from '../assets/img/no-avatar.png'

// import { blogs } from '../utils'
import { getOneCate } from '../redux/CateApi'
import { axiosIstance } from '../config'

export default function BlogLeft() {
  const PF = 'https://bandsangdev.herokuapp.com/images'
  const newBlog = useSelector((state) => state.blogs.blogs)[0]
  const category = useSelector((state) => state.cates.cate)
  const dispatch = useDispatch()
  useEffect(() => {
    getOneCate(dispatch, newBlog?.categories)
  }, [newBlog?.categories, dispatch])
  // console.log(category)
  return (
    <div>
      <CardMedia
        src={PF + newBlog?.photo}
        component='img'
        style={{ height: 350 }}
      />
      <BlogLeftArticle category={category} newBlog={newBlog} />
      <ListBlogs />
    </div>
  )
}

export const BlogLeftArticle = ({ category, newBlog }) => {
  const PF = 'https://bandsangdev.herokuapp.com/images'
  const history = useHistory()
  const handleNavigate = (id) => {
    history.push('/blog/' + id)
  }
  return (
    <div>
      <Typography
        variant='p'
        style={{ color: 'orange' }}
        onClick={() => handleNavigate('?cat=' + category?.slug)}
      >
        {category?.name}
      </Typography>
      <Typography
        variant='h5'
        onClick={() => handleNavigate(newBlog?._id)}
        style={{ cursor: 'pointer' }}
      >
        {newBlog?.title}
      </Typography>
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '0.8rem',
          marginBottom: 10,
          color: '#555',
        }}
      >
        <Avatar
          src={PF + newBlog?.avatar ? PF + newBlog?.avatar : noAvatar}
          gutterBottom
          style={{ marginRight: 6 }}
        />
        <Typography variant='p' gutterBottom>
          <Link
            to={`/blog/?user=` + newBlog?.username}
            style={{ textDecoration: 'underline', color: 'orangered' }}
          >
            {newBlog?.username}
          </Link>{' '}
          on {new Date(newBlog?.createdAt).toDateString()}
        </Typography>
      </span>
      <span>
        <Typography variant='p' align='left'>
          {`${newBlog?.desc.substring(0, 200)}...`}
        </Typography>
      </span>
      <Typography
        variant='p'
        style={{
          textDecoration: 'underline',
          color: 'orangered',
          cursor: 'pointer',
        }}
        onClick={() => handleNavigate(newBlog?._id)}
      >
        Read more
      </Typography>
    </div>
  )
}

export const ListBlogs = () => {
  const blogs = useSelector((state) => state.blogs.blogs)
  return (
    <Grid container spacing='2' style={{ marginTop: 20 }}>
      {blogs.map((blog, index) => {
        return <Blog blog={blog} key={index} />
      })}
    </Grid>
  )
}

export const Blog = ({ blog }) => {
  const PF = 'https://bandsangdev.herokuapp.com/images'
  const history = useHistory()
  const handleNavigate = (id) => {
    history.push('/blog/' + id)
  }
  return (
    <Grid item md={6} sm={6} xs={12}>
      <Card>
        <CardMedia
          src={PF + blog.photo ? PF + blog.photo : blog.photo}
          component='img'
          style={{ height: 170 }}
          onClick={() => handleNavigate(blog._id)}
        />
        <CardContent style={{ minHeight: 170 }}>
          {blog.categories.map((item) => (
            <SingleCategory item={item} key={item.id} />
          ))}

          <Typography
            style={{ fontWeight: 600 }}
            align='left'
            gutterBottom
            onClick={() => handleNavigate(blog._id)}
          >
            {blog.title}
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar src={PF + blog.avatar ? PF + blog.avatar : noAvatar} />
            <Typography variant='p' style={{ paddingLeft: 10 }}>
              Posted by{' '}
              <Link
                to={`/blog/?user=` + blog.username}
                style={{ textDecoration: 'underline', color: 'orangered' }}
              >
                {blog.username}
              </Link>{' '}
              on {new Date(blog.createdAt).toDateString()}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  )
}

export const SingleCategory = ({ item }) => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const getOneCategory = async () => {
      try {
        const res = await axiosIstance.get('/categories/' + item)
        setCategory(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getOneCategory()
  }, [item])
  // console.log(category)
  return (
    <div>
      {category && (
        <Typography variant='p' align='left'>
          <Link
            to={'/blog/?cat=' + category.slug}
            style={{ textDecoration: 'none', color: 'orangered' }}
          >
            {category.name}
          </Link>
        </Typography>
      )}
    </div>
  )
}
