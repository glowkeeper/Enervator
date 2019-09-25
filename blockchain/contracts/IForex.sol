pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

// Exchange rate interface

contract IForex {

	function _isAllowed ( address _settor ) private returns (bool);

	function setRate ( bytes32 _code, int128 _rate ) external;
	function getRate ( bytes32 _code) public view returns (int128);

}
