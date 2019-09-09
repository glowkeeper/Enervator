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

  await deployer.deploy( EnervatorManager, tokenValues, accounts[0] );
  const tokenManager = await EnervatorManager.deployed();

  // The world population at 2.34pm GMT on September 2nd, 2019, 7,727,623,693.
  await deployer.deploy( Enervator, 7727623693, [ tokenManager.address ] );
  const token = await Enervator.deployed();

  await tokenManager.setToken(token.address)

  //await token.setPerCapitaEnergy(perCapita);
  const value = await tokenManager.getUnitValue();
  const thisValue = parseInt(value.toString());
  const EORValue = thisValue / 2**64;

  const defaultOperators = await token.defaultOperators();
  let supply = await token.totalSupply();
  const balance = await token.balanceOf(accounts[0]);

  let totalSupply = supply.toString(10);
  const totalBalance = balance.toString(10);

  console.log( "static enervatorManagerAddress = \"" + tokenManager.address + "\"" );
  console.log( "static enervatorAddress = \"" + token.address + "\"" );
  console.log( "defaultOperators =", defaultOperators  );
  console.log( "Total Supply =", totalSupply );
  console.log( "EOR value US$" + EORValue.toFixed(2) );

  /*const newPerCapita = new BN('30', 10);
  perCapitaEnergy = multiplier.mul(newPerCapita);
  const newPerCapitaEnergy = web3.utils.toHex(perCapitaEnergy);
  await tokenManager.setPerCapitaEnergy ( newPerCapitaEnergy );
  const tokenPerCapitaEnergy = await tokenManager.getPerCapitaEnergy();
  const capitaEnergy = parseInt(tokenPerCapitaEnergy.toString(10));
  const thisCapitaEnergy = capitaEnergy / 2**64;
  console.log( "New perCapitaEnergy =", thisCapitaEnergy )

  await tokenManager.setSupply ( 8000000000 );
  supply = await token.totalSupply();
  totalSupply = supply.toString(10);
  console.log( "New Total Supply =", totalSupply );

  //console.log( accounts[0], "balance =", totalBalance );*/
};
