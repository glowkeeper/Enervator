pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

contract IDeposit {

	struct DepositDB {
		uint256 amount;
		bytes32 code;
		bool isDeposited;
	}

	function _compareAddresses ( address _x, address _y ) private pure returns (bool);
	function _isAllowed ( address _depositor ) private returns (bool);

  function getExists( address _x ) public view returns (bool);

	function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external;

	function setWithdrawn ( bytes32 _depositRef ) external;

	function getNumDepositors () external view returns (uint256);
	function getDepositor ( uint256 _index ) external view returns (address);
	function getNumDeposits ( address _depositor ) external view returns (uint256);
	function getDepositReference( address _depositor, uint256 _index ) external view returns (bytes32);

	function getDepositedAmount ( bytes32 _depositRef ) external view returns (uint256);
	function getDepositedCode ( bytes32 _depositRef ) external view returns (bytes32);
	function getIsDeposited ( bytes32 _depositRef ) external view returns (bool);
	function getDeposit( bytes32 _depositRef ) external view returns (DepositDB memory);

}
