pragma solidity ^0.5.7;

contract IExchanger {

  function setComponents ( address _depositDB, address _forexDB ) external;

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external;

  function setCanWithdraw ( bytes32 _depositRef ) external;
  function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef ) external;
  function bought ( address _buyer, bytes32 _buyRef, bytes32 _depositRef ) external;

}
