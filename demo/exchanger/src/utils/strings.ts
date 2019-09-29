import { Paths as configPaths } from './config'

class App {

  static readonly token='Enervator'
  static readonly title='Enervator Admin'
  static readonly tagline='Using Blockchain Technology to Incentivise Energy Efficiency'
  static readonly copyright='© 2019'
  static readonly place ='[University of Sussex](https://www.sussex.ac.uk/)'
  static readonly author='[Steven Huckle](https://glowkeeper.github.io/)'
  static readonly version='0.0.1'

  static headingWriter = 'Write Enervator Data'
  static headingReader = 'Read Enervator Data'
}

class Paths {

  // AppBar
  static readonly home = 'Home'
  static readonly blockchain = 'Blockchain Data'
  static readonly about = 'About'
  static readonly overview = 'Overview'
  static readonly help = 'Help'
  static readonly writer = 'Write Records'
  static readonly reader = 'Read Records'
}

class Blockchain {

  static heading = 'Blockchain Data'
}

class Home {

  static heading = `${App.title} Home`

  static info = `Use **${App.title}** to read and set parameters for **${App.token}**.<br /><br />The [Help](#${configPaths.help}) section gives brief instructions as to how to use **${App.title}**.<br /><br />The [Overview](#${configPaths.overview}) section describes the origins of **${App.token}**.<br /><br />The [Help](#${configPaths.help}) section gives brief instructions as to how to use **${App.title}**.<br /><br />The [About](#${configPaths.about}) section gives version, author and copyright information.`
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

  static info = `**${App.title}** allows the owner of the **${App.token} Manager** smart contract to read and write **${App.token}** records.<br /><br />To update **${App.token}** parameters, click on the [Write Records](#${configPaths.writer}) link and select the parameter you wish to update. To read **${App.token}** records, click on the [Read Records](#${configPaths.reader}) link.<br /><br />**${App.title}** depends on [MetaMask](https://metamask.io/).`
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
