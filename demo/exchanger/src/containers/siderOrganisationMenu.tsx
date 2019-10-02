import * as React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../store'
import { ActionProps } from '../store/types'

import { useStyles } from '../styles/theme'

import { initialise } from '../store/exchanger/actions'

import IconButton from '@material-ui/core/IconButton'
import Create from '@material-ui/icons/Create'
import List from '@material-ui/icons/List'

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
          <h4>{App.headingExchanger}</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.siderMenu}>
          <MenuList>
            <Link
              className={classes.link}
              to={PathConfig.deposit}
              onClick={() => {
                props.initialise()
              }} >
              <MenuItem>
                {Paths.deposit}
              </MenuItem>
            </Link>
            <Link
              className={classes.link}
              to={PathConfig.buy}
              onClick={() => {
                props.initialise()
              }} >
              <MenuItem>
                {Paths.buy}
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
