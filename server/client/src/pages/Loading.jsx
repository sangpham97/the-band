import { CircularProgress } from '@material-ui/core'
import React from 'react'

export default function Loading() {
  return (
    <div style={{ height: '100%' }}>
      <CircularProgress color='secondary' />
    </div>
  )
}
