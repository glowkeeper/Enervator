pragma solidity ^0.5.7;

import "@openzeppelin/contracts/token/ERC777/IERC777.sol";

contract IEnervator is IERC777 {

  function addSupply  ( uint256 _amount, bytes calldata userData, bytes calldata operatorData ) external;
}
