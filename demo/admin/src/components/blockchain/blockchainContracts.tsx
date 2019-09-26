import { ethers } from 'ethers'
import { Store } from 'redux'

import { addContracts } from '../../store/blockchain/contracts/actions'
import { ContractProps } from '../../store/blockchain/contracts/types'

import { Contract } from '../../utils/config'

import { EnervatorManager } from '../../../typechain/EnervatorManager'
import { Deposit } from '../../../typechain/Deposit'
import { Forex } from '../../../typechain/Forex'
import { Buy } from '../../../typechain/Buy'
import { Exchanger } from '../../../typechain/Exchanger'

interface ChainProps {
  store: Store
}

export const setContracts = (props: ChainProps) => {

  const store = props.store
  const state = store.getState()
  const provider = state.chainInfo.data.provider

  if ( provider.hasOwnProperty('connection') ) {
    const state = store.getState()
    const orgsContract = state.chainContracts.data.contracts.orgs
    if ( !(orgsContract.hasOwnProperty('getNumOrgs')) ) {

      const signer = provider.getSigner()
      const contractData: ContractProps = {
        data: {
          contracts: {
            enervatorManager: new ethers.Contract( Contract.enervatorManagerAddress,
                                                   Contract.enervatorManagerABI,
                                                   signer) as EnervatorManager,

            deposit: new ethers.Contract( Contract.depositAddress,
                                          Contract.depositABI,
                                          signer) as Deposit,

            forex: new ethers.Contract(Contract.forexAddress,
                                       Contract.forexABI,
                                       signer) as Forex,

            buy: new ethers.Contract(Contract.buyAddress,
                                     Contract.buyABI,
                                     signer) as Buy,

            exchange: new ethers.Contract(Contract.exchangerAddress,
                                          Contract.exchangerABI,
                                          signer) as Exchanger
          }
        }
      }
      //console.log('Setting contracts ', contractData)
      const add = addContracts as Function
      store.dispatch(add(contractData))
    }
  }
}
