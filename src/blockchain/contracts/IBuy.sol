pragma solidity ^0.5.7;

contract IBuy {

  struct BuyDB {
    bytes32 depositRef;
    address account;
  }

  function _compareAddresses ( address _x, address _y ) private pure returns (bool);
  function _isAllowed ( address _account ) private returns (bool);

  function getExists ( address _x ) public view returns (bool);

  function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef ) external;

}
