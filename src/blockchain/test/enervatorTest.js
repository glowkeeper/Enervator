const Enervator = artifacts.require("Enervator");
const EnervatorManager = artifacts.require('./EnervatorManager.sol');
const Forex = artifacts.require('./Forex.sol');
const Exchanger = artifacts.require('./Exchanger.sol');
const Deposit = artifacts.require('./Deposit.sol');
const Buy = artifacts.require('./Buy.sol');

const ethers = require('ethers');
const DECIMAL = require('decimal.js');
const BIG = require('bignumber.js');
const BN = require('bn.js');

contract("Enervator Test", async function ( network )
{

  beforeEach( async function () {

    if ( network === 'rinkeby' )
    {

      /*
      use deployed contracts...
      Rinkeby Addresses
      static enervatorManagerAddress = "0xbC523aF797704089a2B8Cf563C84c9ffcE2A61cf"
      static enervatorAddress = "0xA6851748083E59897C74240544C39b976Fe14Be2"
      static depositAddress = "0x7F39C8f98bC25e58d374D066100c80EEbf1a6008"
      static forexAddress = "0x52f6d7eA2A50703a5CEB345d4C974d5faCdb925E"
      static buyAddress = "0x0bf35BE5988f810e0A3917991Ba641078e9dcffF"
      static exchangerAddress = "0xD2976BaB578B04A30580d3920a0493b259624846"

      */

      this.manager = await EnervatorManager.at('0xbC523aF797704089a2B8Cf563C84c9ffcE2A61cf');
      this.token = await Enervator.at('0xA6851748083E59897C74240544C39b976Fe14Be2');
      this.deposit = await Deposit.at('0x7F39C8f98bC25e58d374D066100c80EEbf1a6008');
      this.forex = await Forex.at('0x52f6d7eA2A50703a5CEB345d4C974d5faCdb925E');
      this.buy = await Buy.at('0x0bf35BE5988f810e0A3917991Ba641078e9dcffF')
      this.exchanger = await Exchanger.at('0xD2976BaB578B04A30580d3920a0493b259624846');

    } else
    {

      this.manager = await EnervatorManager.deployed()
      this.token = await Enervator.deployed()
      this.exchanger = await Exchanger.deployed()
      this.forex = await Forex.deployed()
      this.deposit = await Deposit.deployed()
      this.buy = await Buy.deployed()

    }

    const two = new BN('2', 10)
    const sixtyFour = new BN('64', 10)
    this.multiplier = two.pow(sixtyFour)

    const ten = new BN('10', 10)
    const eighteen = new BN('18', 10)
    this.decimilisation = ten.pow(eighteen)

  });

  it('has the correct name', async function () {

    const name = await this.token.name()

    assert.equal( name, 'Enervator' )

  });

  it('has the correct symbol', async function () {

    const symbol = await this.token.symbol()

    assert.equal( symbol, 'EOR' )

  });

  it('Sets supply correctly', async function () {

    const newSupply = new BN('7727623693', 10)
    const shiftedSupply = this.decimilisation.mul( newSupply )
    await this.manager.addTokens(shiftedSupply)
    const supply = await this.token.totalSupply()
    const retrievedNewSupply = supply.div(this.decimilisation)
    const thisRetrievedNewSupply = parseInt(retrievedNewSupply.toString())

    assert.equal( thisRetrievedNewSupply, '7727623693' )

  });

  it('has the correct current TPES', async function () {

    const TPES = await this.manager.getCurrentTPES()
    const retrievedTPES = TPES.div(this.multiplier)
    const currentTPES = retrievedTPES.toString()

    assert.equal( currentTPES, '162494360000' )

  });

  it('has the correct old TPES', async function () {

    const TPES = new BN('162494360000', 10)
    const thisTPES = this.multiplier.mul(TPES)
    await this.manager.setNewTPES(thisTPES)

    const currentTPES = await this.manager.getCurrentTPES()
    const oldTPES = await this.manager.getOldTPES()

    const retrievedCurrentTPES = currentTPES.div(this.multiplier)
    const thisCurrentTPES = retrievedCurrentTPES.toString()
    const retrievedOldTPES = oldTPES.div(this.multiplier)
    const thisOldTPES = retrievedOldTPES.toString()

    assert.equal( thisOldTPES, '162494360000' )
    assert.equal( thisCurrentTPES, '162494360000' )

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

  it('has the correct rate', async function () {

    const code = ethers.utils.formatBytes32String( "USD" )
    const rate = new DECIMAL(7.3)
    const thisTwo = new DECIMAL(2)
    const thisSixtyFour = new DECIMAL(64)
    const thisMultiplier = thisTwo.pow(thisSixtyFour)
    const thisNewBigRate = thisMultiplier.mul(rate)
    //console.log(thisNewBigRate)
    //const bigRate = new BN( rate, 10 )
    //const thisRate = this.multiplier.mul(bigRate)
    //await this.exchanger.setRate( code, thisRate )
    await this.exchanger.setRate( code, thisNewBigRate.toString() )
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
    await this.exchanger.deposit( '0xcE34954ad4018B58c3dD974A46D8246850190280', depositRef, code, thisAmount )
    const savedAmount = await this.deposit.getDepositedAmount( depositRef )
    const retrievedAmount = savedAmount.div( this.multiplier )
    const thisRetrievedAmount = retrievedAmount.toString()

    assert.equal( thisRetrievedAmount, amount )

  });

  it('Buys correctly', async function () {

    const buyRef = ethers.utils.formatBytes32String( "USDBUY" )
    const depositRef = ethers.utils.formatBytes32String( "USDDEP" )
    const amount = await this.deposit.getDepositedAmount( depositRef )
    await this.exchanger.buy( '0xcE34954ad4018B58c3dD974A46D8246850190280', buyRef, depositRef, amount )
    const newDepositedAmount = await this.deposit.getDepositedAmount( depositRef )
    const canWithdraw = await this.deposit.getCanWithdraw( depositRef )

    assert.equal( newDepositedAmount, 0 )
    assert.equal( canWithdraw, false )

  });

});
