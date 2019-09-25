import * as React from 'react'

import createStyles from '@material-ui/core/styles/createStyles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
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
  palette: {
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
  },
})

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit * 2,
      backgroundColor: theme.palette.background.default,
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      textAlign: 'center',
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      fontFamily: theme.typography.body1.fontFamily,
      lineHeight: theme.typography.body1.lineHeight,
      color: theme.typography.body1.color
    },
    header: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      fontSize: theme.typography.headline.fontSize,
      fontWeight: theme.typography.headline.fontWeight,
      fontFamily: theme.typography.headline.fontFamily,
      lineHeight: theme.typography.headline.lineHeight,
      textAlign: 'center',
      color: theme.typography.title.color,
      backgroundColor: theme.palette.primary.main
    },
    title: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      fontSize: theme.typography.headline.fontSize,
      fontWeight: theme.typography.headline.fontWeight,
      fontFamily: theme.typography.headline.fontFamily,
      lineHeight: theme.typography.headline.lineHeight,
      textAlign: 'center',
      color: theme.typography.title.color,
      backgroundColor: theme.palette.primary.main
    },
    subHeader: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      fontFamily: theme.typography.subheading.fontFamily,
      lineHeight: theme.typography.subheading.lineHeight,
      textAlign: 'center',
      color: theme.typography.subheading.color,
      backgroundColor: theme.palette.primary.main
    },
    content: {
      padding: theme.spacing.unit * 2,
      margin: theme.spacing.unit,
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.body1.fontWeight,
      fontFamily: theme.typography.body1.fontFamily,
      lineHeight: theme.typography.body1.lineHeight,
      color: theme.typography.body1.color,
      backgroundColor: theme.palette.primary.light
    },
    sider: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      textAlign: 'left',
      fontSize: theme.typography.title.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      fontFamily: theme.typography.subheading.fontFamily,
      lineHeight: theme.typography.subheading.lineHeight,
      color: theme.typography.subheading.color,
      backgroundColor: theme.palette.primary.light
    },
    siderMenu: {
      padding: 0,
      margin: 0,
      textAlign: 'left',
      fontSize: theme.typography.title.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      fontFamily: theme.typography.subheading.fontFamily,
      lineHeight: theme.typography.subheading.lineHeight,
      color: theme.typography.subheading.color,
      backgroundColor: theme.palette.primary.light
    },
    appBar: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      textAlign: 'left',
      fontSize: theme.typography.title.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      fontFamily: theme.typography.subheading.fontFamily,
      lineHeight: theme.typography.subheading.lineHeight,
      color: theme.typography.subheading.color,
      backgroundColor: theme.palette.primary.main
    },
    caption: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      textAlign: 'center',
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.caption.fontWeight,
      fontFamily: theme.typography.caption.fontFamily,
      lineHeight: theme.typography.caption.lineHeight,
      color: theme.typography.caption.color,
      backgroundColor: theme.palette.primary.light
    },
    footer: {
      padding: theme.spacing.unit,
      margin: theme.spacing.unit,
      textAlign: 'center',
      fontSize: theme.typography.subheading.fontSize,
      fontWeight: theme.typography.subheading.fontWeight,
      fontFamily: theme.typography.subheading.fontFamily,
      lineHeight: theme.typography.subheading.lineHeight,
      backgroundColor: theme.palette.primary.main
    },
    button: {
      margin: theme.spacing.unit
    },
  })

function withTheme<P>(Component: React.ComponentType<P>) {
  function WithTheme(props: P) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithTheme
}

export { withTheme, styles }
