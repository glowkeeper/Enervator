import * as React from 'react'

import Markdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { SiderOrganisationMenu } from './siderOrganisationMenu'
import { ApplicationBar } from './appBar'
import { Content } from './content'
import { App } from '../utils/strings'

import { Logo } from '../../images/Logo.png'

//import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
//import { withTheme, styles } from '../styles/theme'
import { withTheme } from '../styles/theme'

class MainLayout extends React.Component {

  render() {

    return (
      <div>
        <Paper>
          <Paper>
            <Grid container>
              <Grid item xs={12} sm={1}>
                <img src={Logo}/>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Paper>
                  <ApplicationBar />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Paper>
                  <h1>{App.title}</h1>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          <Paper>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={3}>
                <Paper>
                  <SiderOrganisationMenu />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Paper>
                  <Content />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
          <Paper>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <Paper>
                  <Markdown escapeHtml={false} source={App.author} />
                </Paper>
              </Grid>
              <Grid item xs={8}>
              <Paper>
                <h3>{App.tagline}</h3>
              </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>
                  <Markdown escapeHtml={false} source={App.copyright} />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </div>
    )
  }
}

export const Main = withTheme(MainLayout)
