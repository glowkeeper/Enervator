import { Paths as configPaths } from './config'

class App {

  static readonly token='Enervator'
  static readonly symbol='EOR'
  static readonly title='Enerchanger'
  static readonly tagline='Using Blockchain Technology to Incentivise Energy Efficiency'
  static readonly copyright='© 2019'
  static readonly place ='[University of Sussex](https://www.sussex.ac.uk/)'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
  static readonly version='0.0.1'

  static readonly headingExchanger = `Exchange`
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly blockchain = 'Blockchain Data'
  static readonly about = 'About'
  static readonly overview = 'Overview'
  static readonly help = 'Help'

  static readonly deposit = 'Deposit'
  static readonly buy = 'Buy'
}

class Blockchain {

  static readonly heading = 'Blockchain Data'
}

class Home {

  static readonly heading = `${App.title} Home`

  static readonly info = `**${App.title}** is a proof of concept that showcases **${App.token}** by demonstrating the possibility of exchanging FIAT cash for **${App.symbol}** (${App.token}'s token symbol).<br /><br />The _${Paths.blockchain}_ link, above, gives details of the blockchain in use.<br /><br />The _${Paths.overview}_ link describes the origins of **${App.token}**.<br /><br />The _${Paths.help}_ link gives brief instructions as to how to use **${App.title}**.<br /><br />The _${Paths.about}_ link gives version, author and copyright information.`
}

class About {

  static readonly heading = `About ${App.title}`

  static readonly info = `**${App.title}** version ${App.version}.<br /><br />A proof of concept showcasing **${App.token}**.<br /><br />Created by ${App.author} at the ${App.place}.<br /><br />For more information about **${App.token}**, please contact s dot huckle at sussex dot ac dot uk.`
}

class Overview {

  static readonly heading = `Overview of ${App.title}`

  static readonly info = `**${App.token}** is the result of ${App.author}\'s PhD at the ${App.place}.`
}

class Help {

  static readonly heading = `${App.title} Help`

  static readonly info = `**${App.title}**  is a proof of concept that showcases **${App.token}** by simulating the deposit of FIAT currency and its exchange for **${App.symbol}**.<br /><br />To get **${App.symbol}**, click on the _${App.headingExchanger} drop down menu_ in the sidebar, and first use the ${Paths.deposit} link to deposit some cash (imagine that's a PayPal button or some such like). Then click on the ${Paths.buy} link to use that deposit to buy some **${App.symbol}**.<br /><br />**${App.title}** depends on [MetaMask](https://metamask.io/), which should be pointing at the Rinkeby Test Network. You will need a few test Ether in your [MetaMask](https://metamask.io/) wallet - you can get those from the [Rinkeby Faucet](https://faucet.rinkeby.io/).<br /><br /> For [MetaMask](https://metamask.io/) to see any **${App.symbol}** tokens you buy, you will need to add the [token contract address](https://rinkeby.etherscan.io/token/0x5483b2996bba07330e188fe10bb101d4c1ac8530) to your [MetaMask](https://metamask.io/) account. To do so, within [MetaMask](https://metamask.io/), go to your account's menu, click on _Add Token_, then specify the custom address _0x5483b2996bba07330e188fe10bb101d4c1ac8530_.`
}

class Transaction {

  static readonly heading = "Transaction Details"

  static readonly hash = 'Transaction Hash'
  static readonly summary = 'Transaction Summary'
  static readonly success = 'Submitted Successfully!'
  static readonly fail = 'Submission Failed!'
}

class Deposit {

  static readonly heading = "Deposit"

  static readonly currency = "Currency"
  static readonly amount = "Amount"

}

class Buy {

  static readonly heading = "Buy"

  static readonly depositRef = "Deposit Reference"
  static readonly currency = "Currency"
  static readonly code = "Currency"
  static readonly amount = "Amount"
  static readonly rate = "Currency to US$ Exchange Rate"
  static readonly unitValue = "EOR US$ Value"
  static readonly eORRate = "Currency to EOR Exchange Rate"
  static readonly amountEOR = "Amount EOR"

}

export { App,
         Paths,
         Blockchain,
         Home,
         About,
         Overview,
         Help,
         Transaction,
         Deposit,
         Buy
       }
