import * as React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuItem from '@material-ui/core/MenuItem'

import IconButton from '@material-ui/core/IconButton'
import ListAlt from '@material-ui/icons/ListAlt'
import List from '@material-ui/icons/List'
import Home from '@material-ui/icons/Home'
import Info from '@material-ui/icons/Info'
import Help from '@material-ui/icons/Help'
import Panorama from '@material-ui/icons/Panorama'
import Create from '@material-ui/icons/Create'

import { Paths } from '../utils/strings'
import { Paths as PathConfig } from '../utils/config'

class Bar extends React.Component {

  render() {

    return (
      <div>
        <AppBar position='static'>
          <Toolbar variant="dense">
            <Link to={PathConfig.home}>
              <MenuItem>
                <IconButton aria-label={Paths.home}>
                  <Home />
                </IconButton>
                {Paths.home}
              </MenuItem>
            </Link>
            <Link to={PathConfig.blockchain}>
              <MenuItem>
                <IconButton aria-label={Paths.blockchain}>
                  <ListAlt />
                </IconButton>
                {Paths.blockchain}
              </MenuItem>
            </Link>
            <Link to={PathConfig.writer}>
              <MenuItem>
                <IconButton aria-label={Paths.writer}>
                  <Create />
                </IconButton>
                {Paths.writer}
              </MenuItem>
            </Link>
            <Link to={PathConfig.reader}>
              <MenuItem>
                <IconButton aria-label={Paths.reader}>
                  <List />
                </IconButton>
                {Paths.reader}
              </MenuItem>
            </Link>
            <Link to={PathConfig.overview}>
              <MenuItem>
                <IconButton aria-label={Paths.overview}>
                  <Panorama />
                </IconButton>
                {Paths.overview}
              </MenuItem>
            </Link>
            <Link to={PathConfig.help}>
              <MenuItem>
                <IconButton aria-label={Paths.help}>
                  <Help />
                </IconButton>
                {Paths.help}
              </MenuItem>
            </Link>
            <Link to={PathConfig.about}>
              <MenuItem>
                <IconButton aria-label={Paths.about}>
                  <Info />
                </IconButton>
                {Paths.about}
              </MenuItem>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export const ApplicationBar = Bar
