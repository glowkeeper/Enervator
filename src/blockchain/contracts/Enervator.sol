pragma solidity ^0.5.7;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./ABDKMath64x64.sol";

contract Enervator is ERC777, Ownable {

    uint256 constant private initialSupply = 7727623693;

    int256 private pricePerMWh;
    int256 private currentTPES;
    int256 private oldTPES;
    int256 private perCapitaEnergy;

    constructor( address[] memory _defaultOperators ) ERC777 ( "Enervator", "EOR", _defaultOperators ) public
    {
      _mint(msg.sender, msg.sender, initialSupply, "", "");

      pricePerMWh = 100 * 2**64;
      currentTPES = 162494360000 * 2**64;
      oldTPES = currentTPES;
      perCapitaEnergy = 0;
    }

    function setNewTPES ( int256  _amount ) public onlyOwner
    {
      require( _amount > 0 );

      oldTPES = currentTPES;
      currentTPES = _amount;
    }

    function setPerCapitaEnergy ( int256 _amount ) public onlyOwner
    {
      require( _amount > 0 );

      perCapitaEnergy = _amount;
    }

    function getPricePerMWh () public view returns ( int256 )
    {
        return pricePerMWh;
    }

    function getCurrentTPES () public view returns ( int256 )
    {
        return currentTPES;
    }

    function getOldTPES () public view returns ( int256 )
    {
        return oldTPES;
    }

    function getPerCapitaEnergy () public view returns ( int256 )
    {
        return perCapitaEnergy;
    }

    function getUnitValue () public view returns ( int256 )
    {
      require(
        perCapitaEnergy > 0 &&
        currentTPES > 0 &&
        oldTPES > 0 &&
        pricePerMWh > 0
      );

      int256 TPESFactor = int256(ABDKMath64x64.divi(oldTPES, currentTPES));
      int128 prePrice =  ABDKMath64x64.divi(TPESFactor, perCapitaEnergy);
      return ABDKMath64x64.muli(prePrice, pricePerMWh);
    }
}
