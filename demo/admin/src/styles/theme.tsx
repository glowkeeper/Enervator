import * as React from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles';

let theme = createMuiTheme({
  spacing: 8,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14,
    htmlFontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontSize: "2rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica Neue\", \"Arial\", sans-serif"
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    subtitle1: {
      fontSize: "0.9rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
    }
  },
  palette: {
    type: 'dark',
    background: {
      default: '#ffffff',
    },
    primary: {
      light: '#4c8c4a',
      main: '#1b5e20',
      dark: '#003300'
    },
    secondary: {
      light: '#439889',
      main: '#00695c',
      dark: '#003d33'
    },
    error: {
      light: '#f05545',
      main: '#b71c1c',
      dark: '#7f0000'
    },
  }
})

theme = responsiveFontSizes(theme)
theme.spacing(4)

const useStyles = makeStyles({
  root: {
    padding: '0 30px',
    margin: '0 30px',
    backgroundColor: theme.palette.background.default
  },
  paper: {
    padding: '0 30px',
    margin: '0 30px',
    align: 'center'
  },
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 100,
    padding: '0 30px',
    margin: '0 30px',
    align: 'center'
  },
  title: {
    padding: '0 30px',
    margin: '0 30px',
    align: 'center',
    backgroundColor: theme.palette.primary.main
  },
  subHeader: {
    padding: '0 30px',
    margin: '0 30px',
    align: 'center',
    backgroundColor: theme.palette.primary.main
  },
  content: {
    padding: '0 30px',
    margin: '0 30px',
    backgroundColor: theme.palette.primary.light
  },
  sider: {
    padding: '0 30px',
    margin: '0 30px',
    align: 'left',
    backgroundColor: theme.palette.primary.light
  },
  siderMenu: {
    padding: 0,
    margin: 0,
    align: 'left',
    backgroundColor: theme.palette.primary.light
  },
  appBar: {
    padding: '0 30px',
    margin: '0 30px',
    align: 'left',
    backgroundColor: theme.palette.primary.main
  },
  caption: {
    padding: '0 30px',
    margin: '0 30px',
    align: 'center',
    backgroundColor: theme.palette.primary.light
  },
  footer: {
    padding: '0 30px',
    margin: '0 30px',
    align: 'center',
    backgroundColor: theme.palette.primary.main
  },
  button: {
    padding: theme.spacing,
    margin: theme.spacing
  }
})

export { theme, useStyles }
