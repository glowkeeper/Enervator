import { Paths as configPaths } from './config'

class App {

  static readonly token='Enervator'
  static readonly title='Enerchanger'
  static readonly tagline='Using Blockchain Technology to Incentivise Energy Efficiency'
  static readonly copyright='© 2019'
  static readonly place ='[University of Sussex](https://www.sussex.ac.uk/)'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
  static readonly version='0.0.1'

  static headingDepositor = 'Deposit FIAT'
  static headingExchanger = `Read ${App.token} Enervator Data`
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly blockchain = 'Blockchain Data'
  static readonly about = 'About'
  static readonly overview = 'Overview'
  static readonly help = 'Help'
}

class Blockchain {

  static heading = 'Blockchain Data'
}

class Home {

  static readonly heading = `${App.title} Home`

  static readonly info = `Use **${App.title}** to exchange FIAT cash for **${App.token}**.<br /><br />The _${Paths.help}_ link, above, gives brief instructions as to how to use **${App.title}**.<br /><br />The _${Paths.overview}_ link describes the origins of **${App.token}**.<br /><br />The _${Paths.help}_ link gives brief instructions as to how to use **${App.title}**.<br /><br />The _${Paths.about}_ link gives version, author and copyright information.`
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

  static readonly info = `**${App.title}** allows users to deposit FIAT currencies, whereby they can exchange them for **${App.token}**.<br /><br />To deposit FIAT, click on the _${App.headingDepositor}_ link in the sidebar. To exchange deposits for **${App.token}**, click on the _${App.headingExchanger}_ link.<br /><br />**${App.title}** depends on [MetaMask](https://metamask.io/).`
}

class Transaction {

  static heading = "Transaction Details"

  static hash = 'Transaction Hash'
  static summary = 'Transaction Summary'
  static success = 'Submitted Successfully!'
  static fail = 'Submission Failed!'
}


export { App,
         Paths,
         Blockchain,
         Home,
         About,
         Overview,
         Help,
         Transaction
       }
