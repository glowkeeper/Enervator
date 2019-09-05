pragma solidity ^0.5.7;

import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777Sender.sol";

/**
 * @title Simple777Recipient
 * @dev Very simple ERC777 Recipient
 */
contract EnervatorManager is IERC777Recipient, IERC777Sender {

    IERC1820Registry private erc1820 = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);

    bytes32 constant private TOKENS_SENDER_INTERFACE_HASH = keccak256("ERC777TokensSender");
    bytes32 constant private TOKENS_RECIPIENT_INTERFACE_HASH = keccak256("ERC777TokensRecipient");

    bool private shouldRevertSend;
    bool private shouldRevertReceive;

    IERC777 private token;

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

    constructor () public
    {
        token = IERC777(0);

        shouldRevertSend = false;
        shouldRevertReceive = false;

        erc1820.setInterfaceImplementer( address(this), TOKENS_RECIPIENT_INTERFACE_HASH, address(this) );
        erc1820.setInterfaceImplementer( address(this), TOKENS_SENDER_INTERFACE_HASH, address(this) );
    }

    function setToken( address _token ) public
    {
      require( _token != address(0) );
      token = IERC777(_token);
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
