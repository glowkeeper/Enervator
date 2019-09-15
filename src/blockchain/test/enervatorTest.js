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

    this.manager = await EnervatorManager.deployed()
    this.token = await Enervator.deployed()
    this.exchanger = await Exchanger.deployed()
    this.forex = await Forex.deployed()
    this.deposit = await Deposit.deployed()
    this.buy = await Buy.deployed()

    /* Rinkeby Addresses

    static enervatorManagerAddress = "0x48B98faB029Cd2c77afA780Ab94c2d4e2f4879dA"
  static enervatorAddress = "0x4E302158Ee8FC54f4959Bc071cb050AfD723cC73"
  static depositAddress = "0x9CC34aD7dde699bA2A51cE086Dc2b34c452D65F1"
  static forexAddress = "0x5aC3766194C2C44FC43Ed922C341Ba6aA6406AC1"
  static buyAddress = "0xb93f64763Fad8f01FdebEbb04023362e55Ae0B86"
  static exchangerAddress = "0xB09c0693a4dD839bAe887465Cb930FFe609f1C3d"

  */

    /* this.manager = await EnervatorManager.at('0x48B98faB029Cd2c77afA780Ab94c2d4e2f4879dA');
    this.token = await Enervator.at('0x4E302158Ee8FC54f4959Bc071cb050AfD723cC73');
    this.deposit = await Deposit.at('0x9CC34aD7dde699bA2A51cE086Dc2b34c452D65F1');
    this.forex = await Forex.at('0x5aC3766194C2C44FC43Ed922C341Ba6aA6406AC1');
    this.buy = await Buy.at('0xb93f64763Fad8f01FdebEbb04023362e55Ae0B86')
    this.exchanger = await Exchanger.at('0xB09c0693a4dD839bAe887465Cb930FFe609f1C3d'); */

    const two = new BN('2', 10)
    const sixtyFour = new BN('64', 10)
    this.multiplier = two.pow(sixtyFour)

  });

  it('has the correct name', async function () {

    const name = await this.token.name()

    assert.equal( name, 'Enervator' )

  });

  it('has the correct symbol', async function () {

    const symbol = await this.token.symbol()

    assert.equal( symbol, 'EOR' )

  });

  it('has the correct current TPES', async function () {

    const TPES = await this.manager.getCurrentTPES()
    const retrievedTPES = TPES.div(this.multiplier)
    const currentTPES = retrievedTPES.toString()

    assert.equal( currentTPES, '162494360000' )

  });

  it('has the correct old TPES', async function () {

    const TPES = new BN('200000000000', 10)
    const thisTPES = this.multiplier.mul(TPES)
    await this.manager.setNewTPES(thisTPES)

    const currentTPES = await this.manager.getCurrentTPES()
    const oldTPES = await this.manager.getOldTPES()

    const retrievedCurrentTPES = currentTPES.div(this.multiplier)
    const thisCurrentTPES = retrievedCurrentTPES.toString()
    const retrievedOldTPES = oldTPES.div(this.multiplier)
    const thisOldTPES = retrievedOldTPES.toString()

    assert.equal( thisOldTPES, '162494360000' )
    assert.equal( thisCurrentTPES, '200000000000' )

  });

  it('has the correct per capita energy', async function () {

    const perCapita = await this.manager.getPerCapitaEnergy()
    const retrievedPerCapita = perCapita.div(this.multiplier)
    const thisPerCapita = retrievedPerCapita.toString()

    assert.equal( thisPerCapita, '22' )

  });

  it('has the correct unit value', async function () {

    // 2017 global average residential electricity price * ( old TPES / current TPES ) / annual global per capita energy use

    const pricePerMWh = await this.manager.getPricePerMWh()
    const currentTPES = await this.manager.getCurrentTPES()
    const oldTPES = await this.manager.getOldTPES()
    const perCapita = await this.manager.getPerCapitaEnergy()
    const derivedUnitValue = parseFloat( pricePerMWh.toString() ) * ( parseFloat( oldTPES.toString() ) / parseFloat( currentTPES.toString() ) ) / parseFloat( perCapita.toString() )
    const thisDerivedUnitValue = ( derivedUnitValue ).toFixed( 2 )

    const unitValue = await this.manager.getUnitValue()
    const retrievedUnitValue = parseFloat(unitValue.toString())
    const thisUnitValue = ( retrievedUnitValue / 2**64 ).toFixed( 2 )

    assert.equal( thisDerivedUnitValue, thisUnitValue )

  });

  it('Adds correctly', async function () {

    const supply = new BN('8000000000', 10)
    const shiftedSupply = this.multiplier.mul(supply)
    await this.manager.addTokens(shiftedSupply)
    const newSupply = await this.token.totalSupply()
    const retrievedNewSupply = newSupply.div(this.multiplier)
    const thisRetrievedNewSupply = parseInt(retrievedNewSupply.toString())

    assert.equal( thisRetrievedNewSupply, '8000000000' )

  });

  it('has the correct rate', async function () {

    const code = ethers.utils.formatBytes32String( "USD" )
    const rate = '20'
    const bigRate = new BN( rate, 10 )
    const thisRate = this.multiplier.mul(bigRate)
    await this.exchanger.setRate( code, thisRate )
    const savedRate = await this.forex.getRate( code )
    const retrievedRate = savedRate.div(this.multiplier)
    const thisRetrievedRate = parseFloat(retrievedRate.toString())

    assert.equal( thisRetrievedRate, rate )

  });

  it('deposits correctly', async function () {

    const code = ethers.utils.formatBytes32String( "USD" )
    const depositRef = ethers.utils.formatBytes32String( "USDDEP" )
    const amount = '1000'
    const bigAmount = new BN( amount, 10 )
    const thisAmount = this.multiplier.mul(bigAmount)
    await this.exchanger.deposit( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3', depositRef, code, thisAmount )
    const savedAmount = await this.deposit.getDepositedAmount( depositRef )
    const retrievedAmount = savedAmount.div( this.multiplier )
    const thisRetrievedAmount = retrievedAmount.toString()

    assert.equal( thisRetrievedAmount, amount )

  });

  it('Correct forex calcs', async function () {

    const code = ethers.utils.formatBytes32String( "USD" )
    const amount = '1000'
    const bigAmount = new BN( amount, 10 )
    const eorAmount = await this.forex.getEORAmount( code, bigAmount )
    const savedRate = await this.forex.getRate( code )
    const retrievedRate = savedRate.div(this.multiplier)
    const expectedAmount = parseInt(amount) / retrievedRate
    const thisEorAmount = eorAmount.toString()

    assert.equal( thisEorAmount, expectedAmount )

  });

  it('Buys correctly', async function () {

    const code = ethers.utils.formatBytes32String( "USD" )

    const oldBalance = await this.token.balanceOf( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3' )

    const amount = '1000'
    const bigAmount = new BN( amount, 10 )
    const thisAmount = this.multiplier.mul(bigAmount)
    const eorAmount = await this.forex.getEORAmount( code, thisAmount )
    const thisEorAmount = parseFloat(eorAmount.toString())

    const buyRef = ethers.utils.formatBytes32String( "USDBUY" )
    const depositRef = ethers.utils.formatBytes32String( "USDDEP" )
    await this.exchanger.buy( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3', buyRef, depositRef, thisAmount )

    balance = await this.token.balanceOf( '0xc220728701829A7351Fa3e16b11Aaf223543AAc3' )

    assert.equal( balance, oldBalance + thisEorAmount )

  });

});
