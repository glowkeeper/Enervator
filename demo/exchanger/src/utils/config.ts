class Paths {

  static readonly home = '/'
  static readonly blockchain = '/blockchain-data'
  static readonly about = '/about'
  static readonly overview = '/overview'
  static readonly help = '/help'

  static readonly deposit = '/deposit'
  static readonly buy = '/buy'
}

class Blockchain {

  // Using web3 via MetaMask, so these aren't necessary, really
  static readonly host = 'http://127.0.0.1'
  static readonly port = '8545'
  static readonly network = 'ropsten'

  static readonly checkInterval = 3000
}

class Contract {

  /* Rinkeby Addresses
  static enervatorManagerAddress = "0x639AaB41667FFB0Dffb9FA90201470361D6133E7"
  static enervatorAddress = "0x5483b2996BBa07330E188Fe10BB101d4c1Ac8530"
  static depositAddress = "0x64c2D88F8298Dc4d8Ed95B6c8e12DEbf7d81f431"
  static forexAddress = "0x2d6718857e21065Fec46bd29c729c1609Db4e2ac"
  static buyAddress = "0x5e589FBB8BB4B0Df26a2A98b8F6ED873b74F5Fe7"
  static exchangerAddress = "0x2484336c3a7812a3011ead2064ee0a7190B6F1a3"
  */

  static enervatorManagerAddress = "0x639AaB41667FFB0Dffb9FA90201470361D6133E7"
  static enervatorAddress = "0x5483b2996BBa07330E188Fe10BB101d4c1Ac8530"
  static depositAddress = "0x64c2D88F8298Dc4d8Ed95B6c8e12DEbf7d81f431"
  static forexAddress = "0x2d6718857e21065Fec46bd29c729c1609Db4e2ac"
  static buyAddress = "0x5e589FBB8BB4B0Df26a2A98b8F6ED873b74F5Fe7"
  static exchangerAddress = "0x2484336c3a7812a3011ead2064ee0a7190B6F1a3"

  static enervatorManagerABI = [

    "event TPES ( int128  _amount )",
  	"event PerCapitaEnergy ( int128 _amount )",
  	"event Minted ( uint256 _amount )",
  	"event Burnt ( uint256 _amount )",
  	"event Sent ( address _recipient, uint256 _amount, uint256 fromBalance, uint256 toBalance  )",
  	"event Received ( address operator, address from, address to, uint256 amount, uint256 fromBalance, uint256 toBalance )",

    "function setToken( address _token )@500000",
    "function addTokens ( uint256 _amount )@500000",
    "function burnTokens ( uint256 _amount )@500000",
    "function setTPES ( int128  _amount )@500000",
    "function setPerCapitaEnergy ( int128 _amount )@500000",
    "function send ( address _recipient, uint256 _amount, bytes _buyData )@500000",

    "function tokensReceived ( address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData )@500000",
    "function tokensToSend ( address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData )@500000",

    "function getTokenName () view returns ( string memory )",
    "function getTokenSymbol () external view returns ( string memory )",
    "function getTotalSupply () external view returns ( uint256 )",

    "function getPricePerMWh () view returns ( int128 )",
    "function getCurrentTPES () view returns ( int128 )",
    "function getOldTPES () view returns ( int128 )",
    "function getPerCapitaEnergy () view returns ( int128 )",
    "function getUnitValue () view returns ( int256 )"

  ]

  static depositABI = [

    "event Deposited ( uint _epochTime, address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount )",
  	"event Withdrawn ( uint _epochTime, address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount )",
  	"event CanWithdraw ( bytes32 _depositRef, bool _canWithdraw )",

    "function getExists ( address _x ) view returns (bool)",

    "function deposit( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount )@500000",
    "function withdraw ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount )@500000",

  	"function setCanWithdraw ( bytes32 _depositRef, bool _canWithdraw )@500000",

  	"function getNumDepositors () view returns (uint256)",
    "function getDepositor ( uint256 _index ) view returns (address)",
    "function getNumDeposits ( address _depositor ) view returns (uint256)",
    "function getDepositReference( address _depositor, uint256 _index ) view returns (bytes32)",
    "function getDepositedAddress ( bytes32 _depositRef ) view returns (address)",
    "function getDepositedAmount ( bytes32 _depositRef ) view returns (int128)",
    "function getDepositedCode ( bytes32 _depositRef ) view returns (bytes32)",
    "function getCanWithdraw ( bytes32 _depositRef ) view returns (bool)",
    "function getDeposit( bytes32 _depositRef ) view returns ( tuple( uint256 amount, bytes32 code, address account, bool canWithdraw ) depositDB )"

  ]

  static forexABI = [

    "event SetRate ( bytes32 _code, uint256 _rate )",

  	"function setRate ( bytes32 _code, uint256 _rate )@500000",
    "function getNumCodes () view returns (uint256)",
    "function getCode ( uint256 _index ) view returns (bytes32)",
    "function getRate ( bytes32 _code ) view returns (uint256)"

  ]

