import * as React from 'react'
//import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import { ApplicationState } from '../../../store'

//import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles'
//import { withTheme, styles } from '../../../styles/theme'
import { withTheme } from '../../../styles/theme'

//import { fetchRequest, RequestDataAction } from '../../../store/helpers/about/actions'
import { InfoProps } from '../../../store/info/types'
import { InfoTypes } from './types'

interface StateProps {
  type: InfoTypes
}

type AllProps = InfoProps & StateProps

class AppInfo extends React.Component<AllProps> {

  render() {

    return (
      <div>
        <h2>{this.props.title}</h2>
        <Markdown escapeHtml={false} source={this.props.data} />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState, ownProps: StateProps): InfoProps => {
  switch (ownProps.type) {
    case InfoTypes.HOME:
      return { title: state.info.data.home.title, data: state.info.data.home.data }
    case InfoTypes.ABOUT:
      return { title: state.info.data.about.title, data: state.info.data.about.data }
    case InfoTypes.OVERVIEW:
      return { title: state.info.data.overview.title, data: state.info.data.overview.data }
    case InfoTypes.HELP:
      return { title: state.info.data.help.title, data: state.info.data.help.data }
    default:
      return { title: state.info.data.home.title, data: state.info.data.home.data }
  }
}

export const Info = withTheme(connect<InfoProps, {}, StateProps, ApplicationState>(
  mapStateToProps
)(AppInfo))
