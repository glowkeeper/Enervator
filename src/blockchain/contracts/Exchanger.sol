pragma solidity ^0.5.7;

import "@openzeppelin/contracts/ownership/Ownable.sol";

contract Exchanger is Ownable {

  address private depositDB;
  address private forexDB;

  event Deposited ( uint _epochTime, address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount );
  event Bought ( uint _epochTime, bytes32 _depositRef );

  function setComponents ( address _depositDB, address _forexDB ) external onlyOwner
  {
    require ( _depositDB != address(0), "no address for depositDB!" );
    require ( _forexDB != address(0), "no address for forexDB!" );

    depositDB = _depositDB;
    forexDB = _forexDB;
  }

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external
  {
    require ( depositDB != address(0), "no address for depositDB!" );
    require ( _depositor != address(0), "zero address for depositor!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( _code[0] != 0, "no currency code supplied!" );
    require ( _amount > 0, "no deposit to make!" );

    uint epochTime = now;
    emit Deposited( epochTime, _depositor, _depositRef, _code, _amount );
  }

  function buy ( bytes32 _depositRef ) external
  {
    require ( forexDB != address(0), "no address for forexDB!" );
    require ( depositDB != address(0), "no address for depositDB!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

    uint epochTime = now;
    emit Bought( epochTime, _depositRef );
  }

}
