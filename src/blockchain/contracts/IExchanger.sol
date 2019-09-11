pragma solidity ^0.5.7;

contract IExchanger {

  function setComponents ( address _depositDB, address _forexDB ) external;

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external;
  function buy ( bytes32 _depositRef ) external;

}
