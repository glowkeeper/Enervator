import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import Markdown from 'react-markdown'

import { ApplicationState } from '../../store'
import { ActionProps, TxReport } from '../../store/types'
import { Keys, KeyTypes } from '../../store/helpers/keys/types'

import { initialise  as initialiseRead } from '../../store/IATI/IATIReader/actions'
import { initialise as txInit } from '../../store/IATI/IATIWriter/actions'
//import { initialise as readDataInit } from '../../store/IATI/IATIReader/actions'
import { setKey } from '../../store/helpers/keys/actions'

import { Transaction } from '../../utils/strings'
import { Helpers } from '../../utils/config'

interface TransactionProps {
  submittingFunc: Function,
  resettingFunc: Function
  tx: TxReport
}

interface TransactionDispatchProps {
  setKey: (keyProps: Keys) => void
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
      this.props.setKey({key: '', keyType: KeyTypes.NEW})
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
    tx: state.writerForms.data as TxReport
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<ApplicationState, any, ActionProps>): TransactionDispatchProps => {
  return {
    initialiseTX: () => dispatch(txInit()),
    initialiseRead: () => dispatch(initialiseRead()),
    setKey: (keyProps: Keys) => dispatch(setKey(keyProps))
  }
}

export const TransactionHelper = connect<TransactionProps, TransactionDispatchProps, {}, ApplicationState>(
  mapStateToProps,
  mapDispatchToProps
)(TX)
