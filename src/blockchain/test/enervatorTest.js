const Enervator = artifacts.require("Enervator");
const EnervatorManager = artifacts.require('./EnervatorManager.sol');
const Forex = artifacts.require('./Forex.sol');
const Exchanger = artifacts.require('./Exchanger.sol');
const Deposit = artifacts.require('./Deposit.sol');
const Buy = artifacts.require('./Buy.sol');

const ethers = require('ethers');
const BN = require('bn.js');

contract("Enervator Test", async accounts => {

  beforeEach(async function () {

    this.manager = await EnervatorManager.deployed();
    this.token = await Enervator.deployed();
    this.exchanger = await Exchanger.deployed();
    this.forex = await Forex.deployed();
    this.deposit = await Deposit.deployed();
    this.buy = await Buy.deployed();

    const two = new BN('2', 10);
    const sixtyFour = new BN('64', 10);
    this.multiplier = two.pow(sixtyFour);

  });

  it('has the correct name', async function () {

    const name = await this.token.name()

    assert.equal( name, 'Enervator' );

  });

  it('has the correct symbol', async function () {

    const symbol = await this.token.symbol()

    assert.equal( symbol, 'EOR' );

  });

  it('has the correct current TPES', async function () {

    const TPES = await this.manager.getCurrentTPES()
    const retrievedTPES = TPES.div(this.multiplier);
    const currentTPES = retrievedTPES.toString();

    assert.equal( currentTPES, '162494360000' );

  });

  it('has the correct old TPES', async function () {

    const TPES = new BN('200000000000', 10)
    const hexTPES = web3.utils.toHex(this.multiplier.mul(TPES))
    await this.manager.setNewTPES(hexTPES)

    const currentTPES = await this.manager.getCurrentTPES()
    const oldTPES = await this.manager.getOldTPES()

    const retrievedCurrentTPES = currentTPES.div(this.multiplier);
    const thisCurrentTPES = retrievedCurrentTPES.toString();
    const retrievedOldTPES = oldTPES.div(this.multiplier);
    const thisOldTPES = retrievedOldTPES.toString();

    assert.equal( thisOldTPES, '162494360000' );
    assert.equal( thisCurrentTPES, '200000000000' );

  });

  it('has the correct per capita energy', async function () {

    const perCapita = await this.manager.getPerCapitaEnergy()
    const retrievedPerCapita = perCapita.div(this.multiplier);
    const thisPerCapita = retrievedPerCapita.toString();

    assert.equal( thisPerCapita, '22' );

  });

  it('has the correct unit value', async function () {

    const unitValue = await this.manager.getUnitValue()
    const retrievedUnitValue = parseFloat(unitValue.toString());
    const thisUnitValue = (retrievedUnitValue / 2**64).toFixed(2);

    assert.equal( "4.45", thisUnitValue );

  });

  it('has the correct total supply', async function () {

    const supply = await this.token.totalSupply()
    const totalSupply = supply.toString(10);

    assert.equal( totalSupply, '7727623693' );

  });

  it('Sets supply correctly', async function () {

    await this.manager.setToken(this.token.address);
    await this.manager.setSupply(8000000000);
    const supply = await this.token.totalSupply()
    const totalSupply = supply.toString();

    assert.equal( totalSupply, '8000000000' );

  });

  it('has the correct rate', async function () {

    const code = ethers.utils.formatBytes32String( "RUP" );
    const rate = '10';
    const bigRate = new BN( rate, 10 );
    const rupRate = this.multiplier.mul(bigRate);
    await this.exchanger.setRate( code, web3.utils.toHex(rupRate) );
    const savedRate = await this.forex.getRate( code );
    const retrievedRate = savedRate.div(this.multiplier);
    const thisRate = retrievedRate.toString();

    assert.equal( thisRate, rate );

  });

  it('deposits correctly', async function () {

    const code = ethers.utils.formatBytes32String( "RUP" );
    const depositRef = ethers.utils.formatBytes32String( "RUPDEP" );
    const amount = '100';
    const bigAmount = new BN( amount, 10 );
    const rupAmount = this.multiplier.mul(bigAmount);
    await this.exchanger.deposit( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3', depositRef, code, rupAmount );
    const savedAmount = await this.deposit.getDepositedAmount( depositRef );
    const retrievedAmount = savedAmount.div( this.multiplier );
    const thisAmount = retrievedAmount.toString();

    assert.equal( thisAmount, amount );

  });

  it('Correct forex calcs', async function () {

    const code = ethers.utils.formatBytes32String( "RUP" );
    const amount = '100';
    const bigAmount = new BN( amount, 10 );
    const eorAmount = await this.forex.getEORAmount( code, bigAmount );
    const savedRate = await this.forex.getRate( code );
    const retrievedRate = savedRate.div(this.multiplier);
    const expectedAmount = parseInt(amount) / retrievedRate;
    const thisEorAmount = eorAmount.toString();

    assert.equal( thisEorAmount, expectedAmount );

  });

  it('Buys correctly', async function () {

    const code = ethers.utils.formatBytes32String( "RUP" );

    const oldBalance = await this.token.balanceOf( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3' );
    const thisOldBalance = parseInt(oldBalance.toString())

    const amount = '100';
    const bigAmount = new BN( amount, 10 );
    const eorAmount = await this.forex.getEORAmount( code, bigAmount );
    const thisEorAmount = parseInt(eorAmount.toString());

    const buyRef = ethers.utils.formatBytes32String( "RUPBUY" );
    const depositRef = ethers.utils.formatBytes32String( "RUPDEP" );
    await this.exchanger.buy( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3', buyRef, depositRef );

    balance = await this.token.balanceOf( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3' );
    thisBalance = parseInt(balance.toString());

    assert.equal( thisBalance, thisOldBalance + thisEorAmount );

  });

});
