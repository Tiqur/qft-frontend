import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    },
  },

  palette: {
    primary: {
      main: '#50DEDF'
    },
    secondary: {
      main: '#FFFFFF'
    }
  }
})

export default theme;
