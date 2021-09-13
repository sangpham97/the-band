import { orange } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2532',
    },
    secondary: {
      main: orange[700],
    },
  },
})
