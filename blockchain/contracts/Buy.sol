pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "./IBuy.sol";
import "./Strings.sol";

contract Buy is IBuy {

  address private buyerManager;

  address[] private buyers;
  mapping(address => bytes32[]) private buyerRefs;
  mapping(bytes32 =>  BuyDB) private buys;

  event Bought ( uint _epochTime, address _buyer, bytes32 _buyRef, bytes32 _depositRef, uint256 _amountWEI );

  constructor( address _buyerManager ) public
  {
    require ( _buyerManager != address(0), "zero address for buyer manager!" );

    buyerManager = _buyerManager;
  }

  function _compareAddresses ( address _x, address _y ) private pure returns (bool)
  {
    require ( _x != address(0) &&
              _y != address(0), "zero address for compare!" );

    return _x == _y;
  }

  function _isAllowed ( address _account ) private returns (bool)
  {
    require ( _account != address(0), "zero address for account!" );

    if ( _account == buyerManager )
    {

      return true;

    } else {

      return false;

    }
  }

  function getExists ( address _x ) public view returns (bool) {
    require ( _x != address(0), "zero address does not exist!" );

    bool exists = false;
    for ( uint256 i = 0; i < buyers.length; i++ )
    {
      if (_compareAddresses( _x, buyers[i] ) )
      {
        exists = true;
        break;
      }
    }
    return exists;
  }

  function bought ( address _buyer, bytes32 _buyRef, bytes32 _depositRef, uint256 _amountWEI ) external
  {
    require ( _buyer != address(0), "no address for buyer!" );
    require ( _buyRef[0] != 0, "no buy reference supplied!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( _amountWEI > 0, "no amount supplied" );

    if ( !getExists(_buyer ) )
    {
      buyers.push(_buyer);
    }

    if ( !Strings.getExists( _buyRef, buyerRefs[_buyer] ) )
    {
      buyerRefs[_buyer].push(_buyRef);
    }

    buys[_buyRef].amountWEI = _amountWEI;
    buys[_buyRef].account = _buyer;
		buys[_buyRef].depositRef = _depositRef;

    uint epochTime = now;
    emit Bought( epochTime, _buyer, _buyRef, _depositRef, _amountWEI );
  }

  function getNumBuyers () external view returns (uint256)
  {
    return buyers.length;
  }

	function getBuys ( uint256 _index ) external view returns (address)
  {
    require ( _index < buyers.length, "index out of range!" );

    return buyers[_index];
  }

	function getNumBuys ( address _buyer ) external view returns (uint256)
  {
    require ( _buyer != address(0), "zero address for depositor!" );

    return buyerRefs[_buyer].length;
  }

	function getBuyReference( address _buyer, uint256 _index ) external view returns (bytes32)
  {
    require ( _buyer != address(0), "zero address for depositor!" );
    require ( _index < buyerRefs[_buyer].length, "index out of range!" );

    return buyerRefs[_buyer][_index];
  }

  function getBuyAmount ( bytes32 _buyerRef ) external view returns (uint256)
  {
    require ( _buyerRef[0] != 0, "no deposit reference supplied!" );

    return buys[_buyerRef].amountWEI;
  }

  function getBuyAddress ( bytes32 _buyerRef ) external view returns (address)
  {
    require ( _buyerRef[0] != 0, "no deposit reference supplied!" );

    return buys[_buyerRef].account;
  }

	function getDepositReference ( bytes32 _buyerRef ) external view returns (bytes32)
  {
    require ( _buyerRef[0] != 0, "no deposit reference supplied!" );

    return buys[_buyerRef].depositRef;
  }

  function getBuy( bytes32 _buyerRef ) external view returns (BuyDB memory)
  {
    require (_buyerRef[0] != 0, "no buy reference supplied!" );

    return  buys[_buyerRef];
  }
}
