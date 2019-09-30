import * as React from 'react'
import { Link } from 'react-router-dom'

import { useStyles } from '../styles/theme';

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

export const ApplicationBar = () => {

  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar variant="dense">
          <Link className={classes.link} to={PathConfig.home}>
            <MenuItem>
              <IconButton aria-label={Paths.home}>
                <Home />
              </IconButton>
              {Paths.home}
            </MenuItem>
          </Link>
          <Link className={classes.link} to={PathConfig.blockchain}>
            <MenuItem>
              <IconButton aria-label={Paths.blockchain}>
                <ListAlt />
              </IconButton>
              {Paths.blockchain}
            </MenuItem>
          </Link>
          <Link className={classes.link} to={PathConfig.writer}>
            <MenuItem>
              <IconButton aria-label={Paths.writer}>
                <Create />
              </IconButton>
              {Paths.writer}
            </MenuItem>
          </Link>
          <Link className={classes.link} to={PathConfig.reader}>
            <MenuItem>
              <IconButton aria-label={Paths.reader}>
                <List />
              </IconButton>
              {Paths.reader}
            </MenuItem>
          </Link>
          <Link className={classes.link} to={PathConfig.overview}>
            <MenuItem>
              <IconButton aria-label={Paths.overview}>
                <Panorama />
              </IconButton>
              {Paths.overview}
            </MenuItem>
          </Link>
          <Link className={classes.link} to={PathConfig.help}>
            <MenuItem>
              <IconButton aria-label={Paths.help}>
                <Help />
              </IconButton>
              {Paths.help}
            </MenuItem>
          </Link>
          <Link className={classes.link} to={PathConfig.about}>
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
