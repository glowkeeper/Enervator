pragma solidity ^0.5.7;

contract IBuy {

  struct BuyDB {
    bytes32 _depositRef;
    address buyer;
  }

  function _isAllowed ( address _account ) private returns (bool);

}
