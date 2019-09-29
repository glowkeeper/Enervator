class App {

  static readonly token='Enervator'
  static readonly title='Enervator Admin'
  static readonly tagline='Using Blockchain Technology to Incentivise Energy Efficiency'
  static readonly copyright='© 2019'
  static readonly place ='[University of Sussex](https://www.sussex.ac.uk/)'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
  static readonly version='0.0.1'

  static headingWriter = 'Set Enervator Parameters'
  static headingReader = 'Read Enervator Parameters'
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly blockchain = 'Blockchain Data'
  static readonly about = 'About'
  static readonly overview = 'Overview'
  static readonly help = 'Help'
  static readonly writer = 'Set Parameters'
  static readonly reader = 'Read Parameters'

  static readonly exchangeRateWriter = '/set-exchange-rate'
  static readonly exchangeRatesReader = '/read-exchange-rates'
}

class Blockchain {

  static heading = 'Blockchain Data'
}

class Home {

  static heading = `${App.title} Home`

  static info = `Use **${App.title}** to read and set parameters for **${App.token}**.<br /><br />The _${Paths.help}_ link, above, gives brief instructions as to how to use **${App.title}**.<br /><br />The _${Paths.overview}_ link describes the origins of **${App.token}**.<br /><br />The _${Paths.help}_ link gives brief instructions as to how to use **${App.title}**.<br /><br />The _${Paths.about}_ link gives version, author and copyright information.`
}

class About {

  static heading = `About ${App.title}`

  static info = `**${App.title}** version ${App.version}<br /><br />Created by ${App.author} at the ${App.place} ${App.copyright}.<br /><br />For more information about **${App.token}**, please contact s dot huckle at sussex dot ac dot uk.`
}

class Overview {

  static heading = `Overview of ${App.title}`

  static info = `**${App.token}** is the result of ${App.author}\'s PhD at the ${App.place}.`
}

class Help {

  static heading = `${App.title} Help`

  static info = `**${App.title}** allows the owner of the **${App.token} Manager** smart contract to set **${App.token}** parameters. Anyone can read **${App.token}\'s** parameters. <br /><br />To set **${App.token}** parameters, click on the _${Paths.writer}_ link and select the parameter you wish to update. To read **${App.token}** parameters, click on the _${Paths.reader}_ link.<br /><br />**${App.title}** depends on [MetaMask](https://metamask.io/).`
}

class Writer {

  static heading = `${App.title} Writer`

  static info = `The _${App.headingWriter}_ section lets you write **${App.token}** records.`
}

class Reader {

  static heading = `${App.title} Reader`

  static info = `The _${App.headingReader}_ section lets you read **${App.token}** records.`
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
         Writer,
         Reader,
         Transaction
       }
