pragma solidity ^0.5.7;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "./IEnervator.sol";

contract Enervator is IEnervator, ERC777 {

    constructor( uint256 _initialSupply, address[] memory _defaultOperators )
    ERC777 ( "Enervator", "EOR", _defaultOperators ) public
    {
      _mint(msg.sender, msg.sender, _initialSupply, "", "");
    }

    function addSupply ( address _tokenOwner, uint256 _amount) public
    {
      require( _tokenOwner != address(0), "zero address!" );
      require( isOperatorFor( msg.sender, _tokenOwner ), "not token operator!" );
      require( _amount > 0, "no tokens to add!" );

      _mint( msg.sender, _tokenOwner, _amount, "", "");
    }
}
