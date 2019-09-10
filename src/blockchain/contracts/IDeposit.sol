pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

contract IDeposit {

	struct DepositDB {
		uint256 amount;
		bytes32 code;
		bool isDeposited;
	}

	function _compareAddresses ( address _x, address _y ) private pure returns (bool);

  function getExists( address _x ) public view returns (bool);

	function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) public;

	function setWithdrawn ( bytes32 _depositRef ) public;

	function getNumDepositors () public view returns (uint256);
	function getDepositor ( uint256 _index ) public view returns (address);
	function getNumDeposits ( address _depositor ) public view returns (uint256);
	function getDepositReference( address _depositor, uint256 _index ) public view returns (bytes32);

	function getDepositedAmount ( bytes32 _depositRef ) public view returns (uint256);
	function getDepositedCode ( bytes32 _depositRef ) public view returns (bytes32);
	function getIsDeposited ( bytes32 _depositRef ) public view returns (bool);
	function getDeposit( bytes32 _depositRef ) public view returns (DepositDB memory);

}
