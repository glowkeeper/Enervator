import { Paths as configPaths } from './config'

class App {

  static readonly token='Enervator'
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

  static readonly info = `Use **${App.title}** to exchange FIAT cash for **${App.token}**.<br /><br />The _${Paths.blockchain}_ link, above, gives details of the blockchain in use.<br /><br />The _${Paths.overview}_ link describes the origins of **${App.token}**.<br /><br />The _${Paths.help}_ link gives brief instructions as to how to use **${App.title}**.<br /><br />The _${Paths.about}_ link gives version, author and copyright information.`
}

class About {

  static readonly heading = `About ${App.title}`

  static readonly info = `**${App.title}** version ${App.version}<br /><br />Created by ${App.author} at the ${App.place}.<br /><br />For more information about **${App.token}**, please contact s dot huckle at sussex dot ac dot uk.`
}

class Overview {

  static readonly heading = `Overview of ${App.title}`

  static readonly info = `**${App.token}** is the result of ${App.author}\'s PhD at the ${App.place}.`
}

class Help {

  static readonly heading = `${App.title} Help`

  static readonly info = `**${App.title}** allows users to deposit FIAT currencies, whereby they can exchange them for **${App.token}**.<br /><br />To deposit and exchange FIAT for **${App.token}**, click on the _${App.headingExchanger}_ link in the sidebar.<br /><br />**${App.title}** depends on [MetaMask](https://metamask.io/).`
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
