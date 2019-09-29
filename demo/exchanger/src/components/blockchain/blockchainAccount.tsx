import { Store } from 'redux'

import { AccountProps } from '../../store/blockchain/account/types'

import { addAccount } from '../../store/blockchain/account/actions'

interface ChainProps {
  store: Store
}

export const setAccount = async (props: ChainProps) => {

  const store = props.store
  const state = store.getState()
  const provider = state.chainInfo.data.provider
  //console.log('Provider ', provider)
  if ( provider.hasOwnProperty('connection') ) {

    const signer = provider.getSigner()
    const account = await signer.getAddress()
    const accountData: AccountProps = {
      data: {
        account: account
      }
    }
    //console.log('Adding account ', account)
    const add = addAccount as Function
    store.dispatch(add(accountData))
  }
}
