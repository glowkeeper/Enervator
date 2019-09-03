pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract StandardToken is ERC777 {

    constructor( uint256 _initialSupply, address[] memory _defaultOperators ) ERC777("StandardToken", "STK", _defaultOperators ) public
    {
      _mint(msg.sender, msg.sender, _initialSupply, "", "");
    }

    /*
    function addToSupply( uint256 _amount ) external
    {
      _mint(msg.sender, msg.sender, _amount, "", "");
    }


    function removeFromSupply( uint256 _amount ) external
    {
      burn(_amount, "", "");
    }
    */
}
