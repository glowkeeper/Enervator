pragma solidity ^0.5.7;

import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./ABDKMath64x64.sol";

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

  function _isAllowed ( address _sender ) private view returns (bool)
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

  function buy ( address _buyer, bytes32 _buyRef, bytes32 _depositRef, int128 _amountFIAT ) external
  {
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( _buyer != address(0), "no address for buyer!" );
    require ( _buyRef[0] != 0, "no buy reference supplied!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( depositDB.getDepositedAddress( _depositRef ) == _buyer, "buyer and deposit addresses are different!" );
    require ( depositDB.getCanWithdraw( _depositRef ), "deposit cannot be withdrawn!" );
    require ( _amountFIAT <= depositDB.getDepositedAmount( _depositRef ), "cannot buy that amount!" );

    bytes32 code = depositDB.getDepositedCode(_depositRef);
    int128 rate = forexDB.getRate(code);
    require ( rate > 0, "no rate set for currency!" );

    int128 fixedAmountEOR = _amountFIAT / rate;
    int128 toWei = fixedAmountEOR * 10**18;

    bytes memory buyData = abi.encodePacked( _buyRef, _depositRef, _amountFIAT );
    enervatorManager.send ( _buyer, uint256(toWei), buyData );

    /* int128 fixedAmountEOR = ABDKMath64x64.div(_amountFIAT, rate);

    int128 integer;
    int128 fraction;
    assembly {
	    integer := mload(add(fixedAmountEOR, 64))
	    fraction := mload(add(fixedAmountEOR, 128))
    }

    int128 fractionToWei = ( fraction * 10**18 ) >> 64;
    int128 integerToWei = ( integer * 10**18 ) >> 64;

    uint256 amountWei = uint256(fractionToWei + integerToWei);

    bytes memory buyData = abi.encodePacked( _buyRef, _depositRef, _amountFIAT );
    enervatorManager.send ( _buyer, amountWei, buyData ); */
  }

  function bought ( address _buyer, uint256 _amountEOR, bytes calldata _buyData ) external
  {
    require ( _isAllowed(msg.sender), "that address cannot send tokens!");
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( address(buyDB) != address(0), "no address for buyDB!" );
    require ( _buyer != address(0), "no address for buyer!" );
    require ( _amountEOR > 0, "no EOR supplied" );
    require ( _buyData[0] != 0, "no buy data supplied!" );

    bytes memory buyData = _buyData;
    bytes32 buyRef;
    bytes32 depositRef;
    int128 amountFIAT;
    assembly {
	    buyRef := mload(add(buyData, 32))
	    depositRef := mload(add(buyData, 64))
      amountFIAT := mload(add(buyData, 80))
    }

    bytes32 code = depositDB.getDepositedCode( depositRef );
    depositDB.withdraw( _buyer, depositRef, code, amountFIAT );
    buyDB.bought( _buyer, buyRef, depositRef, _amountEOR );
  }

}