  static buyABI = [

    "event Bought ( uint _epochTime, address _buyer, bytes32 _buyRef, bytes32 _depositRef, uint256 _amountWEI )",

    "function getExists ( address _x ) view returns (bool)",

    "function bought ( address _buyer, bytes32 _buyRef, bytes32 _depositRef, uint256 _amountWEI )@500000",

    "function getNumBuyers () view returns (uint256)",
  	"function getBuys ( uint256 _index ) view returns (address)",
  	"function getNumBuys ( address _buyer ) view returns (uint256)",
  	"function getBuyReference( address _buyer, uint256 _index ) view returns (bytes32)",
    "function getBuyAmount ( bytes32 _buyerRef ) view returns (uint256)",
    "function getBuyAddress ( bytes32 _buyerRef ) view returns (address)",
  	"function getDepositReference ( bytes32 _buyerRef ) view returns (bytes32)",

    "function getBuy( bytes32 _buyerRef ) view returns ( tuple( uint256 amountWEI, bytes32 _depositRef, address _account ) buyDB )"

  ]

  static exchangerABI = [

    "event Buy ( uint _epochTime, address _buyer, bytes32 _buyRef, bytes32 _depositRef,  uint256 _amountWEI )",

    "function setComponents ( address _enervatorManager, address _depositDB, address _forexDB, address _buyDB)@500000",
    "function setCanWithdraw ( bytes32 _depositRef, bool _canWithdraw )@500000",
    "function setRate ( bytes32 _code, uint256 _rate )@500000",

    "function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount )@500000",
    "function buy ( tuple( uint256 amountWEI, address buyer, bytes32 buyRef, bytes32 depositRef ) buyData ) external@500000",
    "function bought ( address _buyer, uint256 _amountEOR, bytes _buyData )@500000",
  ]
}

class Helpers {

