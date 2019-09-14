pragma solidity ^0.5.7;

import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

import "./IEnervator.sol";

contract Enervator is IEnervator, ERC777 {

  IERC1820Registry private erc1820 = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);

  constructor( uint256 _initialSupply, address[] memory _defaultOperators )
  ERC777 ( "Enervator", "EOR", _defaultOperators ) public
  {
    erc1820.setManager( address(this), _defaultOperators[0] );
    _mint( address(this), address(this), _initialSupply, "", "" );
  }

  function addSupply ( uint256 _amount ) external
  {
    require( isOperatorFor( msg.sender, address(this) ), "not token operator!" );
    require( _amount > 0, "no tokens to add!" );

    _mint( address(this), address(this), _amount, "", "" );
  }
}
