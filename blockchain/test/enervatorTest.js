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
      this.deposit = await Deposit.at('0x7F39C8f98bC25e58d374D066100c80EEbf1a6008');
      this.forex = await Forex.at('0x52f6d7eA2A50703a5CEB345d4C974d5faCdb925E');
      this.buy = await Buy.at('0x0bf35BE5988f810e0A3917991Ba641078e9dcffF')
      this.exchanger = await Exchanger.at('0xD2976BaB578B04A30580d3920a0493b259624846');

    } else
    {

      this.manager = await EnervatorManager.deployed()
      this.exchanger = await Exchanger.deployed()
      this.forex = await Forex.deployed()
      this.deposit = await Deposit.deployed()
      this.buy = await Buy.deployed()

    }

    const two = new BN('2', 10)
    const sixtyFour = new BN('64', 10)
    this.twos = two.pow(sixtyFour)

    const ten = new BN('10', 10)
    const eighteen = new BN('18', 10)
    this.decimilisation = ten.pow(eighteen)

  });

  it('has the correct name', async function () {

    const name = await this.manager.getTokenName()
    assert.equal( name, 'Enervator' )

  });

  it('has the correct symbol', async function () {

    const symbol = await this.manager.getTokenSymbol()
    assert.equal( symbol, 'EOR' )

  });

  it('Sets supply correctly', async function () {

    const newSupply = new BN('7727623693')
    const shiftedSupply = this.decimilisation.mul( newSupply )
    await this.manager.addTokens(shiftedSupply)
    const supply = await this.manager.getTotalSupply()
    const retrievedNewSupply = supply.div(this.decimilisation)
    const thisRetrievedNewSupply = parseInt(retrievedNewSupply.toString())
    assert.equal( thisRetrievedNewSupply, '7727623693' )

  });

  /* it('Burns correctly', async function () {

    const burnAmount = new BN('1000000000', 10)
    const shiftedBurn = this.decimilisation.mul( burnAmount )
    await this.manager.burnTokens(shiftedBurn)
    const supply = await this.manager.getTotalSupply()
    const retrievedNewSupply = supply.div(this.decimilisation)
    const thisRetrievedNewSupply = parseInt(retrievedNewSupply.toString())
    const supplyShouldEqual = 7727623693 - 1000000000
    assert.equal( thisRetrievedNewSupply, supplyShouldEqual )

  });*/

  it('has the correct current TPES', async function () {

    const TPES = await this.manager.getCurrentTPES()
    const retrievedTPES = TPES.div(this.twos)
    const currentTPES = retrievedTPES.toString()
    assert.equal( currentTPES, '162494360000' )

  });

  it('has the correct old TPES', async function () {

    const TPES = new BN('162494360000', 10)
    const thisTPES = this.twos.mul(TPES)
    await this.manager.setTPES(thisTPES)
    const currentTPES = await this.manager.getCurrentTPES()
    const oldTPES = await this.manager.getOldTPES()
    const retrievedCurrentTPES = currentTPES.div(this.twos)
    const thisCurrentTPES = retrievedCurrentTPES.toString()
    const retrievedOldTPES = oldTPES.div(this.twos)
    const thisOldTPES = retrievedOldTPES.toString()
    assert.equal( thisOldTPES, '162494360000' )
    assert.equal( thisCurrentTPES, '162494360000' )

  });

  it('has the correct per capita energy', async function () {

    const perCapita = await this.manager.getPerCapitaEnergy()
    const retrievedPerCapita = perCapita.div(this.twos)
    const thisPerCapita = retrievedPerCapita.toString()
    assert.equal( thisPerCapita, '22' )

  });

  it('has the correct unit value', async function () {

    const pricePerMWh = await this.manager.getPricePerMWh()
    const currentTPES = await this.manager.getCurrentTPES()
    const oldTPES = await this.manager.getOldTPES()
    const perCapita = await this.manager.getPerCapitaEnergy()
    const derivedUnitValue = parseFloat( pricePerMWh.toString() ) * ( parseFloat( oldTPES.toString() ) / parseFloat( currentTPES.toString() ) ) / parseFloat( perCapita.toString() )
    const thisDerivedUnitValue = ( derivedUnitValue ).toFixed( 2 )
    const retrievedUnitValue = await this.manager.getUnitValue()
    const unitValue = parseFloat(retrievedUnitValue.toString())
    const thisUnitValue = ( unitValue / 2**64 ).toFixed( 2 )
    assert.equal( thisDerivedUnitValue, thisUnitValue )

  });

  it('has the correct rate', async function () {

    const code = ethers.utils.formatBytes32String( "GBP" )
    const rate = 0.8
    const retrievedUnitValue = await this.manager.getUnitValue()
    const unitValue = parseFloat(retrievedUnitValue.toString())
    const thisUnitValue = ( unitValue / 2**64 ).toFixed( 2 )
    const exchangeRate = rate * thisUnitValue

    const thisBigExchangeRate = new DECIMAL(exchangeRate)
    const ten = new DECIMAL('10', 10)
    const eighteen = new DECIMAL('18', 10)
    const decimilisation = ten.pow(eighteen)

    const thisNewBigExchangeRate = decimilisation.mul(thisBigExchangeRate)

    //console.log ( rate, thisUnitValue, exchangeRate, thisNewBigExchangeRate.toHexadecimal() )

    await this.exchanger.setRate( code, thisNewBigExchangeRate.toHexadecimal() )

    const retreivedRate = await this.forex.getRate( code )
    const thisRate = parseFloat(retreivedRate.toString())
    const thisShiftedRate = thisRate / 10**18
    assert.equal( thisShiftedRate, exchangeRate )
  });

  it('deposits correctly', async function () {

    const code = ethers.utils.formatBytes32String( "GBP" )
    const depositRef = ethers.utils.formatBytes32String( "GBPDEP" )
    const amount = '1000'
    const bigAmount = new BN( amount )
    const thisAmount = this.decimilisation.mul(bigAmount)
    await this.exchanger.deposit( '0xe0d0671873163a87861b805C69693Da1F7998f87', depositRef, code, thisAmount )
    const savedAmount = await this.deposit.getDepositedAmount( depositRef )
    const retrievedAmount = savedAmount.div( this.decimilisation )
    const thisRetrievedAmount = retrievedAmount.toString()
    assert.equal( thisRetrievedAmount, amount )

  });

  it('Buys correctly', async function () {

    const buyRef = ethers.utils.formatBytes32String( "GBPBUY" )
    const depositRef = ethers.utils.formatBytes32String( "GBPDEP" )
    const code = await this.deposit.getDepositedCode( depositRef )
    const retrievedAmount = await this.deposit.getDepositedAmount( depositRef )
    const savedAmount = parseFloat(retrievedAmount.toString())
    const thisShiftedAmount  = savedAmount / 10**18
    const retreivedRate = await this.forex.getRate( code )
    const thisRate = parseFloat(retreivedRate.toString())
    const thisShiftedRate = thisRate / 10**18
    const amountWEI = thisShiftedAmount / thisShiftedRate

    const bigAmountWei = new DECIMAL(amountWEI)
    const ten = new DECIMAL('10', 10)
    const eighteen = new DECIMAL('18', 10)
    const decimilisation = ten.pow(eighteen)
    const thisAmountWei =  bigAmountWei.mul(decimilisation)

    //const wEIToString = "0x" + thisAmountWei.toString()

    const supply = await this.manager.getTotalSupply()

    console.log( thisShiftedAmount, thisShiftedRate, amountWEI, thisAmountWei.toHexadecimal(), supply.toString() )

    const buyData = {
      buyer: '0xe0d0671873163a87861b805C69693Da1F7998f87',
      buyRef: buyRef,
      depositRef: depositRef,
      amountWEI: thisAmountWei.toHexadecimal()
    }

    await this.exchanger.buy( buyData )
    const newDepositedAmount = await this.deposit.getDepositedAmount( depositRef )
    const canWithdraw = await this.deposit.getCanWithdraw( depositRef )
    assert.equal( newDepositedAmount, 0 )
    assert.equal( canWithdraw, false )

  });

});
