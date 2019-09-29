import Web3 from 'web3'
import { ethers } from 'ethers'

import { Store } from 'redux'

import { Provider } from 'ethers/providers/abstract-provider'
import { Blockchain } from '../../utils/config'

import { ChainDataProps } from '../../store/blockchain/data/types'
import { addData } from '../../store/blockchain/data/actions'

interface ChainProps {
  store: Store
}

export const setProvider = async (props: ChainProps) => {

  let blockchainProvider: Provider
  let ethereum = (window as any).ethereum
  let web3 = (window as any).web3

  if (ethereum) {
    //console.log('New MetaMask!')
    web3 = new Web3(ethereum)
    blockchainProvider = new ethers.providers.Web3Provider(web3.currentProvider)
    await ethereum.enable()
  } else if (typeof web3 !== 'undefined') {
    //console.log('In legacy web3 provider')
    blockchainProvider = new ethers.providers.Web3Provider(web3.currentProvider)
  } else {
    const host = Blockchain.host
    const port = Blockchain.port
    const provider = host + ":" + port
    const network = Blockchain.network
    blockchainProvider = new ethers.providers.JsonRpcProvider(provider, network)
  }

  const chainObj: any = await blockchainProvider.getNetwork()
  let ENSAddress = ""
  if (typeof chainObj.ensAddress != 'undefined') {
    ENSAddress = chainObj.ensAddress
  }
  const infoData: ChainDataProps = {
    data: {
      Name: chainObj.name,
      ChainId: chainObj.chainId,
      ENS: ENSAddress,
      provider: blockchainProvider
    }
  }

  const add = addData as Function
  props.store.dispatch(add(infoData))
}
