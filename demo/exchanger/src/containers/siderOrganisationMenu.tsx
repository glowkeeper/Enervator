import * as React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../store'
import { ActionProps } from '../store/types'

import { initialise } from '../store/enervator/actions'
import { setKey } from '../store/helpers/keys/actions'
import { Keys, KeyTypes } from '../store/helpers/keys/types'

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
  setKey: (keyProps: Keys) => void
}

class Sider extends React.Component<DispatchProps> {

  public static defaultProps = {
    initialise: () => {},
    setKey: (keyProps: Keys) => {}
  }

  render() {

    return (
      <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h4>{App.headingDepositor}</h4>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MenuList>
            <Link
              to={PathConfig.home}
              onClick={() => {
                this.props.initialise()
                this.props.setKey({key: '', keyType: KeyTypes.ACTIVITIES})
              }} >
              <MenuItem>
                <IconButton aria-label={Paths.home}>
                  <Create />
                </IconButton>
                {Paths.home}
              </MenuItem>
            </Link>
          </MenuList>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): DispatchProps => {
  return {
    initialise: () => dispatch(initialise()),
    setKey: (keyProps: Keys) => dispatch(setKey(keyProps))
  }
}

export const SiderOrganisationMenu = connect<null, DispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(Sider)
