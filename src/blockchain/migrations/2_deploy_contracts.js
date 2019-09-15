const StringsLib = artifacts.require("./Strings.sol");

const Enervator = artifacts.require("./Enervator.sol");
const EnervatorManager = artifacts.require('./EnervatorManager.sol');
const Deposit = artifacts.require('./Deposit.sol');
const Forex = artifacts.require('./Forex.sol');
const Buy = artifacts.require('./Buy.sol');
const Exchanger = artifacts.require('./Exchanger.sol');

const ethers = require('ethers');
const BN = require('bn.js');

try {

  require("openzeppelin-test-helpers/configure")({ web3 })

} catch (e) {
  // If deploying to a testnet, a weird error about configuring web3 twice occurs. Wrapping the function in a try-catch
  // until we find a better approach or --skipDryRun is added to truffle in the next major release
  // console.error(e);
}

const { singletons } = require('openzeppelin-test-helpers')

module.exports = async function (deployer, network, accounts) {

  // 2017 global average residential electricity price was US$98.16 per MWh. That's used as a constant thereafter.
  // 2016 total primary energy supply (TPES) was 162494360000 MWh.
  // 2014 global per capita energy consumption was 22.35853544 MegaWatt hours
  // Can't get deciomals to work, so rounding down.
  const two = new BN('2', 10);
  const sixtyFour = new BN('64', 10);
  const multiplier = two.pow(sixtyFour);
  const TPES = new BN('162494360000', 10);
  const currentTPES = multiplier.mul(TPES);
  const oldTPES = currentTPES;
  const price = new BN('98', 10);
  const pricePerMWh = multiplier.mul(price);
  let perCapita = new BN('22', 10);
  let perCapitaEnergy = multiplier.mul(perCapita);

  const tokenValues = {
    pricePerMWh: web3.utils.toHex(pricePerMWh),
    currentTPES: web3.utils.toHex(currentTPES),
    oldTPES: web3.utils.toHex(oldTPES),
    perCapitaEnergy: web3.utils.toHex(perCapitaEnergy),
    unitValue: 0
  }

  if ( network === 'development') {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    await singletons.ERC1820Registry(accounts[0]);
  }

  await deployer.deploy(StringsLib);
  deployer.link(StringsLib, [Deposit, Buy]);

  await deployer.deploy( Exchanger );
  const exchanger = await Exchanger.deployed();

  await deployer.deploy( Deposit, exchanger.address );
  const deposit = await Deposit.deployed();

  await deployer.deploy( Forex, exchanger.address );
  const forex = await Forex.deployed();

  await deployer.deploy( Buy, exchanger.address );
  const buy = await Buy.deployed();

  await deployer.deploy( EnervatorManager, tokenValues, exchanger.address );
  const tokenManager = await EnervatorManager.deployed();

  exchanger.setComponents ( tokenManager.address, deposit.address, forex.address, buy.address );

  // The world population at 2.34pm GMT on September 2nd, 2019, 7,727,623,693.
  await deployer.deploy( Enervator, [ tokenManager.address ] );
  const token = await Enervator.deployed();

  await tokenManager.setToken(token.address);
  await tokenManager.setSupply( 7727623693 );

  console.log( "static enervatorManagerAddress = \"" + tokenManager.address + "\"" );
  console.log( "static enervatorAddress = \"" + token.address + "\"" );
  console.log( "static depositAddress = \"" + deposit.address + "\"" );
  console.log( "static forexAddress = \"" + forex.address + "\"" );
  console.log( "static buyAddress = \"" + buy.address + "\"" );
  console.log( "static exchangerAddress = \"" + exchanger.address + "\"\n" );

};
