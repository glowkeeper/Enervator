const StandardToken = artifacts.require("./StandardToken.sol");

module.exports = function(deployer) {

  let standardTokenAddress;

  deployer.deploy(StandardToken, 4881174811, []).then(() => {
    standardTokenAddress = "\"" + StandardToken.address + "\"";
  });

  deployer.then( () => {
    console.log("static standardTokenAddress =", standardTokenAddress);
  });
};
