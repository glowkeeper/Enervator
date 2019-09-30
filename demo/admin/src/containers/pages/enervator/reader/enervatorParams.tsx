import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { ethers } from 'ethers'
import Markdown from 'react-markdown'

import { getDictEntries } from '../../../../components/io/dict'

import { initialise } from '../../../../store/enervator/reader/actions'
import { getEnervatorReport } from '../../../../store/enervator/reader/enervatorParams/actions'

import { ApplicationState } from '../../../../store'
import { ActionProps } from '../../../../store/types'
import { EnervatorReportProps } from '../../../../store/enervator/types'


import { EnervatorReport as EnervatorReportStrings } from '../../../../utils/strings'

interface EnervatorProps {
  enervatorReport: EnervatorReportProps
}

interface EnervatorDispatchProps {
  initialise: () => void
  getEnervatorReport: () => void
}

type EnervatorReaderProps =  EnervatorProps & EnervatorDispatchProps

class EnervatorReport extends React.Component<EnervatorReaderProps> {

  public static defaultProps = {
    initialise: () => {},
    getEnervatorReport: () => {}
  }

  constructor (props: EnervatorReaderProps) {
    super(props)
  }

  componentDidMount() {
    this.props.initialise()
    this.props.getEnervatorReport()
  }

  render() {

    const xs = getDictEntries(this.props.enervatorReport)

    return (
      <div>
        <h2>{EnervatorReportStrings.headingEnervatorReader}</h2>
        <hr />
        <h3>{EnervatorReportStrings.enervatorDetails}</h3>
        <Markdown escapeHtml={false} source={xs} />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState): EnervatorProps => {
  //console.log(state.orgReader)
  return {
    enervatorReport:  state.reader.data as EnervatorReportProps
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): EnervatorDispatchProps => {
  return {
    initialise: () => dispatch(initialise()),
    getEnervatorReport: () => dispatch(getEnervatorReport())
  }
}

export const EnervatorReader = connect<EnervatorProps, EnervatorDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(EnervatorReport)
