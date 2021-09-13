import { Container, Grid, Typography } from '@material-ui/core'
import { Articles } from '../utils'
import Hero from './Hero'
import SingleArticle from './SingleArticle'
export default function AllArticle() {
  return (
    <div style={{ marginTop: 30 }}>
      <Hero bg='' bgColor1='#ebf0f9' bgColor2='#ebf0f9'>
        <Container maxWidth='lg'>
          <Typography
            style={{
              padding: '3px 5px',
              fontWeight: '800',
              fontSize: '1.2rem',
            }}
          >
            All Article
          </Typography>
          <Grid container spacing='2'>
            {Articles.map((article, index) => (
              <SingleArticle article={article} key={index} />
            ))}
          </Grid>
        </Container>
      </Hero>
    </div>
  )
}
