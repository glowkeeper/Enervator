pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "./IDeposit.sol";
import "./Strings.sol";

contract Deposit is IDeposit {

  address private depositManager;

  address[] private depositors;
  mapping(address => bytes32[]) private depositRefs;
  mapping(bytes32 =>  DepositDB) private deposits;

  event Deposited ( uint _epochTime, address _depositor, bytes32 _depositRef, bytes32 _code, int128 _amount );
  event Withdrawn ( bytes32 _depositRef );

  constructor( address _depositManager ) public
  {
    require ( _depositManager != address(0), "zero address for deposit manager!" );
    depositManager = _depositManager;
  }

  function _isAllowed ( address _account ) private returns (bool)
  {
    require ( _account != address(0), "zero address for account!" );

    if ( _account == depositManager )
    {

      return true;

    } else {

      return false;

    }
  }

  function _compareAddresses ( address _x, address _y ) private pure returns (bool)
  {
    require ( _x != address(0) &&
              _y != address(0), "zero address for compare!" );

    return _x == _y;
  }

  function deposit( address _depositor, bytes32 _depositRef, bytes32 _code, int128 _amount ) external
  {
    require ( _isAllowed(msg.sender), "that address cannot deposit!");
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

    deposits[_depositRef].account = _depositor;
		deposits[_depositRef].amount = _amount;
    deposits[_depositRef].code = _code;
    deposits[_depositRef].isWithdrawn = false;

    uint epochTime = now;
    emit Deposited( epochTime, _depositor, _depositRef, _code, _amount );
	}

	function setWithdrawn ( bytes32 _depositRef ) external
  {
    require ( _isAllowed(msg.sender), "that address cannot withdraw!");
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( deposits[_depositRef].isWithdrawn == false, "already withdrawn!" );

		deposits[_depositRef].isWithdrawn = true;
    emit Withdrawn( _depositRef );
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

  function getDepositedAddress ( bytes32 _depositRef ) external view returns (address)
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

    return deposits[_depositRef].account;
  }


  function getDepositedAmount ( bytes32 _depositRef ) external view returns (int128)
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

		return deposits[_depositRef].amount;
	}

  function getDepositedCode ( bytes32 _depositRef ) external view returns (bytes32)
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

		return deposits[_depositRef].code;
	}

  function getIsWithdrawn ( bytes32 _depositRef ) external view returns (bool)
  {
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

		return deposits[_depositRef].isWithdrawn;
	}

  function getDeposit( bytes32 _depositRef ) external view returns (DepositDB memory) {
    require (_depositRef[0] != 0, "no deposit reference supplied!" );

    return deposits[_depositRef];
  }
}
