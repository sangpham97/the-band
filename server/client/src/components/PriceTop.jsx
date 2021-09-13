import { Button, Container, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function PriceTop() {
  const history = useHistory()

  const handleNavigate = () => {
    history.push('/try-it-free')
  }
  return (
    <>
      <Container
        maxWidth='sm'
        style={{ textAlign: 'center', padding: '200px 0', color: 'white' }}
      >
        <Typography variant='h3' gutterBottom style={{ fontWeight: '600' }}>
          From garage to arena, we have a plan for you.
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          gutterBottom
          onClick={() => handleNavigate()}
        >
          start your free trial
        </Button>
        <p>
          30 day no-risk free trial. No hidden costs. Change plans any time.
        </p>
      </Container>
    </>
  )
}