  static languageCodes = [
    {value: "en", label: "English"},
    {value: "es", label: "Spanish; Castilian"},
    {value: "fr", label: "French"},
    {value: "de", label: "German"},
    {value: "zh", label: "Chinese"},
    {value: "ar", label: "Arabic"},
    {value: "ru", label: "Russian"},
    {value: "ja", label: "Japanese"},
    {value: "ab", label: "Abkhazian"},
    {value: "aa", label: "Afar"},
    {value: "af", label: "Afrikaans"},
    {value: "ak", label: "Akan"},
    {value: "sq", label: "Albanian"},
    {value: "am", label: "Amharic"},
    {value: "an", label: "Aragonese"},
    {value: "hy", label: "Armenian"},
    {value: "as", label: "Assamese"},
    {value: "av", label: "Avaric"},
    {value: "ae", label: "Avestan"},
    {value: "ay", label: "Aymara"},
    {value: "az", label: "Azerbaijani"},
    {value: "bm", label: "Bambara"},
    {value: "ba", label: "Bashkir"},
    {value: "eu", label: "Basque"},
    {value: "be", label: "Belarusian"},
    {value: "bn", label: "Bengali"},
    {value: "bh", label: "Bihari languages"},
    {value: "bi", label: "Bislama"},
    {value: "nb", label: "Bokmål, Norwegian; Norwegian Bokmål"},
    {value: "bs", label: "Bosnian"},
    {value: "br", label: "Breton"},
    {value: "bg", label: "Bulgarian"},
    {value: "my", label: "Burmese"},
    {value: "ca", label: "Catalan; Valencian"},
    {value: "km", label: "Central Khmer"},
    {value: "ch", label: "Chamorro"},
    {value: "ce", label: "Chechen"},
    {value: "ny", label: "Chichewa; Chewa; Nyanja"},
    {value: "cv", label: "Chuvash"},
    {value: "kw", label: "Cornish"},
    {value: "co", label: "Corsican"},
    {value: "cr", label: "Cree"},
    {value: "hr", label: "Croatian"},
    {value: "cs", label: "Czech"},
    {value: "da", label: "Danish"},
    {value: "dv", label: "Divehi; Dhivehi; Maldivian"},
    {value: "nl", label: "Dutch; Flemish"},
    {value: "dz", label: "Dzongkha"},
    {value: "eo", label: "Esperanto"},
    {value: "et", label: "Estonian"},
    {value: "ee", label: "Ewe"},
    {value: "fo", label: "Faroese"},
    {value: "fj", label: "Fijian"},
    {value: "fi", label: "Finnish"},
    {value: "ff", label: "Fulah"},
    {value: "gd", label: "Gaelic; Scottish Gaelic"},
    {value: "gl", label: "Galician"},
    {value: "lg", label: "Ganda"},
    {value: "ka", label: "Georgian"},
    {value: "el", label: "Greek"},
    {value: "gn", label: "Guarani"},
    {value: "gu", label: "Gujarati"},
    {value: "ht", label: "Haitian; Haitian Creole"},
    {value: "ha", label: "Hausa"},
    {value: "he", label: "Hebrew"},
    {value: "hz", label: "Herero"},
    {value: "hi", label: "Hindi"},
    {value: "ho", label: "Hiri Motu"},
    {value: "hu", label: "Hungarian"},
    {value: "is", label: "Icelandic"},
    {value: "io", label: "Ido"},
    {value: "ig", label: "Igbo"},
    {value: "id", label: "Indonesian"},
    {value: "iu", label: "Inuktitut"},
    {value: "ik", label: "Inupiaq"},
    {value: "ga", label: "Irish"},
    {value: "it", label: "Italian"},
    {value: "jv", label: "Javanese"},
    {value: "kl", label: "Kalaallisut; Greenlandic"},
    {value: "kn", label: "Kannada"},
    {value: "kr", label: "Kanuri"},
    {value: "ks", label: "Kashmiri"},
    {value: "kk", label: "Kazakh"},
    {value: "ki", label: "Kikuyu; Gikuyu"},
    {value: "rw", label: "Kinyarwanda"},
    {value: "ky", label: "Kirghiz; Kyrgyz"},
    {value: "kv", label: "Komi"},
    {value: "kg", label: "Kongo"},
    {value: "ko", label: "Korean"},
    {value: "kj", label: "Kuanyama; Kwanyama"},
    {value: "ku", label: "Kurdish"},
    {value: "lo", label: "Lao"},
    {value: "la", label: "Latin"},
    {value: "lv", label: "Latvian"},
    {value: "li", label: "Limburgan; Limburger; Limburgish"},
    {value: "ln", label: "Lingala"},
    {value: "lt", label: "Lithuanian"},
    {value: "lu", label: "Luba-Katanga"},
    {value: "lb", label: "Luxembourgish; Letzeburgesch"},
    {value: "mk", label: "Macedonian"},
    {value: "mg", label: "Malagasy"},
    {value: "ms", label: "Malay"},
    {value: "ml", label: "Malayalam"},
    {value: "mt", label: "Maltese"},
    {value: "gv", label: "Manx"},
    {value: "mi", label: "Maori"},
    {value: "mr", label: "Marathi"},
    {value: "mh", label: "Marshallese"},
    {value: "mn", label: "Mongolian"},
    {value: "na", label: "Nauru"},
    {value: "nv", label: "Navajo; Navaho"},
    {value: "nd", label: "Ndebele, North; North Ndebele"},
    {value: "nr", label: "Ndebele, South; South Ndebele"},
    {value: "ng", label: "Ndonga"},
    {value: "ne", label: "Nepali"},
    {value: "se", label: "Northern Sami"},
    {value: "no", label: "Norwegian"},
    {value: "nn", label: "Norwegian Nynorsk; Nynorsk, Norwegian"},
    {value: "oc", label: "Occitan (post 1500)"},
    {value: "oj", label: "Ojibwa"},
    {value: "or", label: "Oriya"},
    {value: "om", label: "Oromo"},
    {value: "os", label: "Ossetian; Ossetic"},
    {value: "pi", label: "Pali"},
    {value: "pa", label: "Panjabi; Punjabi"},
    {value: "fa", label: "Persian"},
    {value: "pl", label: "Polish"},
    {value: "pt", label: "Portuguese"},
    {value: "ps", label: "Pushto; Pashto"},
    {value: "qu", label: "Quechua"},
    {value: "ro", label: "Romanian; Moldavian; Moldovan"},
    {value: "rm", label: "Romansh"},
    {value: "rn", label: "Rundi"},
    {value: "sm", label: "Samoan"},
    {value: "sg", label: "Sango"},
    {value: "sa", label: "Sanskrit"},
    {value: "sc", label: "Sardinian"},
    {value: "sr", label: "Serbian"},
    {value: "sn", label: "Shona"},
    {value: "ii", label: "Sichuan Yi; Nuosu"},
    {value: "sd", label: "Sindhi"},
    {value: "si", label: "Sinhala; Sinhalese"},
    {value: "sk", label: "Slovak"},
    {value: "sl", label: "Slovenian"},
    {value: "so", label: "Somali"},
    {value: "st", label: "Sotho, Southern"},
    {value: "su", label: "Sundanese"},
    {value: "sw", label: "Swahili"},
    {value: "ss", label: "Swati"},
    {value: "sv", label: "Swedish"},
    {value: "tl", label: "Tagalog"},
    {value: "ty", label: "Tahitian"},
    {value: "tg", label: "Tajik"},
    {value: "ta", label: "Tamil"},
    {value: "tt", label: "Tatar"},
    {value: "te", label: "Telugu"},
    {value: "th", label: "Thai"},
    {value: "bo", label: "Tibetan"},
    {value: "ti", label: "Tigrinya"},
    {value: "to", label: "Tonga (Tonga Islands)"},
    {value: "ts", label: "Tsonga"},
    {value: "tn", label: "Tswana"},
    {value: "tr", label: "Turkish"},
    {value: "tk", label: "Turkmen"},
    {value: "tw", label: "Twi"},
    {value: "ug", label: "Uighur; Uyghur"},
    {value: "uk", label: "Ukrainian"},
    {value: "ur", label: "Urdu"},
    {value: "uz", label: "Uzbek"},
    {value: "ve", label: "Venda"},
    {value: "vi", label: "Vietnamese"},
    {value: "vo", label: "Volapük"},
    {value: "wa", label: "Walloon"},
    {value: "cy", label: "Welsh"},
    {value: "fy", label: "Western Frisian"},
    {value: "wo", label: "Wolof"},
    {value: "xh", label: "Xhosa"},
    {value: "yi", label: "Yiddish"},
    {value: "yo", label: "Yoruba"},
    {value: "za", label: "Zhuang; Chuang"},
    {value: "zu", label: "Zulu"}
  ]

