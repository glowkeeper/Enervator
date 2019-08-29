pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract StandardToken is ERC777 {

    constructor( uint256 initialSupply, address[] memory defaultOperators ) ERC777("StandardToken", "STC", defaultOperators) public
    {
        _mint(msg.sender, msg.sender, initialSupply, "", "");
    }
}
