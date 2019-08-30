const StandardToken = artifacts.require("./StandardToken.sol");

require('openzeppelin-test-helpers/configure')({ web3 });
const { singletons } = require('openzeppelin-test-helpers');

module.exports = async function (deployer, network, accounts) {

  console.log("Default account ", accounts[0]);

  if ( (network === 'development')  || (network === 'rinkeby') || (network === 'ropsten') )  {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    await singletons.ERC1820Registry(accounts[0]);
  }

  await deployer.deploy( StandardToken, 4881174811, [] );
  const token = await StandardToken.deployed();
  const standardTokenAddress = "\"" + token.address + "\"";
  const supply = await token.totalSupply();
  const totalSupply = supply.toString(10);
  console.log( "static standardTokenAddress =", standardTokenAddress );
  console.log( "Total Supply = ", totalSupply );
};