  static currencyCodes = [
    {value: "GBP", label: "United Kingdom Pound"},
    {value: "USD", label: "United States Dollar"},
    {value: "EUR", label: "Euro Member Countries"},
    {value: "JPY", label: "Japan Yen"},
    {value: "CHF", label: "Switzerland Franc"},
    {value: "CAD", label: "Canada Dollar"},
    {value: "AFN", label: "Afghanistan Afghani"},
    {value: "ALL", label: "Albania Lek"},
    {value: "DZD", label: "Algeria Dinar"},
    {value: "AOA", label: "Angola Kwanza"},
    {value: "ARS", label: "Argentina Peso"},
    {value: "AMD", label: "Armenia Dram"},
    {value: "AWG", label: "Aruba Guilder"},
    {value: "AUD", label: "Australia Dollar"},
    {value: "AZN", label: "Azerbaijan Manat"},
    {value: "BSD", label: "Bahamas Dollar"},
    {value: "BHD", label: "Bahrain Dinar"},
    {value: "BDT", label: "Bangladesh Taka"},
    {value: "BBD", label: "Barbados Dollar"},
    {value: "BYN", label: "Belarus Ruble"},
    {value: "BZD", label: "Belize Dollar"},
    {value: "BMD", label: "Bermuda Dollar"},
    {value: "BTN", label: "Bhutan Ngultrum"},
    {value: "BOB", label: "Bolivia Bolíviano"},
    {value: "BAM", label: "Bosnia and Herzegovina Convertible Marka"},
    {value: "BWP", label: "Botswana Pula"},
    {value: "BRL", label: "Brazil Real"},
    {value: "BND", label: "Brunei Darussalam Dollar"},
    {value: "BGN", label: "Bulgaria Lev"},
    {value: "BIF", label: "Burundi Franc"},
    {value: "KHR", label: "Cambodia Riel"},
    {value: "CVE", label: "Cape Verde Escudo"},
    {value: "KYD", label: "Cayman Islands Dollar"},
    {value: "CLP", label: "Chile Peso"},
    {value: "CNY", label: "China Yuan Renminbi"},
    {value: "COP", label: "Colombia Peso"},
    {value: "XOF", label: "Communauté Financière Africaine (BCEAO) Franc"},
    {value: "XAF", label: "Communauté Financière Africaine (BEAC) CFA Franc BEAC"},
    {value: "KMF", label: "Comorian Franc"},
    {value: "XPF", label: "Comptoirs Français du Pacifique (CFP) Franc"},
    {value: "CDF", label: "Congo/Kinshasa Franc"},
    {value: "CRC", label: "Costa Rica Colon"},
    {value: "HRK", label: "Croatia Kuna"},
    {value: "CUC", label: "Cuba Convertible Peso"},
    {value: "CUP", label: "Cuba Peso"},
    {value: "CZK", label: "Czech Republic Koruna"},
    {value: "DKK", label: "Denmark Krone"},
    {value: "DJF", label: "Djibouti Franc"},
    {value: "DOP", label: "Dominican Republic Peso"},
    {value: "XCD", label: "East Caribbean Dollar"},
    {value: "EGP", label: "Egypt Pound"},
    {value: "SVC", label: "El Salvador Colon"},
    {value: "ERN", label: "Eritrea Nakfa"},
    {value: "SZL", label: "eSwatini Lilangeni"},
    {value: "ETB", label: "Ethiopia Birr"},
    {value: "FKP", label: "Falkland Islands (Malvinas) Pound"},
    {value: "FJD", label: "Fiji Dollar"},
    {value: "GMD", label: "Gambia Dalasi"},
    {value: "GEL", label: "Georgia Lari"},
    {value: "GHS", label: "Ghana Cedi"},
    {value: "GIP", label: "Gibraltar Pound"},
    {value: "GTQ", label: "Guatemala Quetzal"},
    {value: "GGP", label: "Guernsey Pound"},
    {value: "GNF", label: "Guinea Franc"},
    {value: "GYD", label: "Guyana Dollar"},
    {value: "HTG", label: "Haiti Gourde"},
    {value: "HNL", label: "Honduras Lempira"},
    {value: "HKD", label: "Hong Kong Dollar"},
    {value: "HUF", label: "Hungary Forint"},
    {value: "ISK", label: "Iceland Krona"},
    {value: "INR", label: "India Rupee"},
    {value: "IDR", label: "Indonesia Rupiah"},
    {value: "XDR", label: "International Monetary Fund (IMF) Special Drawing Rights"},
    {value: "IRR", label: "Iran Rial"},
    {value: "IQD", label: "Iraq Dinar"},
    {value: "IMP", label: "Isle of Man Pound"},
    {value: "ILS", label: "Israel Shekel"},
    {value: "JMD", label: "Jamaica Dollar"},
    {value: "JEP", label: "Jersey Pound"},
    {value: "JOD", label: "Jordan Dinar"},
    {value: "KZT", label: "Kazakhstan Tenge"},
    {value: "KES", label: "Kenya Shilling"},
    {value: "KPW", label: "Korea (North) Won"},
    {value: "KRW", label: "Korea (South) Won"},
    {value: "KWD", label: "Kuwait Dinar"},
    {value: "KGS", label: "Kyrgyzstan Som"},
    {value: "LAK", label: "Laos Kip"},
    {value: "LBP", label: "Lebanon Pound"},
    {value: "LSL", label: "Lesotho Loti"},
    {value: "LRD", label: "Liberia Dollar"},
    {value: "LYD", label: "Libya Dinar"},
    {value: "MOP", label: "Macau Pataca"},
    {value: "MKD", label: "Macedonia Denar"},
    {value: "MGA", label: "Madagascar Ariary"},
    {value: "MWK", label: "Malawi Kwacha"},
    {value: "MYR", label: "Malaysia Ringgit"},
    {value: "MVR", label: "Maldives (Maldive Islands) Rufiyaa"},
    {value: "MRU", label: "Mauritania Ouguiya"},
    {value: "MUR", label: "Mauritius Rupee"},
    {value: "MXN", label: "Mexico Peso"},
    {value: "MDL", label: "Moldova Leu"},
    {value: "MNT", label: "Mongolia Tughrik"},
    {value: "MAD", label: "Morocco Dirham"},
    {value: "MZN", label: "Mozambique Metical"},
    {value: "MMK", label: "Myanmar (Burma) Kyat"},
    {value: "NAD", label: "Namibia Dollar"},
    {value: "NPR", label: "Nepal Rupee"},
    {value: "ANG", label: "Netherlands Antilles Guilder"},
    {value: "NZD", label: "New Zealand Dollar"},
    {value: "NIO", label: "Nicaragua Cordoba"},
    {value: "NGN", label: "Nigeria Naira"},
    {value: "NOK", label: "Norway Krone"},
    {value: "OMR", label: "Oman Rial"},
    {value: "PKR", label: "Pakistan Rupee"},
    {value: "PAB", label: "Panama Balboa"},
    {value: "PGK", label: "Papua New Guinea Kina"},
    {value: "PYG", label: "Paraguay Guarani"},
    {value: "PEN", label: "Peru Sol"},
    {value: "PHP", label: "Philippines Peso"},
    {value: "PLN", label: "Poland Zloty"},
    {value: "QAR", label: "Qatar Riyal"},
    {value: "RON", label: "Romania Leu"},
    {value: "RUB", label: "Russia Ruble"},
    {value: "RWF", label: "Rwanda Franc"},
    {value: "SHP", label: "Saint Helena Pound"},
    {value: "WST", label: "Samoa Tala"},
    {value: "STN", label: "São Tomé and Príncipe Dobra"},
    {value: "SAR", label: "Saudi Arabia Riyal"},
    {value: "SPL*", label: "Seborga Luigino"},
    {value: "RSD", label: "Serbia Dinar"},
    {value: "SCR", label: "Seychelles Rupee"},
    {value: "SLL", label: "Sierra Leone Leone"},
    {value: "SGD", label: "Singapore Dollar"},
    {value: "SBD", label: "Solomon Islands Dollar"},
    {value: "SOS", label: "Somalia Shilling"},
    {value: "ZAR", label: "South Africa Rand"},
    {value: "LKR", label: "Sri Lanka Rupee"},
    {value: "SDG", label: "Sudan Pound"},
    {value: "SRD", label: "Suriname Dollar"},
    {value: "SEK", label: "Sweden Krona"},
    {value: "SYP", label: "Syria Pound"},
    {value: "TWD", label: "Taiwan New Dollar"},
    {value: "TJS", label: "Tajikistan Somoni"},
    {value: "TZS", label: "Tanzania Shilling"},
    {value: "THB", label: "Thailand Baht"},
    {value: "TOP", label: "Tonga Pa'anga"},
    {value: "TTD", label: "Trinidad and Tobago Dollar"},
    {value: "TND", label: "Tunisia Dinar"},
    {value: "TRY", label: "Turkey Lira"},
    {value: "TMT", label: "Turkmenistan Manat"},
    {value: "TVD", label: "Tuvalu Dollar"},
    {value: "UGX", label: "Uganda Shilling"},
    {value: "UAH", label: "Ukraine Hryvnia"},
    {value: "AED", label: "United Arab Emirates Dirham"},
    {value: "UYU", label: "Uruguay Peso"},
    {value: "UZS", label: "Uzbekistan Som"},
    {value: "VUV", label: "Vanuatu Vatu"},
    {value: "VEF", label: "Venezuela Bolívar"},
    {value: "VND", label: "Viet Nam Dong"},
    {value: "YER", label: "Yemen Rial"},
    {value: "ZMW", label: "Zambia Kwacha"},
    {value: "ZWD", label: "Zimbabwe Dollar"}
  ]

