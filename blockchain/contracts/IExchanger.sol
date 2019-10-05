pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

contract IExchanger {

  struct BuyData {
    address buyer;
    bytes32 buyRef;
    bytes32 depositRef;
    int128 amountFIAT;
    int128 amountEOR;
    int128 exchangeRate;
  }

  function setComponents ( address _enervatorManager, address _depositDB, address _forexDB, address _buyDB) external;

  function _isAllowed ( address _sender ) private view returns (bool);

  function deposit ( address _depositor, bytes32 _depositRef, bytes32 _code, int128 _amount ) external;
  function setCanWithdraw ( bytes32 _depositRef, bool _canWithdraw ) external;
  function setRate ( bytes32 _code, int128 _rate ) external;
  function buy ( BuyData calldata _buyData ) external;
  function bought ( address _buyer, uint256 _amountEOR, bytes calldata _buyData ) external;

}
