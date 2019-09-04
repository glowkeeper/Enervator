pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC777/IERC777.sol";
import "openzeppelin-solidity/contracts/introspection/IERC1820Registry.sol";
import "openzeppelin-solidity/contracts/token/ERC777/IERC777Recipient.sol";
import "openzeppelin-solidity/contracts/token/ERC777/IERC777Sender.sol";

/**
 * @title Simple777Recipient
 * @dev Very simple ERC777 Recipient
 */
contract StandardTokenManager is IERC777Recipient, IERC777Sender {

    IERC1820Registry private _erc1820 = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);

    bytes32 constant private TOKENS_SENDER_INTERFACE_HASH = keccak256("ERC777TokensSender");
    bytes32 constant private TOKENS_RECIPIENT_INTERFACE_HASH = keccak256("ERC777TokensRecipient");

    bool private _shouldRevertSend;
    bool private _shouldRevertReceive;

    IERC777 private _token;

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

    constructor (address token) public
    {
        _token = IERC777(token);

        _shouldRevertSend = false;
        _shouldRevertReceive = false;

        _erc1820.setInterfaceImplementer( address(this), TOKENS_RECIPIENT_INTERFACE_HASH, address(this) );
        _erc1820.setInterfaceImplementer( address(this), TOKENS_SENDER_INTERFACE_HASH, address(this) );
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

      if (_shouldRevertReceive) {
         revert();
      }

      require(msg.sender == address(_token), "StandardTokenRecipientSender: Invalid token received");

      uint256 fromBalance = _token.balanceOf(from);
      uint256 toBalance = _token.balanceOf(to);

      emit TokensReceived(operator, from, to, amount, userData, operatorData, address(_token), fromBalance, toBalance);
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

      if (_shouldRevertSend) {
         revert();
      }

      require(msg.sender == address(_token), "StandardTokenRecipientSender: Invalid token sent");

      uint256 fromBalance = _token.balanceOf(from);
        // when called due to burn, to will be the zero address, which will have a balance of 0
      uint256 toBalance = _token.balanceOf(to);

      emit TokensSent(operator, from, to, amount, userData, operatorData, address(_token), fromBalance, toBalance);

    }

    function setShouldRevertSend ( bool _shouldRevert ) public
    {
        _shouldRevertSend = _shouldRevert;
    }

    function setShouldRevertReceive ( bool _shouldRevert ) public
    {
        _shouldRevertReceive = _shouldRevert;
    }
}
