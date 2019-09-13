const Enervator = artifacts.require("Enervator");

contract("Enervator Test", async accounts => {

  it('has a name', async function () {
    const token = await Enervator.deployed();
    const name = await token.name()
    assert.equal( name, 'Enervator' );
  });

  it('has a symbol', async function () {
    const token = await Enervator.deployed();
    const symbol = await token.symbol()
    assert.equal( symbol, 'EOR' );
  });

});
