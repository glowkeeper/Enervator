import * as React from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/styles';

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

/*
paper: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'center'
  },
  header: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
  },
  title: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
  },
  subHeader: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
  },
  content: {
  padding: theme.spacing,
  margin: theme.spacing,
  backgroundColor: theme.palette.primary.light
  },
  sider: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'left',
  backgroundColor: theme.palette.primary.light
  },
  siderMenu: {
  padding: 0,
  margin: 0,
  textAlign: 'left',
  backgroundColor: theme.palette.primary.light
  },
  appBar: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'left',
  backgroundColor: theme.palette.primary.main
  },
  caption: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'center',
  backgroundColor: theme.palette.primary.light
  },
  footer: {
  padding: theme.spacing,
  margin: theme.spacing,
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main
  },
  button: {
  padding: theme.spacing,
  margin: theme.spacing
  }
},
*/

export { theme }
