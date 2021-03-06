import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import Markdown from 'react-markdown'

import { ApplicationState } from '../../store'
import { ActionProps, TxReport } from '../../store/types'

import { initialise  as initialiseRead } from '../../store/exchanger/reader/actions'
import { initialise as txInit } from '../../store/exchanger/writer/actions'

import { Transaction } from '../../utils/strings'
import { Helpers } from '../../utils/config'

interface TransactionProps {
  submittingFunc: Function,
  resettingFunc: Function
  tx: TxReport
}

interface TransactionDispatchProps {
  initialiseRead: () => void
  initialiseTX: () => void
}

type TxProps = TransactionProps & TransactionDispatchProps

class TX extends React.Component<TxProps> {

  constructor (props: TxProps) {
   super(props)
  }

  componentDidMount() {
    this.props.initialiseTX()
  }

  componentDidUpdate(previousProps: TxProps) {
    if(previousProps.tx != this.props.tx &&
       typeof this.props.tx != 'undefined' ) {
      //console.log('Type check!: ', typeof this.props.tx)
      this.props.submittingFunc(false)
      this.props.resettingFunc()
      this.props.initialiseRead()
    }
  }

  render() {

    let xs = ""
    //console.log('transaction: ', this.props.tx)
    if (typeof  this.props.tx != "undefined" ) {
      Object.keys(this.props.tx).forEach((tXHash) => {
        const tx = this.props.tx[tXHash]
        xs += `**${Transaction.summary}**: ${tx.summary}<br /><br />`
        if (tXHash != "-1" ) {
          //console.log('transaction: ', this.props.tx)
          Object.entries(tx.info).forEach((entry) => {
            //console.log(entry[0])
            if ( (entry[0] != "data") &&
                 (entry[0] != "raw") &&
                  (entry[0] != "wait") ) {
              xs += `**${entry[0]}**: ${entry[1]}<br />`
            }
          })
        }
      })
    }

    return (
      <React.Fragment>
        <hr />
        <h3>{Transaction.heading}</h3>
        <Markdown escapeHtml={false} source={xs} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: ApplicationState): TransactionProps => {
  //console.log(state.orgReader)
  return {
    submittingFunc: state.forms.data.submitFunc,
    resettingFunc: state.forms.data.resetFunc,
    tx: state.writer.data as TxReport
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): TransactionDispatchProps => {
  return {
    initialiseTX: () => dispatch(txInit()),
    initialiseRead: () => dispatch(initialiseRead())
  }
}

export const TransactionHelper = connect<TransactionProps, TransactionDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(TX)
