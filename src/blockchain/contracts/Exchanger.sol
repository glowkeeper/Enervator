pragma solidity ^0.5.7;

import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./IDeposit.sol";
import "./IForex.sol";
import "./IBuy.sol";

contract Exchanger is Ownable {

  IDeposit private depositDB;
  IForex private forexDB;
  IBuy private buyDB;

  event Bought ( uint _epochTime, address _buyer, bytes32 _buyRef, bytes32 _depositRef );

  function setComponents ( address _depositDB, address _forexDB, address _buyDB) external onlyOwner
  {
    require ( _depositDB != address(0), "no address for depositDB!" );
    require ( _forexDB != address(0), "no address for forexDB!" );
    require ( _buyDB != address(0), "no address for buyDB!" );

    depositDB = IDeposit(_depositDB);
    forexDB = IForex(_forexDB);
    buyDB = IBuy(_buyDB);
  }

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, int128 _amount ) external
  {
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( _depositor != address(0), "zero address for depositor!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( _code[0] != 0, "no currency code supplied!" );
    require ( _amount > 0, "no deposit to make!" );

    depositDB.deposit( _depositor, _depositRef, _code, _amount );
  }

  function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef ) external
  {
    require ( _buyer != address(0), "no address for buyer!" );
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( address(buyDB) != address(0), "no address for buyDB!" );
    require ( _buyRef[0] != 0, "no buy reference supplied!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( depositDB.getDepositedAddress(_depositRef) == _buyer, "buyer and deposit addresses are different!");

    uint epochTime = now;
    emit Bought( epochTime, _buyer, _buyRef, _depositRef );
  }

}