  static countryCodes = [
    {value: "AF", label: "Afghanistan"},
    {value: "AX", label: "Åland Islands"},
    {value: "AL", label: "Albania"},
    {value: "DZ", label: "Algeria"},
    {value: "AS", label: "American Samoa"},
    {value: "AD", label: "Andorra"},
    {value: "AO", label: "Angola"},
    {value: "AI", label: "Anguilla"},
    {value: "AQ", label: "Antarctica"},
    {value: "AG", label: "Antigua and Barbuda"},
    {value: "AR", label: "Argentina"},
    {value: "AM", label: "Armenia"},
    {value: "AW", label: "Aruba"},
    {value: "AU", label: "Australia"},
    {value: "AT", label: "Austria"},
    {value: "AZ", label: "Azerbaijan"},
    {value: "BS", label: "Bahamas"},
    {value: "BH", label: "Bahrain"},
    {value: "BD", label: "Bangladesh"},
    {value: "BB", label: "Barbados"},
    {value: "BY", label: "Belarus"},
    {value: "BE", label: "Belgium"},
    {value: "BZ", label: "Belize"},
    {value: "BJ", label: "Benin"},
    {value: "BM", label: "Bermuda"},
    {value: "BT", label: "Bhutan"},
    {value: "BO", label: "Bolivia (Plurinational State of)"},
    {value: "BQ", label: "Bonaire, Sint Eustatius and Saba"},
    {value: "BA", label: "Bosnia and Herzegovina"},
    {value: "BW", label: "Botswana"},
    {value: "BV", label: "Bouvet Island"},
    {value: "BR", label: "Brazil"},
    {value: "IO", label: "British Indian Ocean Territory"},
    {value: "BN", label: "Brunei Darussalam"},
    {value: "BG", label: "Bulgaria"},
    {value: "BF", label: "Burkina Faso"},
    {value: "BI", label: "Burundi"},
    {value: "CV", label: "Cabo Verde"},
    {value: "KH", label: "Cambodia"},
    {value: "CM", label: "Cameroon"},
    {value: "CA", label: "Canada"},
    {value: "KY", label: "Cayman Islands"},
    {value: "CF", label: "Central African Republic"},
    {value: "TD", label: "Chad"},
    {value: "CL", label: "Chile"},
    {value: "CN", label: "China"},
    {value: "CX", label: "Christmas Island"},
    {value: "CC", label: "Cocos (Keeling) Islands"},
    {value: "CO", label: "Colombia"},
    {value: "KM", label: "Comoros"},
    {value: "CG", label: "Congo"},
    {value: "CD", label: "Congo, Democratic Republic of the"},
    {value: "CK", label: "Cook Islands"},
    {value: "CR", label: "Costa Rica"},
    {value: "CI", label: "Côte d'Ivoire"},
    {value: "HR", label: "Croatia"},
    {value: "CU", label: "Cuba"},
    {value: "CW", label: "Curaçao"},
    {value: "CY", label: "Cyprus"},
    {value: "CZ", label: "Czechia"},
    {value: "DK", label: "Denmark"},
    {value: "DJ", label: "Djibouti"},
    {value: "DM", label: "Dominica"},
    {value: "DO", label: "Dominican Republic"},
    {value: "EC", label: "Ecuador"},
    {value: "EG", label: "Egypt"},
    {value: "SV", label: "El Salvador"},
    {value: "GQ", label: "Equatorial Guinea"},
    {value: "ER", label: "Eritrea"},
    {value: "EE", label: "Estonia"},
    {value: "SZ", label: "Eswatini"},
    {value: "ET", label: "Ethiopia"},
    {value: "FK", label: "Falkland Islands (Malvinas)"},
    {value: "FO", label: "Faroe Islands"},
    {value: "FJ", label: "Fiji"},
    {value: "FI", label: "Finland"},
    {value: "FR", label: "France"},
    {value: "GF", label: "French Guiana"},
    {value: "PF", label: "French Polynesia"},
    {value: "TF", label: "French Southern Territories"},
    {value: "GA", label: "Gabon"},
    {value: "GM", label: "Gambia"},
    {value: "GE", label: "Georgia"},
    {value: "DE", label: "Germany"},
    {value: "GH", label: "Ghana"},
    {value: "GI", label: "Gibraltar"},
    {value: "GR", label: "Greece"},
    {value: "GL", label: "Greenland"},
    {value: "GD", label: "Grenada"},
    {value: "GP", label: "Guadeloupe"},
    {value: "GU", label: "Guam"},
    {value: "GT", label: "Guatemala"},
    {value: "GG", label: "Guernsey"},
    {value: "GN", label: "Guinea"},
    {value: "GW", label: "Guinea-Bissau"},
    {value: "GY", label: "Guyana"},
    {value: "HT", label: "Haiti"},
    {value: "HM", label: "Heard Island and McDonald Islands"},
    {value: "VA", label: "Holy See"},
    {value: "HN", label: "Honduras"},
    {value: "HK", label: "Hong Kong"},
    {value: "HU", label: "Hungary"},
    {value: "IS", label: "Iceland"},
    {value: "IN", label: "India"},
    {value: "ID", label: "Indonesia"},
    {value: "IR", label: "Iran (Islamic Republic of)"},
    {value: "IQ", label: "Iraq"},
    {value: "IE", label: "Ireland"},
    {value: "IM", label: "Isle of Man"},
    {value: "IL", label: "Israel"},
    {value: "IT", label: "Italy"},
    {value: "JM", label: "Jamaica"},
    {value: "JP", label: "Japan"},
    {value: "JE", label: "Jersey"},
    {value: "JO", label: "Jordan"},
    {value: "KZ", label: "Kazakhstan"},
    {value: "KE", label: "Kenya"},
    {value: "KI", label: "Kiribati"},
    {value: "KP", label: "Korea (Democratic People's Republic of)"},
    {value: "KR", label: "Korea, Republic of"},
    {value: "KW", label: "Kuwait"},
    {value: "KG", label: "Kyrgyzstan"},
    {value: "LA", label: "Lao People's Democratic Republic"},
    {value: "LV", label: "Latvia"},
    {value: "LB", label: "Lebanon"},
    {value: "LS", label: "Lesotho"},
    {value: "LR", label: "Liberia"},
    {value: "LY", label: "Libya"},
    {value: "LI", label: "Liechtenstein"},
    {value: "LT", label: "Lithuania"},
    {value: "LU", label: "Luxembourg"},
    {value: "MO", label: "Macao"},
    {value: "MK", label: "Macedonia, the former Yugoslav Republic of"},
    {value: "MG", label: "Madagascar"},
    {value: "MW", label: "Malawi"},
    {value: "MY", label: "Malaysia"},
    {value: "MV", label: "Maldives"},
    {value: "ML", label: "Mali"},
    {value: "MT", label: "Malta"},
    {value: "MH", label: "Marshall Islands"},
    {value: "MQ", label: "Martinique"},
    {value: "MR", label: "Mauritania"},
    {value: "MU", label: "Mauritius"},
    {value: "YT", label: "Mayotte"},
    {value: "MX", label: "Mexico"},
    {value: "FM", label: "Micronesia (Federated States of)"},
    {value: "MD", label: "Moldova, Republic of"},
    {value: "MC", label: "Monaco"},
    {value: "MN", label: "Mongolia"},
    {value: "ME", label: "Montenegro"},
    {value: "MS", label: "Montserrat"},
    {value: "MA", label: "Morocco"},
    {value: "MZ", label: "Mozambique"},
    {value: "MM", label: "Myanmar"},
    {value: "NA", label: "Namibia"},
    {value: "NR", label: "Nauru"},
    {value: "NP", label: "Nepal"},
    {value: "NL", label: "Netherlands"},
    {value: "NC", label: "New Caledonia"},
    {value: "NZ", label: "New Zealand"},
    {value: "NI", label: "Nicaragua"},
    {value: "NE", label: "Niger"},
    {value: "NG", label: "Nigeria"},
    {value: "NU", label: "Niue"},
    {value: "NF", label: "Norfolk Island"},
    {value: "MP", label: "Northern Mariana Islands"},
    {value: "NO", label: "Norway"},
    {value: "OM", label: "Oman"},
    {value: "PK", label: "Pakistan"},
    {value: "PW", label: "Palau"},
    {value: "PS", label: "Palestine, State of"},
    {value: "PA", label: "Panama"},
    {value: "PG", label: "Papua New Guinea"},
    {value: "PY", label: "Paraguay"},
    {value: "PE", label: "Peru"},
    {value: "PH", label: "Philippines"},
    {value: "PN", label: "Pitcairn"},
    {value: "PL", label: "Poland"},
    {value: "PT", label: "Portugal"},
    {value: "PR", label: "Puerto Rico"},
    {value: "QA", label: "Qatar"},
    {value: "RE", label: "Réunion"},
    {value: "RO", label: "Romania"},
    {value: "RU", label: "Russian Federation"},
    {value: "RW", label: "Rwanda"},
    {value: "BL", label: "Saint Barthélemy"},
    {value: "SH", label: "Saint Helena, Ascension and Tristan da Cunha"},
    {value: "KN", label: "Saint Kitts and Nevis"},
    {value: "LC", label: "Saint Lucia"},
    {value: "MF", label: "Saint Martin (French part)"},
    {value: "PM", label: "Saint Pierre and Miquelon"},
    {value: "VC", label: "Saint Vincent and the Grenadines"},
    {value: "WS", label: "Samoa"},
    {value: "SM", label: "San Marino"},
    {value: "ST", label: "Sao Tome and Principe"},
    {value: "SA", label: "Saudi Arabia"},
    {value: "SN", label: "Senegal"},
    {value: "RS", label: "Serbia"},
    {value: "SC", label: "Seychelles"},
    {value: "SL", label: "Sierra Leone"},
    {value: "SG", label: "Singapore"},
    {value: "SX", label: "Sint Maarten (Dutch part)"},
    {value: "SK", label: "Slovakia"},
    {value: "SI", label: "Slovenia"},
    {value: "SB", label: "Solomon Islands"},
    {value: "SO", label: "Somalia"},
    {value: "ZA", label: "South Africa"},
    {value: "GS", label: "South Georgia and the South Sandwich Islands"},
    {value: "SS", label: "South Sudan"},
    {value: "ES", label: "Spain"},
    {value: "LK", label: "Sri Lanka"},
    {value: "SD", label: "Sudan"},
    {value: "SR", label: "Suriname"},
    {value: "SJ", label: "Svalbard and Jan Mayen"},
    {value: "SE", label: "Sweden"},
    {value: "CH", label: "Switzerland"},
    {value: "SY", label: "Syrian Arab Republic"},
    {value: "TW", label: "Taiwan, Province of China"},
    {value: "TJ", label: "Tajikistan"},
    {value: "TZ", label: "Tanzania, United Republic of"},
    {value: "TH", label: "Thailand"},
    {value: "TL", label: "Timor-Leste"},
    {value: "TG", label: "Togo"},
    {value: "TK", label: "Tokelau"},
    {value: "TO", label: "Tonga"},
    {value: "TT", label: "Trinidad and Tobago"},
    {value: "TN", label: "Tunisia"},
    {value: "TR", label: "Turkey"},
    {value: "TM", label: "Turkmenistan"},
    {value: "TC", label: "Turks and Caicos Islands"},
    {value: "TV", label: "Tuvalu"},
    {value: "UG", label: "Uganda"},
    {value: "UA", label: "Ukraine"},
    {value: "AE", label: "United Arab Emirates"},
    {value: "GB", label: "United Kingdom of Great Britain and Northern Ireland"},
    {value: "UM", label: "United States Minor Outlying Islands"},
    {value: "US", label: "United States of America"},
    {value: "UY", label: "Uruguay"},
    {value: "UZ", label: "Uzbekistan"},
    {value: "VU", label: "Vanuatu"},
    {value: "VE", label: "Venezuela (Bolivarian Republic of)"},
    {value: "VN", label: "Viet Nam"},
    {value: "VG", label: "Virgin Islands (British)"},
    {value: "VI", label: "Virgin Islands (U.S.)"},
    {value: "WF", label: "Wallis and Futuna"},
    {value: "EH", label: "Western Sahara"},
    {value: "YE", label: "Yemen"},
    {value: "ZM", label: "Zambia"},
    {value: "ZW", label: "Zimbabwe"},
  ]

