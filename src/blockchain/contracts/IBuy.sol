pragma solidity ^0.5.7;

contract IBuy {

  struct BuyDB {
    bytes32 depositRef;
    address account;
  }

  function _compareAddresses ( address _x, address _y ) private pure returns (bool);
  function _isAllowed ( address _account ) private returns (bool);

  function getExists ( address _x ) public view returns (bool);

  function bought ( address _buyer, bytes32 _buyRef, bytes32 _depositRef ) external;

  function getNumBuyers () external view returns (uint256);
	function getBuys ( uint256 _index ) external view returns (address);
	function getNumBuys ( address _buyer ) external view returns (uint256);
	function getBuyReference( address _buyer, uint256 _index ) external view returns (bytes32);

  function getBuyAddress ( bytes32 _buyerRef ) external view returns (address);
	function getDepositReference ( bytes32 _buyerRef ) external view returns (bytes32);

}
