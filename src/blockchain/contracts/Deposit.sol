pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "./IDeposit.sol";
import "./Strings.sol";

contract Deposit is IDeposit {

  address[] private depositors;
  mapping(address => bytes32[]) private depositRefs;
  mapping(bytes32 =>  DepositDB) private deposits;

  function deposit( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external
  {
    require ( _depositor != address(0), "zero address for depositor!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( _code[0] != 0, "no currency code supplied!" );
    require ( _amount > 0, "no deposit to make!" );

    if ( !getExists(_depositor ) )
    {
      depositors.push(_depositor);
    }

    if ( !Strings.getExists( _depositRef, depositRefs[_depositor] ) )
    {
      depositRefs[_depositor].push(_depositRef);
    }

		deposits[_depositRef].amount = _amount;
    deposits[_depositRef].code = _code;
    deposits[_depositRef].isDeposited = true;
	}

	function setWithdrawn ( bytes32 _depositRef ) external
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( deposits[_depositRef].isDeposited == true, "not deposited!" );

		deposits[_depositRef].isDeposited = false;
  }

  function _compareAddresses ( address _x, address _y ) private pure returns (bool)
  {
    require ( _x != address(0) &&
              _y != address(0), "zero address for compare!" );

    return _x == _y;
  }

  function getExists ( address _x ) public view returns (bool) {
    require ( _x != address(0), "zero address does not exist!" );

    bool exists = false;
    for ( uint256 i = 0; i < depositors.length; i++ )
    {
      if (_compareAddresses( _x, depositors[i] ) )
      {
        exists = true;
        break;
      }
    }
    return exists;
  }

	function getNumDepositors () external view returns (uint256)
  {
    return depositors.length;
  }

  function getDepositor ( uint256 _index ) external view returns (address)
  {
    require ( _index < depositors.length, "index out of range!" );

    return depositors[_index];
  }

  function getNumDeposits ( address _depositor ) external view returns (uint256)
  {
    require ( _depositor != address(0), "zero address for depositor!" );

    return depositRefs[_depositor].length;
  }

  function getDepositReference( address _depositor, uint256 _index ) external view returns (bytes32)
  {
    require ( _depositor != address(0), "zero address for depositor!" );
    require ( _index < depositRefs[_depositor].length, "index out of range!" );

    return depositRefs[_depositor][_index];
  }

  function getDepositedAmount ( bytes32 _depositRef ) external view returns (uint256)
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

		deposits[_depositRef].amount;
	}

  function getDepositedCode ( bytes32 _depositRef ) external view returns (bytes32)
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

		deposits[_depositRef].code;
	}

  function getIsDeposited ( bytes32 _depositRef ) external view returns (bool)
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

		deposits[_depositRef].isDeposited;
	}

  function getDeposit( bytes32 _depositRef ) external view returns (DepositDB memory) {
    require (_depositRef[0] != 0, "no deposit reference supplied!" );

    return deposits[_depositRef];
  }
}
