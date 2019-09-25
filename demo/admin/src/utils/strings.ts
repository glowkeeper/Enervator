import { Paths as configPaths } from './config'

class App {

  static readonly title='**Enervator Admin**'
  static readonly tagline='Using Blockchain Technology to Incentivise Energy Efficiency'
  static readonly copyright='[University of Sussex](https://www.sussex.ac.uk/) © 2019'
  static readonly author='Created by [Steven Huckle](https://glowkeeper.github.io/)'
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

  static heading = 'Home'

  static info = `Use this application to read and write Enervator values.<br /><br />Read the [Overview](#${configPaths.overview}) section to learn about the origins of **Enervator**.<br /><br />The [Help](#${configPaths.help}) section gives brief instructions as to how to use **Enervator Admin** - in essence, to update Enervator records, click on the [Write Record](#${configPaths.writer}) link and fill in all fields. To read Enervator records, click on the [Read Record](#${configPaths.reader}) link. You must have [MetaMask](https://metamask.io/) installed and own the Enervator Manager smart contract.`
}

class About {

  static heading = 'About Enervator Admin'

  static info = `_${App.title}_ version _${App.version}_<br /><br /> _${App.author}_ at the _${App.copyright}_`

}

class Overview {

  static heading = 'Overview of Enervator'

  static info = '**Enervator** is the result of Stven Huckle\'s thesis, at the [University of Sussex](https://www.sussex.ac.uk/).<br /><br />For more information about **Enervator**, please contact s dot huckle at sussex dot ac dot uk.'
}

class Help {

  static heading = 'Enervator Help'

  static info = `**Enervator Admin'** allows the owner of the Enervator Manager smart contract to read and write Enervator records.<br /><br />Have a read of the [Overview](#${configPaths.overview}) section, which gives some background about the app\'. <br /><br />This app' relies on [MetaMask](https://metamask.io/).`
}

class Writer {

  static heading = 'Enervator Writer'

  static info = `The _${App.headingWriter}_ menu lets you write Enervator records.`
}

class Reader {

  static heading = 'Enervator Reader'

  static info = `The _${App.headingReader}_ menu lets you read Enervator records.`
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
