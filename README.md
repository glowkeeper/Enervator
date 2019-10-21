# Enervator

![](/images/Enervator75x75.png) | A cryptocurrency stablecoin, with the token symbol EOR, whose aim is to incentivise energy efficiency.
---|---

You can read some of the details as to how Enervator incentivises energy efficiency by reading [The Value of Enervator](/docs/value.md).

_*Enervator is described in more detail in [Steve Huckle's PhD Thesis](https://glowkeeper.github.io/PhDWorks/). Some of the information here borrows excerpts from that work._

_**The name Enervator is a reference to the token's relation to energy. The word 'enervator' is a noun meaning 'something that enervates', where 'enervates' is a verb, meaning to weaken. So in this context, the token aims to decrease energy consumption._

## Table of Contents

- [Usage](#usage)
  - [Deployed Address](#deployed-address)
  - [Demo Applications](#demo-applications)
  - [Demo Dependencies](#demo-dependencies)  
- [Install](#install)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [Contributing](#contributing)
- [License](#license)

## Usage

Below shows you how to use the demo' applications that showcase [Enervator](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530).

### Deployed Address

Enervator is deployed at address [0x5483b2996BBa07330E188Fe10BB101d4c1Ac8530](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530) on Ethereum's Rinkeby Test Network.

### Demo Applications

![](/images/enerchanger.png)

There are two demo' applications for showcasing [Enervator](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530). However, to run them, you must install the dependencies (see instructions below):

1. [Eneradmin](http://bcd1e0c422401c3591fb3a347aaa0d73b7faff797a21b15edabf0ca214157ccb)
2. [Enerchanger](http://795f83fa1356cd7d00e5cfe8f1a93f32c55127684c6fc4cb8ff89a32e000016b)

[Eneradmin](http://bcd1e0c422401c3591fb3a347aaa0d73b7faff797a21b15edabf0ca214157ccb) is a tool for administering [Enervator](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530). You do not have permissions to set any parameters with [Eneradmin](http://bcd1e0c422401c3591fb3a347aaa0d73b7faff797a21b15edabf0ca214157ccb), but you will be able to read both the token's parameters and any exchange rates that have been specified.

[Enerchanger](http://795f83fa1356cd7d00e5cfe8f1a93f32c55127684c6fc4cb8ff89a32e000016b) is a proof of concept that simulates depositing cash and buying EOR, the [Enervator](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530) token. To use the tool, first deposit some cash (imagine that's a PayPal link or some such like), then use that deposit to buy some EOR.

#### Demo Dependencies

To use [Eneradmin](http://bcd1e0c422401c3591fb3a347aaa0d73b7faff797a21b15edabf0ca214157ccb) and [Enerchanger](http://795f83fa1356cd7d00e5cfe8f1a93f32c55127684c6fc4cb8ff89a32e000016b), you will need to be running [Firefox](https://www.mozilla.org/) with the [Dat P2P Protocol](https://addons.mozilla.org/en-GB/firefox/addon/dat-p2p-protocol/) and [MetaMask](https://metamask.io/) extensions installed. [MetaMask](https://metamask.io/) should be pointing at the Rinkeby Test Network, and you will need a few test Ether in your [MetaMask](https://metamask.io/) wallet - you can get those from the [Rinkeby Faucet](https://faucet.rinkeby.io/).

For [MetaMask](https://metamask.io/) to see any [Enervator](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530) tokens you buy, you will need to add the [token contract address](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530) to your [MetaMask](https://metamask.io/) account. To do so,  within [MetaMask](https://metamask.io/), go to your account's menu, click on _Add Token_, then specify the custom address _0x5483b2996bba07330e188fe10bb101d4c1ac8530_ - if you've done that correctly, [MetaMask](https://metamask.io/) will automagically find the token's symbol and precision.

## Install

To install locally, clone this repository, switch to its root directory, then type `npm install`.

## Maintainer

Steve Huckle [Steve Huckle](https://glowkeeper.github.io/).

## Thanks

Thanks to the people at [OpenZeppelin](https://openzeppelin.com/), both for providing [ERC777](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/ERC777.sol) and helping when [the maintainer](https://glowkeeper.github.io/) was struggling to get his implementation of ERC777 working.

## Contributing

Contributions presently unwelcome, since this forms part of [Steve Huckle's PhD Thesis](https://glowkeeper.github.io/PhDWorks/), which is unpublished. However, that will change with publication of that work, so if you are interested in [Enervator](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530), please email [Steve Huckle](https://glowkeeper.github.io/).

## License

Presently, there are no circumstances where you may copy or reuse anything in this repository, since it forms part of [Steve Huckle's PhD Thesis](https://glowkeeper.github.io/PhDWorks/), which is unpublished. However, that will change with publication of that work, so if you are interested in [Enervator](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530), please email [Steve Huckle](https://glowkeeper.github.io/).
