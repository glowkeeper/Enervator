import * as React from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

// A custom theme for this app
let theme = createMuiTheme({
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
      fontFamily: "\"Roboto\", \"Helvetica Neue\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 1)"
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 1)"
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 1)"
    },
    h4: {
      fontSize: "1.1rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 1)"
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 0.92)"
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 0.87)"
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 0.77)"
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 0.54)"
    },
    button: {
      fontSize: "0.875rem",
      textTransform: "uppercase",
      fontWeight: 500,
      fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      color: "rgba(0, 0, 0, 0.87)"
    }
  },
  palette: {
    type: 'dark',
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    background: {
      default: '#E3F2FD',
    },
    primary: {
      light: '#BBDEFB',
      main: '#42A5F5',
      dark: '#2962FF',
      contrastText: '#000000',
    },
    secondary: {
      light: '#C8E6C9',
      main: '#66BB6A',
      dark: '#2E7D32',
      contrastText: '#000000',
    },
    error: {
      light: '#C8E6C9',
      main: '#66BB6A',
      dark: '#2E7D32',
      contrastText: '#000000',
    },
  }
})

theme = responsiveFontSizes(theme)

/*
typography: {
  fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",, responsiveFontSizes
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  headline: {
    fontSize: "1.2rem",
    fontWeight: 400,
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: "1.7em",
    color: "rgba(0, 0, 0, 1)"
  },
  title: {
    fontSize: "1.1125rem",
    fontWeight: 500,
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: "1.6em",
    color: "rgba(0, 0, 0, 0.97)"
  },
  subheading: {
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: "1.5em",
    color: "rgba(0, 0, 0, 0.92)"
  },
  body1: {
    fontSize: "0.875rem",
    fontWeight: 400,
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: "1.46429em",
    color: "rgba(0, 0, 0, 0.87)"
  },
  body2: {
    fontSize: "0.8rem",
    fontWeight: 400,
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: "1.4em",
    color: "rgba(0, 0, 0, 0.77)"
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 400,
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    lineHeight: "1.375em",
    color: "rgba(0, 0, 0, 0.54)"
  },
  button: {
    fontSize: "0.875rem",
    textTransform: "uppercase",
    fontWeight: 500,
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    color: "rgba(0, 0, 0, 0.87)"
  }
},
*/

export { theme }