  static days = [
    {value: 1, label: "1"},
    {value: 2, label: "2"},
    {value: 3, label: "3"},
    {value: 4, label: "4"},
    {value: 5, label: "5"},
    {value: 6, label: "6"},
    {value: 7, label: "7"},
    {value: 8, label: "8"},
    {value: 9, label: "9"},
    {value: 10, label: "10"},
    {value: 11, label: "11"},
    {value: 12, label: "12"},
    {value: 13, label: "13"},
    {value: 14, label: "14"},
    {value: 15, label: "15"},
    {value: 16, label: "16"},
    {value: 17, label: "17"},
    {value: 18, label: "18"},
    {value: 19, label: "19"},
    {value: 20, label: "20"},
    {value: 21, label: "21"},
    {value: 22, label: "22"},
    {value: 23, label: "23"},
    {value: 24, label: "24"},
    {value: 25, label: "25"},
    {value: 26, label: "26"},
    {value: 27, label: "27"},
    {value: 28, label: "28"},
    {value: 29, label: "29"},
    {value: 30, label: "30"},
    {value: 31, label: "31"}
  ]

  static months = [
    {value: 1, label: "January"},
    {value: 2, label: "February"},
    {value: 3, label: "March"},
    {value: 4, label: "April"},
    {value: 5, label: "May"},
    {value: 6, label: "June"},
    {value: 7, label: "July"},
    {value: 8, label: "August"},
    {value: 9, label: "September"},
    {value: 10, label: "October"},
    {value: 11, label: "November"},
    {value: 12, label: "December"}
  ]

