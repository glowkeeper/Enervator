pragma solidity ^0.5.7;

import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./IEnervatorManager.sol";
import "./IDeposit.sol";
import "./IForex.sol";
import "./IBuy.sol";

contract Exchanger is Ownable {

  IEnervatorManager private enervatorManager;
  IDeposit private depositDB;
  IForex private forexDB;
  IBuy private buyDB;

  event Bought ( uint _epochTime, address _buyer, bytes32 _buyRef, bytes32 _depositRef );

  function setComponents ( address _enervatorManager, address _depositDB, address _forexDB, address _buyDB) external onlyOwner
  {
    require ( _enervatorManager != address(0), "no address for Enervator Manager!" );
    require ( _depositDB != address(0), "no address for depositDB!" );
    require ( _forexDB != address(0), "no address for forexDB!" );
    require ( _buyDB != address(0), "no address for buyDB!" );

    enervatorManager = IEnervatorManager(_enervatorManager);
    depositDB = IDeposit(_depositDB);
    forexDB = IForex(_forexDB);
    buyDB = IBuy(_buyDB);
  }

  function _isAllowed ( address _sender ) private returns (bool)
  {
    if ( _sender == address(enervatorManager) )
    {

      return true;

    } else {

      return false;

    }
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

  function setCanWithdraw ( bytes32 _depositRef, bool _canWithdraw ) external onlyOwner
  {
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

    depositDB.setCanWithdraw( _depositRef, _canWithdraw );
  }

  function setRate ( bytes32 _code, int128 _rate ) external onlyOwner
  {
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( _code[0] != 0, "no currency code supplied!" );
		require ( _rate > 0, "no rate supplied!" );
    forexDB.setRate( _code, _rate );
  }

	function getRate ( bytes32 _code ) external view returns (int128)
  {
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( _code[0] != 0, "no currency code supplied!" );
    return forexDB.getRate( _code );
  }

	function getEORAmount ( bytes32 _code, int128 _amount ) external view returns (int256)
  {
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( _code[0] != 0, "no currency code supplied!" );
    return forexDB.getEORAmount( _code, _amount );
  }

  function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef ) external
  {
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( _buyer != address(0), "no address for buyer!" );
    require ( _buyRef[0] != 0, "no buy reference supplied!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( depositDB.getDepositedAddress( _depositRef ) == _buyer, "buyer and deposit addresses are different!" );
    require ( depositDB.getCanWithdraw( _depositRef ), "deposit cannot be withdrawn!" );
    require ( !depositDB.getIsWithdrawn( _depositRef ), "deposit has been withdrawn!" );

    bytes32 currencyCode = depositDB.getDepositedCode( _depositRef );
    int128 depositedAmount = depositDB.getDepositedAmount( _depositRef );
    int128 amountEOR = forexDB.getEORAmount( currencyCode, depositedAmount );
    uint256 amountEORShifted = uint256 (amountEOR >> 64);

    bytes memory buyData = abi.encodePacked( _buyRef, _depositRef );
    enervatorManager.send ( _buyer, 100, buyData );
  }

  function bought ( address _buyer, bytes calldata _buyData ) external
  {
    require ( _isAllowed(msg.sender), "that address cannot send tokens!");
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( address(buyDB) != address(0), "no address for buyDB!" );
    require ( _buyer != address(0), "no address for buyer!" );
    require ( _buyData[0] != 0, "no buy data supplied!" );

    bytes memory buyData = _buyData;
    bytes32 buyRef;
    bytes32 depositRef;
    assembly {
	    buyRef := mload(add(buyData, 32))
	    depositRef := mload(add(buyData, 64))
    }

    depositDB.setCanWithdraw( depositRef, false );
    depositDB.setWithdrawn( depositRef, true );
    buyDB.bought( _buyer, buyRef, depositRef );
  }

}
