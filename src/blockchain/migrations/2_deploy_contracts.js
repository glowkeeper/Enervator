const StandardToken = artifacts.require("./StandardToken.sol");
const StandardTokenRecipient = artifacts.require('StandardTokenRecipient');


require('openzeppelin-test-helpers/configure')({ web3 });
const { singletons } = require('openzeppelin-test-helpers');

module.exports = async function (deployer, network, accounts) {

  console.log("Default account ", accounts[0]);

  if ( network === 'development') {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    await singletons.ERC1820Registry(accounts[0]);
  }

  await deployer.deploy( StandardToken, 7727623693, [] );
  const token = await StandardToken.deployed();
  await deployer.deploy( StandardTokenRecipient, token.address );
  const tokenRecipient = await StandardTokenRecipient.deployed();
  //await token.addToSupply(1000000000);

  const defaultOperators = await token.defaultOperators();
  const supply = await token.totalSupply();
  const balance = await token.balanceOf(accounts[0]);

  const totalSupply = supply.toString(10);
  const totalBalance = balance.toString(10);

  console.log( "static standardTokenAddress = \"" + token.address + "\"" );
  console.log( "Default Operators =", defaultOperators);
  console.log( "Total Supply =", totalSupply );
  console.log( accounts[0], "balance =", totalBalance );
};
