pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

contract IEnervatorManager {

  enum TokenSend {
    MINT,
    BURN,
    SEND
  }

  struct TokenValues {
    int128 pricePerMWh;
    int128 currentTPES;
    int128 oldTPES;
    int128 perCapitaEnergy;
    int128 unitValue;
  }

  event TokensReceived
  (
      address operator,
      address from,
      address to,
      uint256 amount,
      bytes data,
      bytes operatorData,
      address token,
      uint256 fromBalance,
      uint256 toBalance
  );

  event TokensSent
  (
    address operator,
    address from,
    address to,
    uint256 amount,
    bytes data,
    bytes operatorData,
    address token,
    uint256 fromBalance,
    uint256 toBalance
  );

  function _setUnitValue () private;
  function _isAllowed ( address _sender ) private returns (bool);

  function addTokens ( uint256 _amount ) external;
  function burnTokens ( uint256 _amount ) external;

  function setToken( address _token ) external;
  function setTPES ( int128  _amount ) external;
  function setPerCapitaEnergy ( int128 _amount ) external;

  function send ( address _recipient, uint256 _amount, bytes calldata _buyData ) external;

  function getTokenName () external view returns ( string memory );
  function getTokenSymbol () external view returns ( string memory );
  function getTotalSupply () external view returns ( uint256 );

  function getPricePerMWh () external view returns ( int128 );
  function getCurrentTPES () external view returns ( int128 );
  function getOldTPES () external view returns ( int128 );
  function getPerCapitaEnergy () external view returns ( int128 );
  function getUnitValue () external view returns ( int128 );
}
