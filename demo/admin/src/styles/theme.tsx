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
      default: '#439889',
    },
    primary: {
      light: '#66BB6A',
      main: '#4CAF50',
      dark: '#43A047'
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
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
  link: {
    underline: 'none',
    color: '#ffffff'
  },
  header: {
    padding: theme.spacing(2),
    align: 'center',
    background: 'linear-gradient(45deg, #66BB6A 30%, #A5D6A7 90%)'
  },
  logo: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    align: 'center',
  },
  title: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginRight: theme.spacing(1),
    align: 'center',
    background: 'linear-gradient(45deg, #00695c 30%, #439889 90%)'
  },
  subTitle: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    align: 'center',
    background: 'linear-gradient(45deg, #00695c 30%, #439889 90%)'
  },
  content: {
    padding: theme.spacing(2),
    align: 'left',
  },
  sider: {
    align: 'left',
  },
  siderMenu: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    margin: 0,
    align: 'left',
  },
  main: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    align: 'left',
  },
  appBar: {
    margin: 0,
    align: 'left',
  },
  caption: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    align: 'center',
  },
  footer: {
    padding: theme.spacing(2),
    align: 'center',
    background: 'linear-gradient(45deg, #66BB6A 30%, #A5D6A7 90%)'
  },
  copyright: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    align: 'center',
    background: 'linear-gradient(45deg, #4CAF50 30%, #439889 90%)'
  },
  author: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginRight: theme.spacing(1),
    align: 'center',
    background: 'linear-gradient(45deg, #4CAF50 30%, #439889 90%)'
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    background: 'linear-gradient(45deg, #003d33 30%, #439889 90%)'
  }
})

export { theme, useStyles }
