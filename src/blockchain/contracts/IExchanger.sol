pragma solidity ^0.5.7;

contract IExchanger {

  function setComponents ( address _depositDB, address _forexDB ) external;

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external;
  function setCanWithdraw ( bytes32 _depositRef ) external;

  function setRate ( bytes32 _code, int128 _rate ) external;
	function getRate ( bytes32 _code ) external view returns (int128);
	function getEORAmount ( bytes32 _code, int128 _amount ) external view returns (int256);

  function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef ) external;
  function bought ( address _buyer, bytes calldata _buyData ) external;

}
