const Enervator = artifacts.require("./Enervator.sol");
const EnervatorManager = artifacts.require('./EnervatorManager.sol');


require('openzeppelin-test-helpers/configure')({ web3 });
const { singletons } = require('openzeppelin-test-helpers');

module.exports = async function (deployer, network, accounts) {

  console.log("Default account ", accounts[0]);

  if ( network === 'development') {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    await singletons.ERC1820Registry(accounts[0]);
  }

  await deployer.deploy( EnervatorManager );
  const tokenManager = await EnervatorManager.deployed();

  await deployer.deploy( Enervator, [ tokenManager.address ] );
  const token = await Enervator.deployed();

  await tokenManager.setToken(token.address)

  await token.setNewTPES ( uint256  _amount ) 

  function setPerCapitaEnergy ( uint256  _amount ) public onlyOwner
  {
    require( _amount > 0 );
    perCapitaEnergy = _amount;
  }

  const defaultOperators = await token.defaultOperators();
  const supply = await token.totalSupply();
  const balance = await token.balanceOf(accounts[0]);

  const totalSupply = supply.toString(10);
  const totalBalance = balance.toString(10);

  console.log( "static enervatorManagerAddress = \"" + tokenManager.address + "\"" );
  console.log( "static enervatorAddress = \"" + token.address + "\"" );
  console.log( "defaultOperators =", defaultOperators);
  console.log( "Total Supply =", totalSupply );
  //console.log( accounts[0], "balance =", totalBalance );
};
