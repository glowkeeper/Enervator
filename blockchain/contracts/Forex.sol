pragma solidity ^0.5.7;

import "./IForex.sol";
import "./Strings.sol";

//FIAT to EOR exchange rate.
contract Forex is IForex {

	address private forexManager;

	bytes32[] private codes;
	mapping(bytes32 => uint256) private rates;

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

	function setRate ( bytes32 _code, uint256 _rate ) external
	{
		require ( _isAllowed(msg.sender), "that address cannot set forex rates!");
		require ( _code[0] != 0, "no currency code supplied!" );
		require ( _rate > 0, "no rate supplied!" );

		if ( !Strings.getExists( _code, codes ) )
    {
      codes.push(_code);
    }

		rates[_code] = _rate;
	}

	function getNumCodes () external view returns (uint256)
	{
		return codes.length;
	}

	function getCode ( uint256 _index ) external view returns (bytes32)
	{
		require ( _index < codes.length, "index out of range!" );

    return codes[_index];
	}

	function getRate ( bytes32 _code ) external view returns (uint256)
	{
		require ( _code[0] != 0, "no currency code supplied!" );

		return rates[_code];
	}

}
