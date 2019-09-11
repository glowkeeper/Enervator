pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "./IBuy.sol";
import "./Strings.sol";

contract Buy is IBuy {

  address private buyerManager;

  address[] private buyers;
  mapping(address => bytes32[]) private buyerRefs;
  mapping(bytes32 =>  BuyDB) private buys;

  event Bought ( uint _epochTime, address _buyer, bytes32 _buyRef, bytes32 _depositRef );

  constructor( address _buyerManager ) public
  {
    require ( _buyerManager != address(0), "zero address for buyer manager!" );

    buyerManager = _buyerManager;
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



}
