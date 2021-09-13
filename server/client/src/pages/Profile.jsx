import {
  Box,
  Button,
  Container,
  FormGroup,
  TextField,
  Typography,
  Avatar,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { useState } from 'react'
import noAvatar from '../assets/img/no-avatar.png'
import { useSelector } from 'react-redux'
import { axiosIstance } from '../config'

export default function Profile() {
  const currentUser = useSelector((state) => state.user.user)
  const [newUser, setNewUser] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [file, setFile] = useState(null)
  console.log(currentUser)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedUser = {
      username: newUser,
      email: newEmail,
      password: newPassword,
      _id: currentUser._id,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      updatedUser.profilePic = filename
      try {
        await axiosIstance.post('/upload', data)
      } catch (err) {
        console.log(err)
      }
    }
    try {
      await axiosIstance.put('/users/' + currentUser._id, updatedUser)
      window.location.replace('/')
    } catch (err) {}
  }

  return (
    <div>
      <Box mt={5}>
        <Container maxWidth='sm'>
          <Typography variant='h4' color='primary' align='center' gutterBottom>
            Update your account!
          </Typography>
          <Box>
            {file ? (
              <Avatar
                src={URL.createObjectURL(file)}
                alt=''
                style={{ width: 100, height: 100 }}
              />
            ) : (
              <Avatar src={noAvatar} alt='' />
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
                  label='Your name or your Band name'
                  variant='filled'
                  fullWidth
                  type='username'
                  onChange={(e) => setNewUser(e.target.value)}
                ></TextField>
                <TextField
                  label='Your Email address'
                  variant='filled'
                  fullWidth
                  type='email'
                  onChange={(e) => setNewEmail(e.target.value)}
                  style={{ margin: '10px 0' }}
                ></TextField>
                <TextField
                  label='Password'
                  variant='filled'
                  fullWidth
                  type='password'
                  onChange={(e) => setNewPassword(e.target.value)}
                ></TextField>
              </FormGroup>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                style={{ marginTop: 10 }}
              >
                Update Account
              </Button>
            </form>
          </Box>
        </Container>
      </Box>
    </div>
  )
}
