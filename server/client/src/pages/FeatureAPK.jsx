import {
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import React from 'react'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import { APKbuild, apkCompliments } from '../utils'
import { EndPage } from './Home'
import Compliments from '../components/Compliments'
import { useHistory } from 'react-router-dom'

export default function FeatureAPK() {
  const history = useHistory()

  const handleNavigate = () => {
    history.push('/try-it-free')
  }
  return (
    <div>
      <FeatureApkFrist handleNavigate={handleNavigate} />
      <FeatureApkSecond />
      <FeatureApkThird />
      <FeatureApkFour />
      <APKSteps />
      <Compliments
        bg='https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        bgColor1='rgba(242,130,80,0.8)'
        bgColor2='rgba(242,130,80,0.9)'
        Data={apkCompliments}
      />
      <EndPage />
    </div>
  )
}

export const FeatureApkFrist = ({ handleNavigate }) => {
  return (
    <Hero
      bg='https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/sections/flara-k-d32a44e0d1460698675a7ca83afc40b7a730fafe1af56fd474059b8bf0118f90.png'
      bgColor1='rgba(20,27,41,0.8)'
      bgColor2='rgba(20,27,41,0.9)'
    >
      <Container maxWidth='md' style={{ padding: '60px 20px' }}>
        <Banner
          image='https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/sections/flara-k-d32a44e0d1460698675a7ca83afc40b7a730fafe1af56fd474059b8bf0118f90.png'
          left='7'
          right='5'
        >
          <Typography
            align='center'
            style={{ color: 'white', fontSize: '1.2rem' }}
          >
            <h3 style={{ fontSize: '2rem' }}>
              Create a stunning EPK for your band
            </h3>
            <p>
              An electronic press kit is essential for every artist. Build an
              EPK that stands out with templates and custom tools for musicians.{' '}
            </p>
          </Typography>
          <Typography align='center' style={{ color: 'white' }}>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              onClick={() => handleNavigate()}
            >
              get started
            </Button>
            <p>Free 30 day trial, no credit card needed.</p>
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}

export const FeatureApkSecond = () => {
  return (
    <Hero>
      <Container maxWidth='md' style={{ padding: '60px 20px' }}>
        <Banner
          video='https://www.youtube.com/embed/1AseEV2z7WY'
          left='8'
          right='4'
          direction='row-reverse'
        >
          <Typography align='left' style={{ fontSize: '1.2rem' }}>
            <h3 style={{ fontSize: '2rem' }}>
              Design a professional press kit in minutes
            </h3>
            <p>
              Choose a mobile-friendly template for your artist EPK and make it
              unique with our visual design editor. Easily add and rearrange
              your text and media to create a stylish press kit you can proudly
              share with industry.
            </p>
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}

export const FeatureApkThird = () => {
  return (
    <Hero
      bg='https://artist.radioairplay.com/airplay_pictures/pictures/000/671/698/20098d46f1bbcd2ff5b4d50b3baa3af3_lg.jpg'
      bgColor1='rgba(242,130,80,0.8) '
      bgColor2='rgba(242,130,80,0.9)'
    >
      <Container maxWidth='md' style={{ color: 'white' }}>
        <Banner
          image='https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/sections/duane-eubanks-517ee6cf79e0f87611f6e9df9fc5a97606d0ac22a05b3c3ea0d18416a1bb7cc0.jpg'
          left='8'
          right='4'
        >
          <Typography align='left'>
            <h5 style={{ fontSize: '2rem' }}>
              Create a stunning EPK for your band
            </h5>
            <p>
              An electronic press kit is essential for every artist. Build an
              EPK that stands out with templates and custom tools for musicians.{' '}
            </p>
          </Typography>
          <Typography variant='p' align='bottom' style={{ fontSize: '0.8rem' }}>
            Free 30 day trial, no credit card needed.
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}

export const FeatureApkFour = () => {
  return (
    <Hero
      bg='https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      bgColor1='rgba(20,27,41,0.8)'
      bgColor2='rgba(20,27,41,0.9)'
    >
      <Container maxWidth='md'>
        <Banner
          left='7'
          right='5'
          direction='row-reverse'
          image='https://assets-production.bzzgl.com/assets/frontend/bz/features/epk/sections/tavish-eb38de82a67c5aa1e612f0a48765002dca86e254b509c9db4f036975c683a026.jpg'
        >
          <Typography align='left' style={{ color: 'white', marginBottom: 30 }}>
            <h5 style={{ fontSize: '2rem' }}>
              Create a stunning EPK for your band
            </h5>
            <p>
              An electronic press kit is essential for every artist. Build an
              EPK that stands out with templates and custom tools for musicians.{' '}
            </p>
            <Typography
              variant='p'
              align='bottom'
              style={{ fontSize: '0.8rem' }}
            >
              Artist in photo: TAVISH // member since 2011
            </Typography>
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}

export const APKSteps = () => {
  const { title, sub, steps } = APKbuild[0]
  return (
    <Hero bgColor1='rgba(20,27,41,0.9)' bgColor2='rgba(20,27,41,0.9)'>
      <Container maxWidth='sm' style={{ color: 'white', padding: '20px 0' }}>
        <Typography align='center'>
          <h2>{title}</h2>
          <p>{sub}</p>
        </Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <List>
            {steps.map((step, index) => (
              <ListItem key={index}>
                <Typography>
                  {index + 1}. {step}
                </Typography>
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </Hero>
  )
}
