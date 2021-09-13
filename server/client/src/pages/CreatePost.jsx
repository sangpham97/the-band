import {
  Box,
  Button,
  CardMedia,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@material-ui/icons/Add'
import { getCates } from '../redux/categorySlice'
import { axiosIstance } from '../config'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [file, setFile] = useState(null)
  const user = useSelector((state) => state.user.user)
  const categories = useSelector((state) => state.cates.cates)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCates())
  }, [dispatch])
  // console.log(categories)
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  // console.log(value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      desc,
      categories: value,
      avatar: user.profilePic,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.photo = filename
      try {
        await axiosIstance.post('/upload', data)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      const res = await axiosIstance.post('/posts', newPost)
      window.location.replace('/blog/' + res.data._id)
    } catch (err) {}
  }
  return (
    <div style={{ marginTop: 20 }}>
      <Container maxWidth='md'>
        <Typography variant='h4' align='center'>
          Create a blog
        </Typography>
        {file && (
          <CardMedia src={URL.createObjectURL(file)} alt='' component='img' />
        )}
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Box>
              <label htmlFor='fileInput'>
                <AddIcon />
              </label>
            </Box>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <TextField
              type='text'
              label='Title'
              autoFocus={true}
              required
              onChange={(e) => setTitle(e.target.value)}
              variant='filled'
              style={{ marginBottom: 6 }}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label='Tell your story...'
              type='text'
              onChange={(e) => setDesc(e.target.value)}
              multiline
              required
              rows='5'
              variant='filled'
            ></TextField>
          </FormGroup>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Category</FormLabel>
            <RadioGroup
              aria-label='category'
              name='category'
              value={value}
              onChange={handleChange}
            >
              {categories.map((cate) => (
                <FormControlLabel
                  value={cate.slug}
                  control={<Radio />}
                  label={cate.name}
                  key={cate._id}
                />
              ))}
            </RadioGroup>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ marginTop: 10 }}
            >
              publish
            </Button>
          </FormControl>
        </form>
      </Container>
    </div>
  )
}
