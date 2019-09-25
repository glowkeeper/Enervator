import * as React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ApplicationState } from '../store'
import { ActionProps } from '../store/types'

import { initialise } from '../store/IATI/actions'
import { setKey } from '../store/helpers/keys/actions'
import { Keys, KeyTypes } from '../store/helpers/keys/types'

import IconButton from '@material-ui/core/IconButton'
import Create from '@material-ui/icons/Create'
import List from '@material-ui/icons/List'

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
import { withTheme, styles } from '../styles/theme'

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

class Sider extends React.Component<WithStyles<typeof styles> & DispatchProps> {

  render() {

    return (
      <div>
      
        <ExpansionPanel className={this.props.classes.siderMenu}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h4>{App.headingActivitiesWriter}</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.siderMenu}>
            <MenuList>
              <Link
                to={PathConfig.activitiesWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITIES})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activitiesWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activitiesWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITY})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityAdditionalWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYADDITIONAL})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityAdditionalWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityAdditionalWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityDatesWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYDATE})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityDatesWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityDatesWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityParticipatingOrgWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYPARTICIPATINGORG})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityParticipatingOrgWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityParticipatingOrgWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activitySectorsWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYSECTOR})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activitySectorsWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activitySectorsWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityBudgetsWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYBUDGET})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityBudgetsWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityBudgetsWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityTerritoriesWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYTERRITORY})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityTerritoriesWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityTerritoriesWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityTransactionsWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYTRANSACTION})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityTransactionsWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityTransactionsWriter}
                </MenuItem>
              </Link>
              <Link
                to={PathConfig.activityRelatedActivityWriter}
                onClick={() => {
                  this.props.initialise()
                  this.props.setKey({key: '', keyType: KeyTypes.ACTIVITYRELATEDACTIVITY})
                }} >
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityRelatedActivitiesWriter}>
                    <Create />
                  </IconButton>
                  {Paths.activityRelatedActivitiesWriter}
                </MenuItem>
              </Link>
            </MenuList>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={this.props.classes.siderMenu}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h4>{App.headingActivitiesUpdater}</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.siderMenu}>
            <MenuList>
              <Link to={PathConfig.activitiesUpdater}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activitiesUpdater}>
                    <Create />
                  </IconButton>
                  {Paths.activitiesUpdater}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityUpdater}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityUpdater}>
                    <Create />
                  </IconButton>
                  {Paths.activityUpdater}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityDateUpdater}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityDateUpdater}>
                    <Create />
                  </IconButton>
                  {Paths.activityDateUpdater}
                </MenuItem>
              </Link>
            </MenuList>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={this.props.classes.siderMenu}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <h4>{App.headingActivitiesReader}</h4>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={this.props.classes.siderMenu}>
            <MenuList>
              <Link to={PathConfig.activitiesReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activitiesReader}>
                    <List />
                  </IconButton>
                  {Paths.activitiesReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityReader}>
                    <List />
                  </IconButton>
                  {Paths.activityReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityAdditionalReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityAdditionalReader}>
                    <List />
                  </IconButton>
                  {Paths.activityAdditionalReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityDatesReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityDatesReader}>
                    <List />
                  </IconButton>
                  {Paths.activityDatesReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityParticipatingOrgReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityParticipatingOrgReader}>
                    <List />
                  </IconButton>
                  {Paths.activityParticipatingOrgReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activitySectorsReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activitySectorsReader}>
                    <List />
                  </IconButton>
                  {Paths.activitySectorsReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityBudgetsReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityBudgetsReader}>
                    <List />
                  </IconButton>
                  {Paths.activityBudgetsReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityTerritoriesReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityTerritoriesReader}>
                    <List />
                  </IconButton>
                  {Paths.activityTerritoriesReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityTransactionsReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityTransactionsReader}>
                    <List />
                  </IconButton>
                  {Paths.activityTransactionsReader}
                </MenuItem>
              </Link>
              <Link to={PathConfig.activityRelatedActivityReader}>
                <MenuItem>
                  <IconButton className={this.props.classes.button} aria-label={Paths.activityRelatedActivitiesReader}>
                    <List />
                  </IconButton>
                  {Paths.activityRelatedActivitiesReader}
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

export const SiderOrganisationMenu = withTheme(withStyles(styles)(connect<null, DispatchProps, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(Sider)))
