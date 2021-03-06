pragma solidity ^0.5.7;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Sender.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

import "./IEnervatorManager.sol";
import "./IEnervator.sol";
import "./IExchanger.sol";
import "./ABDKMath64x64.sol";

contract EnervatorManager is IEnervatorManager, IERC777Recipient, IERC777Sender, Ownable {

    IERC1820Registry private erc1820 = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);

    bytes32 constant private TOKENS_SENDER_INTERFACE_HASH =
        0x29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe895;

    // keccak256("ERC777TokensRecipient")
    bytes32 constant private TOKENS_RECIPIENT_INTERFACE_HASH =
        0xb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b;

    TokenValues private values;

    IEnervator private token;
    IExchanger private tokenSender;

    event TPES ( int128  _amount );
    event PerCapitaEnergy ( int128 _amount );

    event Minted ( uint256 _amount );
    event Burnt ( uint256 _amount );
    event Sent ( address _recipient, uint256 _amount, uint256 fromBalance, uint256 toBalance  );
    event Received ( address operator, address from, address to, uint256 amount, uint256 fromBalance, uint256 toBalance );

    constructor ( TokenValues memory _values, address _exchanger ) public
    {
      require ( _values.pricePerMWh > 0, "pricePerMWh invalid" );
      require ( _values.currentTPES > 0, "currentTPES invalid" );
      require ( _values.oldTPES > 0, "oldTPES invalid" );
      require ( _values.perCapitaEnergy > 0, "perCapitaEnergy invalid" );
      require ( _exchanger != address(0), "no exchanger address supplied!" );

      values.pricePerMWh = _values.pricePerMWh;
      values.currentTPES = _values.currentTPES;
      values.oldTPES = _values.oldTPES;
      values.perCapitaEnergy = _values.perCapitaEnergy;

      token = IEnervator(0);
      tokenSender = IExchanger(_exchanger);

      erc1820.setInterfaceImplementer( address(this), TOKENS_SENDER_INTERFACE_HASH, address(this) );
      erc1820.setInterfaceImplementer( address(this), TOKENS_RECIPIENT_INTERFACE_HASH, address(this) );

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

    function _isAllowed ( address _sender ) private returns (bool)
    {
      if ( _sender == address(tokenSender ) )
      {

        return true;

      } else {

        return false;

      }
    }

    function setToken( address _token ) external onlyOwner
    {
      require( _token != address(0), "zero address passed for token!" );
      token = IEnervator(_token);
    }

    function addTokens ( uint256 _amount ) external onlyOwner
    {
      require( _amount > 0, "need to add more than zero tokens!" );
      require( address(token) != address(0), "zero address for token!" );

      bytes memory data =  abi.encodePacked( uint ( TokenSend.MINT ) );
      bytes memory operatorData =  abi.encodePacked( uint ( TokenSend.MINT ) );
      token.addSupply( _amount, data, operatorData );
    }

    function burnTokens ( uint256 _amount ) external onlyOwner
    {
      require( _amount > 0, "need to burn more than zero tokens!" );
      require( address(token) != address(0), "zero address for token!" );

      bytes memory data =  abi.encodePacked( uint ( TokenSend.BURN ) );
      bytes memory operatorData =  abi.encodePacked( uint ( TokenSend.BURN ) );
      token.operatorBurn( address(this), _amount, data, operatorData );
    }

    function setTPES ( int128  _amount ) external onlyOwner
    {
      require( _amount > 0, "amount needs to be greater than zero!" );

      values.oldTPES = values.currentTPES;
      values.currentTPES = _amount;
      _setUnitValue();

      emit TPES ( _amount );
    }

    function setPerCapitaEnergy ( int128 _amount ) external onlyOwner
    {
      require( _amount > 0, "amount needs to be greater than zero!" );

      values.perCapitaEnergy = _amount;
      _setUnitValue();

      emit PerCapitaEnergy ( _amount );
    }

    function send ( address _recipient, uint256 _amount, bytes calldata _buyData ) external
    {
      require ( _isAllowed(msg.sender), "that address cannot send tokens!");
      require ( _amount > 0, "in send: no tokens to send!" );
      require ( _buyData[0] != 0, "no buy data supplied!" );
      require ( address(token) != address(0), "zero address for token!" );
      require ( address(_recipient) != address(0), "zero address for recipient!"  );

      bytes memory data =  abi.encodePacked( uint ( TokenSend.SEND ) );
      token.operatorSend( address(this), _recipient, _amount, data, _buyData );
    }

    function tokensReceived ( address operator, address from, address to, uint256 amount, bytes calldata userData, bytes calldata operatorData ) external
    {
      //require ( false, "blimeyagain!");
      require ( address(token) != address(0), "zero address for token!" );
      require ( msg.sender == address(token), "invalid token sender!" );
      require ( amount > 0, "no tokens received!" );

      uint256 fromBalance = token.balanceOf(from);
      uint256 toBalance = token.balanceOf(to);

      emit Received ( operator, from, to, amount, fromBalance, toBalance );
    }

    function tokensToSend ( address operator, address from, address to, uint256 amount, bytes calldata userData, bytes calldata operatorData ) external
    {
      require ( address(token) != address(0), "zero address for token!" );
      require ( msg.sender == address(token), "invalid token sender!" );
      require ( amount > 0, "in tokensToSend: no tokens to send!" );

      uint256 fromBalance = token.balanceOf(from);
      uint256 toBalance = token.balanceOf(to);

      uint thisUserdata = abi.decode( userData, ( uint ) );

      if ( thisUserdata == uint( TokenSend.SEND ) )
      {

        tokenSender.bought(to, amount, operatorData);
        emit Sent ( to, amount, fromBalance, toBalance );

      } else if ( thisUserdata == uint( TokenSend.MINT ) )
      {

        emit Minted ( amount );

      } else if ( thisUserdata == uint( TokenSend.BURN ) )
      {

        emit Burnt (  amount );

      }
    }

    function getTokenName () external view returns ( string memory )
    {
      require ( address(token) != address(0), "zero address for token!" );
      return token.name();
    }

    function getTokenSymbol () external view returns ( string memory )
    {
      require ( address(token) != address(0), "zero address for token!" );
      return token.symbol();
    }

    function getTotalSupply () external view returns ( uint256 )
    {
      require ( address(token) != address(0), "zero address for token!" );
      return token.totalSupply();
    }

    function getPricePerMWh () external view returns ( int128 )
    {
        return values.pricePerMWh;
    }

    function getCurrentTPES () external view returns ( int128 )
    {
        return values.currentTPES;
    }

    function getOldTPES () external view returns ( int128 )
    {
        return values.oldTPES;
    }

    function getPerCapitaEnergy () external view returns ( int128 )
    {
        return values.perCapitaEnergy;
    }

    function getUnitValue () external view returns ( int128 )
    {
      return values.unitValue;
    }
}
