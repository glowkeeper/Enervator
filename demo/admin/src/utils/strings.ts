class App {

  static readonly token='Enervator'
  static readonly symbol='EOR'
  static readonly title='Eneradmin'
  static readonly tagline='Using Blockchain Technology to Incentivise Energy Efficiency'
  static readonly copyright='© 2019'
  static readonly place ='[University of Sussex](https://www.sussex.ac.uk/)'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
  static readonly version='0.0.1'

  static readonly headingWriter = 'Set Enervator Parameters'
  static readonly headingReader = 'Read Enervator Parameters'
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly blockchain = 'Blockchain Data'
  static readonly about = 'About'
  static readonly overview = 'Overview'
  static readonly help = 'Help'

  static readonly exchangeRateWriter = 'Set Exchange Rates'
  static readonly exchangeRatesReader = 'Read Exchange Rates'

  static readonly supplyWriter = 'Set Supply'
  static readonly TPESWriter = 'Set TPES'
  static readonly perCapitaEnergyWriter = 'Set Per Capita Energy'

  static readonly enervatorReportReader = 'Read Enervator Parameters'
}

class Blockchain {

  static readonly heading = 'Blockchain Data'
}

class Home {

  static readonly heading = `${App.title} Home`

  static readonly info = `**${App.title}** is a proof of concept that showcases **${App.token}** by showing how it is possible to set and display the token's parameters.<br /><br />The _${Paths.blockchain}_ link, above, gives details of the blockchain in use.<br /><br />The _${Paths.overview}_ link describes the origins of **${App.token}**.<br /><br />The _${Paths.help}_ link gives brief instructions as to how to use **${App.title}**.<br /><br />The _${Paths.about}_ link gives version, author and copyright information.`
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

  static readonly info = `**${App.title}** allows the owner of the **${App.token} Manager** smart contract to set **${App.token}** parameters. Anyone can read those parameters. <br /><br />To set **${App.token}** values, click on the _${App.headingWriter} drop down menu_ in the sidebar, and select the value you wish to update. To read **${App.token}\'s** settings, click on the _${App.headingReader} drop down menu_ in the sidebar.<br /><br />**${App.title}** depends on [MetaMask](https://metamask.io/), which should be pointing at the Rinkeby Test Network.`
}

class Transaction {

  static readonly heading = "Transaction Details"

  static readonly hash = 'Transaction Hash'
  static readonly summary = 'Transaction Summary'
  static readonly success = 'Submitted Successfully!'
  static readonly fail = 'Submission Failed!'
}

class ExchangeRates {

  static readonly headingExchangeRateWriter = 'Set Exchange Rate'
  static readonly headingExchangeRatesReader = 'Read Exchange Rates'

  static readonly currency = "Currency"
  static readonly rate = "Exchange Rate (Currency to US$)"

  static readonly exchangeRateDetails = 'Exchange Rate Details'
}

class TokenSupply {

  static readonly headingSupplyWriter = 'Set Supply'
  static readonly headingSupplyReader = 'Read Supply'

  static readonly supply = "Supply"
}

class TPES {

  static readonly headingTPESWriter = 'Set Supply'
  static readonly headingTPESReader = 'Read Supply'

  static readonly tPES = "TPES"
}

class PerCapitaEnergy {

  static readonly headingPerCapitaEnergyWriter = 'Set Per Capita Energy'
  static readonly headingPerCapitaEnergyReader = 'Read Per Capita Energy'

  static readonly perCapitaEnergy = "Per Capita Energy"
}

class EnervatorReport {

  static readonly headingEnervatorReader = 'Read Enervator Parameters'

  static readonly enervatorDetails = 'Enervator Parameters'
}

export { App,
         Paths,
         Blockchain,
         Home,
         About,
         Overview,
         Help,
         Transaction,
         ExchangeRates,
         TokenSupply,
         TPES,
         PerCapitaEnergy,
         EnervatorReport
       }
