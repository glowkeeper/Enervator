pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

// Exchange rate interface

contract IForex {

	function _isAllowed ( address _settor ) private returns (bool);

	function setRate ( bytes32 _code, int128 _rate ) external;

	function getNumCodes () external view returns (uint256);
	function getCode ( uint256 _index ) external view returns (bytes32);
	function getRate ( bytes32 _code) external view returns (int128);

}
