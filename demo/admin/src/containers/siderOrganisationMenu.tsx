import * as React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../store'
import { ActionProps } from '../store/types'

import { useStyles } from '../styles/theme';

import { initialise } from '../store/enervator/actions'

import IconButton from '@material-ui/core/IconButton'
import Create from '@material-ui/icons/Create'
import List from '@material-ui/icons/List'

//import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
//import { withTheme, styles } from '../styles/theme'

import { Paths, App } from '../utils/strings'
import { Paths as PathConfig } from '../utils/config'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface DispatchProps {
  initialise: () => void
}

const defaultProps: DispatchProps = {
  initialise: () => {}
}

const Sider = (props: DispatchProps = defaultProps) => {

  const classes = useStyles()

  return (
    <div>
      <ExpansionPanel className={classes.siderMenu}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h4>{App.headingWriter}</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.siderMenu}>
          <MenuList>
            <Link
              className={classes.link}
              to={PathConfig.exchangeRateWriter}
              onClick={() => {
                props.initialise()
              }} >
              <MenuItem>
                <IconButton aria-label={Paths.exchangeRateWriter}>
                  <Create />
                </IconButton>
                {Paths.exchangeRateWriter}
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              to={PathConfig.supplyWriter}
              onClick={() => {
                props.initialise()
              }} >
              <MenuItem>
                <IconButton aria-label={Paths.supplyWriter}>
                  <Create />
                </IconButton>
                {Paths.supplyWriter}
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              to={PathConfig.TPESWriter}
              onClick={() => {
                props.initialise()
              }} >
              <MenuItem>
                <IconButton aria-label={Paths.TPESWriter}>
                  <Create />
                </IconButton>
                {Paths.TPESWriter}
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              to={PathConfig.PerCapitaEnergyWriter}
              onClick={() => {
                props.initialise()
              }} >
              <MenuItem>
                <IconButton aria-label={Paths.PerCapitaEnergyWriter}>
                  <Create />
                </IconButton>
                {Paths.PerCapitaEnergyWriter}
              </MenuItem>
            </Link>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.siderMenu}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h4>{App.headingReader}</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.siderMenu}>
          <MenuList>
            <Link
              className={classes.link}
              to={PathConfig.exchangeRatesReader}
              onClick={() => {
                props.initialise()
              }} >
              <MenuItem>
                <IconButton aria-label={Paths.exchangeRatesReader}>
                  <List />
                </IconButton>
                {Paths.exchangeRatesReader}
              </MenuItem>
            </Link>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): DispatchProps => {
  return {
    initialise: () => dispatch(initialise())
  }
}

export const SiderOrganisationMenu = connect<null, DispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(Sider)
