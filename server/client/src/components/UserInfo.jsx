import { Avatar, Box, Menu, MenuItem, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../redux/userSlice'

export default function UserInfo({ User, noAvatar }) {
  const PF = 'https://bandsangdev.herokuapp.com/images/'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleLogout = () => {
    dispatch(logout())
    setAnchorEl(null)
  }

  const handleNavigate = (link) => {
    history.push(link)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          src={PF + User.profilePic ? PF + User.profilePic : noAvatar}
          onClick={handleClick}
        />
        <Box ml={1}>
          <Typography>{User.username}</Typography>
        </Box>
      </span>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleNavigate('/profile')}>Profile</MenuItem>
        <MenuItem onClick={() => handleNavigate('/createBlog')}>Post</MenuItem>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
    </div>
  )
}
