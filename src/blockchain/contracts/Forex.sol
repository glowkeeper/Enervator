pragma solidity ^0.5.7;

import "./ABDKMath64x64.sol";

import "./IForex.sol";

contract Forex is IForex {

	mapping(bytes32 => int128) private rates;

	function setRate ( bytes32 _code, int128 _rate ) public
	{
		require ( _code[0] != 0, "no currency code supplied!" );
		require ( _rate > 0, "no rate supplied!" );
		rates[_code] = _rate;
	}

	function getRate ( bytes32 _code) public view returns (int128)
	{
		require ( _code[0] != 0, "no currency code supplied!" );

		return rates[_code];
	}

	function getEORAmount ( bytes32 _code, int128 _amount ) public view returns (int256)
	{
		require ( _code[0] != 0, "no currency code supplied!" );
		require ( _amount > 0, "zero amount!" );

		int128 rate = getRate(_code);
		return ABDKMath64x64.mul(rate, _amount);
	}

}
