import * as React from 'react'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'

import { ApplicationState } from '../../../store'

import { get } from '../../../components/io/list'

import { Blockchain } from '../../../utils/strings'

interface InfoProps {
  propertiesList: object
}

class Info extends React.Component<InfoProps> {

  render() {

    const chainInfo = get(this.props.propertiesList)

    return (
      <div>
        <h2>{Blockchain.heading}</h2>
        <Markdown escapeHtml={false} source={chainInfo} />
      </div>
    )
  }
}

const mapStateToProps = (state: ApplicationState): InfoProps => {
  const propertiesList = {
      Network: state.chainInfo.data.Name,
      ChainId: state.chainInfo.data.ChainId,
      ENS: state.chainInfo.data.ENS,
      Account: state.chainAccount.data.account
  }
  const properties = {
    propertiesList: propertiesList
  }
  return properties
}

export const BlockchainInfo = connect<InfoProps, {}, {}, ApplicationState>(
  mapStateToProps
)(Info)
