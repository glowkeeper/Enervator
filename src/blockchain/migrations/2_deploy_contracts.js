const Enervator = artifacts.require("./Enervator.sol");
const EnervatorManager = artifacts.require('./EnervatorManager.sol');
const BigNumber = require('bignumber.js');
const BN = require('bn.js');

require('openzeppelin-test-helpers/configure')({ web3 });
const { singletons } = require('openzeppelin-test-helpers');

module.exports = async function (deployer, network, accounts) {

  console.log("Default account ", accounts[0]);

  if ( network === 'development') {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    await singletons.ERC1820Registry(accounts[0]);
  }

  // The world population at 2.34pm GMT on September 2nd, 2019, 7,727,623,693.
  // 2017 global average residential electricity price was US$98.16 per MWh. That's used as a constant thereafter.
  // 2016 total primary energy supply (TPES) was 162494360000 MWh.
  // 2014 global per capita energy consumption was 22.35853544 MegaWatt hours

  //const pricePerMWh = 98.16 * 2**64 = 0x6228F5C420EA870000;
  //const perCapitaEnergy = new BN(22.35853544 * 2**64);
  //const currentTPES = new BN(162494360000 * 2**64);
  const two = new BN('2', 10);
  const sixtyFour = new BN('64', 10);
  const multiplier = two.pow(sixtyFour);
  //console.log(multiplier.toString(10));
  const TPES = new BN('162494360000', 10);
  const currentTPES = multiplier.mul(TPES);
  const oldTPES = currentTPES;
  const price = new BN('98', 10);
  const pricePerMWh = multiplier.mul(price);
  const perCapita = new BN('22', 10);
  const perCapitaEnergy = multiplier.mul(perCapita);

  //console.log(pricePerMWh.toString());

  /*const pricePerMWh = new web3.utils.BN(1.8107324e+21);
  const currentTPES = new web3.utils.BN(2.9974919e+30);
  const oldTPES = new web3.utils.BN(2.9974919e+30);
  const perCapitaEnergy = new web3.utils.BN(4.1244218e+20);*/

  const tokenValues = {
    supply: 7727623693,
    pricePerMWh: web3.utils.toHex(pricePerMWh),
    currentTPES: web3.utils.toHex(currentTPES),
    oldTPES: web3.utils.toHex(oldTPES),
    perCapitaEnergy: web3.utils.toHex(perCapitaEnergy),
    unitValue: 0
  }

  await deployer.deploy( EnervatorManager );
  const tokenManager = await EnervatorManager.deployed();

  await deployer.deploy( Enervator, tokenValues, [ tokenManager.address ] );
  const token = await Enervator.deployed();

  await tokenManager.setToken(token.address)

  //await token.setPerCapitaEnergy(perCapita);
  const value = await token.getUnitValue();
  const thisValue = parseInt(value.toString());
  const EORValue = thisValue / 2**64;

  const defaultOperators = await token.defaultOperators();
  const supply = await token.totalSupply();
  const balance = await token.balanceOf(accounts[0]);

  const totalSupply = supply.toString(10);
  const totalBalance = balance.toString(10);

  console.log("EOR value US$" + EORValue.toFixed(2));

  console.log( "static enervatorManagerAddress = \"" + tokenManager.address + "\"" );
  console.log( "static enervatorAddress = \"" + token.address + "\"" );
  console.log( "defaultOperators =", defaultOperators);
  console.log( "Total Supply =", totalSupply );
  //console.log( accounts[0], "balance =", totalBalance );
};
