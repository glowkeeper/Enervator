pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Sender.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./IEnervator.sol";
import "./ABDKMath64x64.sol";

contract EnervatorManager is IERC777Recipient, IERC777Sender, Ownable {

    IERC1820Registry private erc1820 = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);

    bytes32 constant private TOKENS_SENDER_INTERFACE_HASH = keccak256("ERC777TokensSender");
    bytes32 constant private TOKENS_RECIPIENT_INTERFACE_HASH = keccak256("ERC777TokensRecipient");

    struct TokenValues {
      int128 pricePerMWh;
      int128 currentTPES;
      int128 oldTPES;
      int128 perCapitaEnergy;
      int256 unitValue;
    }

    TokenValues private values;

    bool private shouldRevertSend;
    bool private shouldRevertReceive;

    IEnervator private token;
    address private tokenHolder;

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

    constructor ( TokenValues memory _values, address _tokenHolder ) public
    {
      require ( _values.pricePerMWh > 0, "pricePerMWh invalid" );
      require ( _values.currentTPES > 0, "currentTPES invalid" );
      require ( _values.oldTPES > 0, "oldTPES invalid" );
      require ( _values.perCapitaEnergy > 0, "perCapitaEnergy invalid" );
      require ( _tokenHolder != address(0) );

      values.pricePerMWh = _values.pricePerMWh;
      values.currentTPES = _values.currentTPES;
      values.oldTPES = _values.oldTPES;
      values.perCapitaEnergy = _values.perCapitaEnergy;

      token = IEnervator(0);
      tokenHolder = _tokenHolder;

      shouldRevertSend = false;
      shouldRevertReceive = false;

      erc1820.setInterfaceImplementer( address(this), TOKENS_RECIPIENT_INTERFACE_HASH, address(this) );
      erc1820.setInterfaceImplementer( address(this), TOKENS_SENDER_INTERFACE_HASH, address(this) );

      _setUnitValue();
    }

    function _setUnitValue () private
    {
      require (values.pricePerMWh > 0, "pricePerMWh invalid");
      require (values.currentTPES > 0, "currentTPES invalid");
      require (values.oldTPES > 0, "oldTPES invalid");
      require (values.perCapitaEnergy > 0, "perCapitaEnergy invalid");

      int128 TPESFactor = ABDKMath64x64.div(values.oldTPES, values.currentTPES);
      int128 prePrice =  ABDKMath64x64.div(TPESFactor, values.perCapitaEnergy);
      values.unitValue = ABDKMath64x64.mul(prePrice, values.pricePerMWh);
    }

    function setToken( address _token ) public
    {
      require( _token != address(0) );
      token = IEnervator(_token);
    }

    function setNewTPES ( int128  _amount ) public onlyOwner
    {
      require( _amount > 0 );

      values.oldTPES = values.currentTPES;
      values.currentTPES = _amount;
      _setUnitValue();
    }

    function setPerCapitaEnergy ( int128 _amount ) public onlyOwner
    {
      require( _amount > 0 );

      values.perCapitaEnergy = _amount;
      _setUnitValue();
    }

    function setSupply ( uint256 _amount ) public onlyOwner
    {
      require( _amount > 0 );
      require( address(token) != address(0) );

      uint256 supply = token.totalSupply();

      if ( _amount != supply ) {

        uint256 difference = _amount - supply;
        if ( _amount < supply ) {

          difference = supply - _amount;
          token.operatorBurn( tokenHolder, difference, "", "");

        } else {

          token.addSupply( tokenHolder, difference);

        }
      }
    }

    function getPricePerMWh () public view returns ( int128 )
    {
        return values.pricePerMWh;
    }

    function getCurrentTPES () public view returns ( int128 )
    {
        return values.currentTPES;
    }

    function getOldTPES () public view returns ( int128 )
    {
        return values.oldTPES;
    }

    function getPerCapitaEnergy () public view returns ( int128 )
    {
        return values.perCapitaEnergy;
    }

    function getUnitValue () public view returns ( int256 )
    {
      return values.unitValue;
    }

    function tokensReceived (
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) external
    {

      require(
        address(token) != address(0) &&
        msg.sender == address(token),
        "EnervatorManager: Invalid token received"
      );

      if (shouldRevertReceive) {
         revert();
      }

      uint256 fromBalance = token.balanceOf(from);
      uint256 toBalance = token.balanceOf(to);

      emit TokensReceived(operator, from, to, amount, userData, operatorData, address(token), fromBalance, toBalance);
    }

    function tokensToSend (
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    )
    external {

      require(
        address(token) != address(0) &&
        msg.sender == address(token),
        "EnervatorManager: Invalid token sent"
      );

      if (shouldRevertSend) {
         revert();
      }

      uint256 fromBalance = token.balanceOf(from);
      uint256 toBalance = token.balanceOf(to);

      emit TokensSent(operator, from, to, amount, userData, operatorData, address(token), fromBalance, toBalance);

    }

    function setShouldRevertSend ( bool _shouldRevert ) public
    {
        shouldRevertSend = _shouldRevert;
    }

    function setShouldRevertReceive ( bool _shouldRevert ) public
    {
        shouldRevertReceive = _shouldRevert;
    }
}
