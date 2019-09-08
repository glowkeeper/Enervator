pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./ABDKMath64x64.sol";

contract Enervator is ERC777, Ownable {

    struct TokenValues {
      uint256 supply;
      int128 pricePerMWh;
      int128 currentTPES;
      int128 oldTPES;
      int128 perCapitaEnergy;
      int256 unitValue;
    }

    TokenValues private values;

    constructor(
      TokenValues memory _values,
      address[] memory _defaultOperators ) ERC777 ( "Enervator", "EOR", _defaultOperators ) public
    {
      require (_values.supply > 0, "Supply invalid");
      require (_values.pricePerMWh > 0, "pricePerMWh invalid");
      require (_values.currentTPES > 0, "currentTPES invalid");
      require (_values.oldTPES > 0, "oldTPES invalid");
      require (_values.perCapitaEnergy > 0, "perCapitaEnergy invalid");

      values.supply = _values.supply;
      values.pricePerMWh = _values.pricePerMWh;
      values.currentTPES = _values.currentTPES;
      values.oldTPES = _values.oldTPES;
      values.perCapitaEnergy = _values.perCapitaEnergy;

      _setUnitValue();
      _mint(msg.sender, msg.sender, values.supply, "", "");
    }

    function _setUnitValue () private
    {
      require (values.pricePerMWh > 0, "pricePerMWh invalid");
      require (values.currentTPES > 0, "currentTPES invalid");
      require (values.oldTPES > 0, "oldTPES invalid");
      require (values.perCapitaEnergy > 0, "perCapitaEnergy invalid");

      int128 TPESFactor = ABDKMath64x64.div(values.oldTPES, values.currentTPES);
      int128 prePrice =  ABDKMath64x64.div(TPESFactor, values.perCapitaEnergy);
      values.unitValue = ABDKMath64x64.mul(prePrice, values.pricePerMWh);
    }

    function setNewTPES ( int128  _amount ) public onlyOwner
    {
      require( _amount > 0 );

      values.oldTPES = values.currentTPES;
      values.currentTPES = _amount;
      _setUnitValue();
    }

    function setPerCapitaEnergy ( int128 _amount ) public onlyOwner
    {
      require( _amount > 0 );

      values.perCapitaEnergy = _amount;
      _setUnitValue();
    }

    function setSupply ( uint256 _amount ) public onlyOwner
    {
      require( _amount > 0 );

      uint256 difference = 0;
      if ( _amount != values.supply ) {
        if ( _amount < values.supply ) {
          difference = values.supply - _amount;
          //burn
        } else {
          difference = _amount - values.supply;
          _mint(msg.sender, msg.sender, difference, "", "");
        }
      }
      values.supply = _amount;
      _setUnitValue();
    }

    function getPricePerMWh () public view returns ( int128 )
    {
        return values.pricePerMWh;
    }

    function getCurrentTPES () public view returns ( int128 )
    {
        return values.currentTPES;
    }

    function getOldTPES () public view returns ( int128 )
    {
        return values.oldTPES;
    }

    function getPerCapitaEnergy () public view returns ( int128 )
    {
        return values.perCapitaEnergy;
    }

    function getUnitValue () public view returns ( int256 )
    {
      return values.unitValue;
    }
}
