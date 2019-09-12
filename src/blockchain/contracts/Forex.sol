pragma solidity ^0.5.7;

import "./ABDKMath64x64.sol";

import "./IForex.sol";

//FIAT to EOR exchange rate.
contract Forex is IForex {

	address private forexManager;

	mapping(bytes32 => int128) private rates;

	constructor( address _forexManager ) public
  {
    require ( _forexManager != address(0), "zero address for deposit manager!" );
    forexManager = _forexManager;
  }

	function _isAllowed ( address _account ) private returns (bool)
  {
    require ( _account != address(0), "zero address for account!" );

    if ( _account == forexManager )
    {

      return true;

    } else {

      return false;

    }
  }

	function setRate ( bytes32 _code, int128 _rate ) external
	{
		require ( _isAllowed(msg.sender), "that address cannot set forex rates!");
		require ( _code[0] != 0, "no currency code supplied!" );
		require ( _rate > 0, "no rate supplied!" );
		rates[_code] = _rate;
	}

	function getRate ( bytes32 _code) public view returns (int128)
	{
		require ( _code[0] != 0, "no currency code supplied!" );

		return rates[_code];
	}

	function getEORAmount ( bytes32 _code, int128 _amount ) external view returns (int256)
	{
		require ( _code[0] != 0, "no currency code supplied!" );
		require ( _amount > 0, "zero amount!" );

		int128 rate = getRate(_code);
		return ABDKMath64x64.mul(rate, _amount);
	}

}
