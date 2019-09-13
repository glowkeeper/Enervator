pragma solidity ^0.5.7;

import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

import "./IEnervator.sol";

contract Enervator is IEnervator, ERC777 {

  address private tokenOwner;

  constructor( address[] memory _defaultOperators )
  ERC777 ( "Enervator", "EOR", _defaultOperators ) public
  {
    tokenOwner = _defaultOperators[0];
  }

  function addSupply ( uint256 _amount ) external
  {
    require( tokenOwner != address(0), "zero address!" );
    require( isOperatorFor( msg.sender, tokenOwner ), "not token operator!" );
    require( _amount > 0, "no tokens to add!" );

    _mint( tokenOwner, tokenOwner, _amount, "", "" );
  }
}
