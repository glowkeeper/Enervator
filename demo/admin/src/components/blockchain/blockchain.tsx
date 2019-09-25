import { Store } from 'redux'
import { Blockchain } from '../../utils/config'

import { setProvider } from './blockchainProvider'
import { setAccount } from './blockchainAccount'
import { setContracts } from './blockchainContracts'

interface SetBlockchainProps {
  store: Store
}

interface  CheckProps {
  accountCheck: number
  contractsCheck: number
  stopCheck: number
}

type StopProps =  SetBlockchainProps & CheckProps

const stop = (props: StopProps) => {

  const state = props.store.getState()
  const provider = state.chainInfo.data.provider

  if ( provider.hasOwnProperty('connection') ) {

    const account = state.chainAccount.data.account
    const orgContract = state.chainContracts.data.contracts.orgs
    if ( (orgContract.hasOwnProperty('getOrganisationExists')) &&
         (account != "" ) ) {
      /* console.log('stopping intervals for account ', account)
      console.log('stopping intervals for contract ', orgContract) */
      clearInterval(props.accountCheck)
      clearInterval(props.contractsCheck)
      clearInterval(props.stopCheck)
    }
  }
}

export const setBlockchain = async (props: SetBlockchainProps) => {

  const store = props.store
  setProvider({store: store})

  let accountInterval = setInterval(() => {
    setAccount({store: store})
  }, Blockchain.checkInterval)

  let contractsInterval = setInterval(() => {
    setContracts({store:store})
  }, Blockchain.checkInterval)

  let stopInterval = setInterval(() => {
    stop({store: store, accountCheck: accountInterval, contractsCheck: contractsInterval, stopCheck: stopInterval})
  }, Blockchain.checkInterval)

}
