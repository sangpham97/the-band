import {
  Button,
  List,
  ListItem,
  makeStyles,
  Typography,
} from '@material-ui/core'
import React from 'react'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: '6px 0',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 0),
    },
    borderRadius: 6,
  },
  title: {
    textTransform: 'uppercase',
  },
  price: {
    fontSize: '1.8rem',
  },
  item: {
    borderBottom: '1px solid #555',
  },
  icon: {
    fontSize: '3rem',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
    cursor: 'pointer',
  },
  list: {
    textAlign: 'center',
  },
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.toggle ? 'block' : 'none'),
    },
  },
}))

export default function ListPrice({ Data, bgColor, Color, BtnColor }) {
  const history = useHistory()
  const handleNavigate = () => {
    history.push('/try-it-free')
  }
  const [toggle, setToggle] = useState(false)
  const classes = useStyles({ toggle })
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        color: `${Color}`,
      }}
      className={classes.root}
    >
      <Typography variant='h4' className={classes.title} align='center'>
        {Data.info.type}
      </Typography>
      <Typography className={classes.price}>
        ${Data.info.priceMonth}{' '}
        <span style={{ fontSize: '1rem', color: '#555' }}>/month</span>
      </Typography>
      {/* {ArowDown} */}
      {!toggle && (
        <KeyboardArrowDownIcon
          className={classes.icon}
          onClick={() => setToggle(true)}
        />
      )}
      {/* {EndArrowDown} */}
      <div className={classes.wrapper}>
        <Typography className={classes.item}>
          Billed annually, or ${Data.info.corePrice}/month
        </Typography>
        <List className={classes.list}>
          <ListItem className={classes.item}>{Data.utils}</ListItem>
          <ListItem className={classes.item} style={{ fontWeight: '700' }}>
            The basics
          </ListItem>
          {Data.basics.map((basic, index) => {
            return (
              <ListItem className={classes.item} key={index}>
                {basic}
              </ListItem>
            )
          })}
          <ListItem className={classes.item} style={{ fontWeight: '700' }}>
            Desgin
          </ListItem>
          {Data.designs.map((design, index) => {
            return (
              <ListItem className={classes.item} key={index}>
                {design}
              </ListItem>
            )
          })}
          <ListItem className={classes.item} style={{ fontWeight: '700' }}>
            Selling Tools
          </ListItem>
          {Data.tools.map((tool, index) => {
            return (
              <ListItem className={classes.item} key={index}>
                {tool}
              </ListItem>
            )
          })}
          <ListItem className={classes.item} style={{ fontWeight: '700' }}>
            Promotion features
          </ListItem>
          {Data.promote.map((promote, index) => {
            return (
              <ListItem className={classes.item} key={index}>
                {promote}
              </ListItem>
            )
          })}
        </List>
        <Button variant={BtnColor} onClick={() => handleNavigate()}>
          free trial
        </Button>
      </div>

      {toggle && (
        <KeyboardArrowUpIcon
          className={classes.icon}
          onClick={() => setToggle(false)}
        />
      )}
    </div>
  )
}
