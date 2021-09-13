import { Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import Banner from '../components/Banner'
import Compliments from '../components/Compliments'
import Hero from '../components/Hero'
import { designCompliments } from '../utils'
import { EndPage } from './Home'

export default function FeatureDesign() {
  return (
    <div>
      <FeatureDesignFirst />
      <FeatureDesignSecond />
      <FeatureDesignThird />
      <FeatureDesignFour />
      <Compliments
        Data={designCompliments}
        bg='https://images.unsplash.com/photo-1481886756534-97af88ccb438?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        bgColor1='rgba(20,27,41,0.9)'
        bgColor2='rgba(20,27,41,0.9)'
      />
      <EndPage />
    </div>
  )
}

export const FeatureDesignFirst = () => {
  const history = useHistory()

  const handleNavigate = () => {
    history.push('/try-it-free')
  }
  return (
    <Hero bgColor1='rgba(20,27,41,0.9)' bgColor2='rgba(20,27,41,0.9)'>
      <Container maxWidth='md' style={{ padding: '40px 10px' }}>
        <Banner
          image='https://assets-production.bzzgl.com/assets/frontend/bz/features/design/sections/airside-12aeab0c0e800bd9441580e5988cbd6e45ba8bf68392c14d71b5c0bc56fc6127.png'
          left='8'
          right='4'
        >
          <Typography align='right' style={{ color: 'white' }}>
            <Typography variant='h4' gutterBottom>
              Band website design made easy
            </Typography>
            <Typography gutterBottom>
              Create a stunning website with free templates and custom design
              tools to make it yours.
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              onClick={() => handleNavigate()}
            >
              get started
            </Button>
            <p style={{ fontSize: '0.8rem' }}>
              Free 30 day trial, no credit card needed.
            </p>
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}

export const FeatureDesignSecond = () => {
  return (
    <Hero>
      <Container maxWidth='md'>
        <Banner
          smallvideo='https://assets-production.bzzgl.com/assets/frontend/bz/features/design/sections/design-tools-2816a16798f454a0ad646586b66ebdc4332c71d6501ccc20a4a67173836e7c62.mp4'
          left='7'
          right='5'
          direction='row-reverse'
        >
          <Typography>
            <Typography variant='h4' color='secondary' gutterBottom>
              Get creative with easy website design tools
            </Typography>
            <Typography variant='p' gutterBottom>
              You don't need to be a designer or coder to make a
              professional-looking website for your music. Set your creativity
              free with our visual Theme Designer tools. Easily make changes to
              details like colors and fonts, or add stylish effects.
            </Typography>
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}

export const FeatureDesignThird = () => {
  return (
    <Hero
      bg='https://assets-production.bzzgl.com/assets/frontend/bz/features/design/sections/airside-12aeab0c0e800bd9441580e5988cbd6e45ba8bf68392c14d71b5c0bc56fc6127.png'
      bgColor1='rgba(242,130,80,0.8)'
      bgColor2='rgba(242,130,80,0.9)'
    >
      <Container maxWidth='md'>
        <Banner
          smallvideo='https://assets-production.bzzgl.com/assets/frontend/bz/features/design/sections/customize-layouts-0b8c8d640efcf43e52be48417da6af1a08d98b7c60a648079d603db13e979f68.mp4'
          left='6'
          right='6'
        >
          <Typography align='center' style={{ color: 'white' }}>
            <Typography variant='h4'>
              Drag and drop to customize layouts
            </Typography>
            <Typography variant='p'>
              Edit and rearrange your website content on the fly with the Visual
              Editor. Add images, text, and other features to your page in one
              click. Make your band website look just how you imagined it —
              without any coding.
            </Typography>
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}

export const FeatureDesignFour = () => {
  return (
    <Hero
      bg='https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      bgColor1='rgba(20,27,41,0.9)'
      bgColor2='rgba(20,27,41,0.9)'
    >
      <Container maxWidth='md' style={{ padding: '40px 10px' }}>
        <Banner
          image='https://assets-production.bzzgl.com/assets/frontend/bz/features/design/sections/pin-up-cfd9d46b7557681b4a2a3d7b74ab450f8e468c14c95437e5f9451fb59ba87e52.png'
          left='8'
          right='4'
          direction='row-reverse'
        >
          <Typography style={{ color: 'white' }}>
            <Typography variant='h4' gutterBottom>
              <span style={{ color: 'orangered' }}> Responsive design </span>{' '}
              for all screen sizes
            </Typography>
            <Typography variant='p' gutterBottom>
              Look professional on any device or browser. All Bandzoogle
              websites are optimized for mobile screens. Design your site once
              and let our responsive layouts do the rest.
            </Typography>
          </Typography>
        </Banner>
      </Container>
    </Hero>
  )
}
