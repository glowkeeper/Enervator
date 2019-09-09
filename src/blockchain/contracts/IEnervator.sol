pragma solidity ^0.5.7;

import "@openzeppelin/contracts/token/ERC777/IERC777.sol";

contract IEnervator is IERC777 {

    function addSupply ( address _tokenOwner, uint256 _amount) public;
}
