pragma solidity ^0.5.7;

contract IExchanger {

  function setComponents ( address _depositDB, address _forexDB ) external;

  function _isAllowed ( address _sender ) private view returns (bool);

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external;
  function setCanWithdraw ( bytes32 _depositRef ) external;

  function setRate ( bytes32 _code, int128 _rate ) external;

  function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef, int128 _amountFIAT ) external;
  function bought ( address _buyer, uint256 _amountEOR, bytes calldata _buyData ) external;

}
