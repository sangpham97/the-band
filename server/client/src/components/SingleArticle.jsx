import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import React from 'react'

export default function SingleArticle({ article }) {
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card>
        <CardContent>
          <Typography
            variant='h6'
            style={{ padding: '5px 5px', fontWeight: '600' }}
          >
            {article.title}
          </Typography>
          <List>
            {article.services.map((item, i) => (
              <ListItem>
                <Typography
                  key={i}
                  variant='p'
                  style={{ color: 'teal', cursor: 'pointer' }}
                >
                  {item}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  )
}
