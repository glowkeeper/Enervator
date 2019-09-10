pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

// Exchange rate interface

contract IForex {

	function setRate ( bytes32 _code, int128 _rate ) public;
	function getRate ( bytes32 _code) public view returns (int128);
	function getEORAmount ( bytes32 _code, int128 _amount ) public view returns (int256);

}
