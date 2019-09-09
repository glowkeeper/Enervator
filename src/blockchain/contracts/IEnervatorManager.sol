pragma solidity ^0.5.7;

import "@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Sender.sol";

contract IEnervatorManager is IERC777Recipient, IERC777Sender {

    struct TokenValues {
      int128 pricePerMWh;
      int128 currentTPES;
      int128 oldTPES;
      int128 perCapitaEnergy;
      int256 unitValue;
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

    function setToken( address _token ) public;
    function setNewTPES ( int128  _amount ) public;
    function setPerCapitaEnergy ( int128 _amount ) public;
    function setSupply ( uint256 _amount ) public;

    function getPricePerMWh () public view returns ( int128 );
    function getCurrentTPES () public view returns ( int128 );
    function getOldTPES () public view returns ( int128 );
    function getPerCapitaEnergy () public view returns ( int128 );
    function getUnitValue () public view returns ( int256 );

    function setShouldRevertSend ( bool _shouldRevert ) public;
    function setShouldRevertReceive ( bool _shouldRevert ) public;
}