  static years = [
    {value: 2000, label: "2000"},
    {value: 2001, label: "2001"},
    {value: 2002, label: "2002"},
    {value: 2003, label: "2003"},
    {value: 2004, label: "2004"},
    {value: 2005, label: "2005"},
    {value: 2006, label: "2006"},
    {value: 2007, label: "2007"},
    {value: 2008, label: "2008"},
    {value: 2009, label: "2009"},
    {value: 2010, label: "2010"},
    {value: 2011, label: "2011"},
    {value: 2012, label: "2012"},
    {value: 2013, label: "2013"},
    {value: 2014, label: "2014"},
    {value: 2015, label: "2015"},
    {value: 2016, label: "2016"},
    {value: 2017, label: "2017"},
    {value: 2018, label: "2018"},
    {value: 2019, label: "2019"},
    {value: 2020, label: "2020"},
    {value: 2021, label: "2021"},
    {value: 2022, label: "2022"},
    {value: 2023, label: "2023"},
    {value: 2024, label: "2024"},
    {value: 2025, label: "2025"},
    {value: 2026, label: "2026"},
    {value: 2027, label: "2027"},
    {value: 2028, label: "2028"},
    {value: 2029, label: "2029"},
    {value: 2030, label: "2030"},
    {value: 2031, label: "2031"},
    {value: 2032, label: "2032"},
    {value: 2033, label: "2033"},
    {value: 2034, label: "2034"},
    {value: 2035, label: "2035"},
    {value: 2036, label: "2036"},
    {value: 2037, label: "2037"},
    {value: 2038, label: "2038"},
    {value: 2039, label: "2039"},
    {value: 2040, label: "2040"}
  ]
}

export { Paths, Blockchain, Contract, Helpers }
