pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./IExchanger.sol";
import "./IEnervatorManager.sol";
import "./IDeposit.sol";
import "./IForex.sol";
import "./IBuy.sol";

contract Exchanger is IExchanger, Ownable {

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

  function setCanWithdraw ( bytes32 _depositRef, bool _canWithdraw ) external onlyOwner
  {
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );

    depositDB.setCanWithdraw( _depositRef, _canWithdraw );
  }

  function setRate ( bytes32 _code, uint256 _rate ) external onlyOwner
  {
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( _code[0] != 0, "no currency code supplied!" );
		require ( _rate > 0, "no rate supplied!" );

    forexDB.setRate( _code, _rate );
  }

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, uint256 _amount ) external
  {
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( _depositor != address(0), "zero address for depositor!" );
    require ( _depositRef[0] != 0, "no deposit reference supplied!" );
    require ( _code[0] != 0, "no currency code supplied!" );
    require ( _amount > 0, "no deposit to make!" );

    depositDB.deposit( _depositor, _depositRef, _code, _amount );
  }

  function buy ( BuyData calldata _buyData ) external
  {
    require ( address(forexDB) != address(0), "no address for forexDB!" );
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( _buyData.buyer != address(0), "no address for buyer!" );
    require ( _buyData.buyRef[0] != 0, "no buy reference supplied!" );
    require ( _buyData.depositRef[0] != 0, "no deposit reference supplied!" );
		require ( _buyData.amountWEI > 0, "no wei to buy!" );
    require ( depositDB.getDepositedAddress( _buyData.depositRef ) == _buyData.buyer, "buyer and deposit addresses are different!" );
    require ( depositDB.getCanWithdraw( _buyData.depositRef ), "deposit cannot be withdrawn!" );

    bytes32 currencyCode = depositDB.getDepositedCode( _buyData.depositRef );
    require ( currencyCode[0] != 0, "no currency code supplied!" );

    uint256 rate = forexDB.getRate( currencyCode );
		require ( rate > 0, "no rate supplied!" );

    uint256 amountFIAT = depositDB.getDepositedAmount( _buyData.depositRef );
    uint256 checkAmount = ( rate * _buyData.amountWEI ) / 10**18;
    require ( amountFIAT >= checkAmount, "FIAT != WEI!" );

    bytes memory sendData = abi.encodePacked( _buyData.buyRef, _buyData.depositRef, amountFIAT );
    enervatorManager.send ( _buyData.buyer, _buyData.amountWEI, sendData );
  }

  function bought ( address _buyer, uint256 _amountWEI, bytes calldata _buyData ) external
  {
    require ( _isAllowed(msg.sender), "that address cannot send tokens!");
    require ( address(depositDB) != address(0), "no address for depositDB!" );
    require ( address(buyDB) != address(0), "no address for buyDB!" );
    require ( _buyer != address(0), "no address for buyer!" );
    require ( _buyData[0] != 0, "no buy data supplied!" );

    bytes memory buyData = _buyData;
    bytes32 buyRef;
    bytes32 depositRef;
    uint256 amountFIAT;
    assembly {
	    buyRef := mload(add(buyData, 32))
	    depositRef := mload(add(buyData, 64))
      amountFIAT := mload(add(buyData, 96))
    }

    bytes32 code = depositDB.getDepositedCode( depositRef );
    depositDB.withdraw( _buyer, depositRef, code, amountFIAT );
    buyDB.bought( _buyer, buyRef, depositRef, _amountWEI );
  }

}
