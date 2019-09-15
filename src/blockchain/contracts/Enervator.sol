pragma solidity ^0.5.7;

import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

import "./IEnervator.sol";

contract Enervator is IEnervator, ERC777 {

  address private manager;

  constructor( address[] memory _defaultOperators )
  ERC777 ( "Enervator", "EOR", _defaultOperators ) public
  {
    require( _defaultOperators[0] != address(0), "no default operator - cannot set token manager!" );

    manager = _defaultOperators[0];
  }

  function addSupply ( uint256 _amount ) external
  {
    require( isOperatorFor( msg.sender, manager ), "not token operator!" );
    require( _amount > 0, "no tokens to add!" );

    _mint( manager, manager, _amount, "", "" );
  }
}
