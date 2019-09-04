pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract Enervator is ERC777, Ownable {

    uint256 private currentTPES;
    uint256 private oldTPES;
    uint256 private perCapitaEnergy;

    uint256 constant private initialSupply = 7727623693;
    uint8 constant private pricePerMWh = 100;

    constructor( address[] memory _defaultOperators ) ERC777 ( "Enervator", "EOR", _defaultOperators ) public
    {
      _mint(msg.sender, msg.sender, initialSupply, "", "");

      currentTPES = 0;
      oldTPES = 0;
      perCapitaEnergy = 0;
    }

    function setNewTPES ( uint256  _amount ) public onlyOwner
    {
      require( _amount > 0 );
      
      oldTPES = currentTPES;
      currentTPES = _amount;
    }

    function setPerCapitaEnergy ( uint256  _amount ) public onlyOwner
    {
      require( _amount > 0 );
      perCapitaEnergy = _amount;
    }

    function getPricePerMWh () public pure returns ( uint8 )
    {
        return pricePerMWh;
    }

    function getCurrentTPES () public view returns ( uint256 )
    {
        return currentTPES;
    }

    function getOldTPES () public view returns ( uint256 )
    {
        return oldTPES;
    }

    function getPerCapitaEnergy () public view returns ( uint256 )
    {
        return perCapitaEnergy;
    }

}
