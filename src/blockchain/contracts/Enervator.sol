pragma solidity ^0.5.7;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./ABDKMath64x64.sol";

contract Enervator is ERC777, Ownable {

    uint256 constant private initialSupply = 7727623693;

    int128 private pricePerMWh;
    int128 private currentTPES;
    int128 private oldTPES;
    int128 private perCapitaEnergy;

    constructor( address[] memory _defaultOperators ) ERC777 ( "Enervator", "EOR", _defaultOperators ) public
    {
      _mint(msg.sender, msg.sender, initialSupply, "", "");

      pricePerMWh = 100 * 2**64;
      currentTPES = 162494360000 * 2**64;
      oldTPES = currentTPES;
      perCapitaEnergy = 0;
    }

    function setNewTPES ( int128  _amount ) public onlyOwner
    {
      require( _amount > 0 );

      oldTPES = currentTPES;
      currentTPES = _amount;
    }

    function setPerCapitaEnergy ( int128 _amount ) public onlyOwner
    {
      require( _amount > 0 );

      perCapitaEnergy = _amount;
    }

    function getPricePerMWh () public view returns ( int128 )
    {
        return pricePerMWh;
    }

    function getCurrentTPES () public view returns ( int128 )
    {
        return currentTPES;
    }

    function getOldTPES () public view returns ( int128 )
    {
        return oldTPES;
    }

    function getPerCapitaEnergy () public view returns ( int128 )
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

      int128 TPESFactor = ABDKMath64x64.div(oldTPES, currentTPES);
      int128 prePrice =  ABDKMath64x64.div(TPESFactor, perCapitaEnergy);
      return ABDKMath64x64.mul(prePrice, pricePerMWh);
    }
}
