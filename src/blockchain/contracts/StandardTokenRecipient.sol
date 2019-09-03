pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC777/IERC777.sol";
import "openzeppelin-solidity/contracts/introspection/IERC1820Registry.sol";
import "openzeppelin-solidity/contracts/token/ERC777/IERC777Recipient.sol";
import "openzeppelin-solidity/contracts/token/ERC777/IERC777Sender.sol";

/**
 * @title Simple777Recipient
 * @dev Very simple ERC777 Recipient
 */
contract StandardTokenRecipientSender is IERC777Recipient, IERC777Sender {

    IERC1820Registry private _erc1820 = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);
    bytes32 constant private TOKENS_SENDER_INTERFACE_HASH = keccak256("ERC777TokensSender");
    bytes32 constant private TOKENS_RECIPIENT_INTERFACE_HASH = keccak256("ERC777TokensRecipient");

    IERC777 private _token;

    event TokensReceived(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData);
    event TokensSent(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData);

    constructor (address token) public {
        _token = IERC777(token);

        _erc1820.setInterfaceImplementer(address(this), TOKENS_RECIPIENT_INTERFACE_HASH, address(this));
    }

    function tokensReceived(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) external {
        require(msg.sender == address(_token), "StandardTokenRecipientSender: Invalid token received");

        emit TokensReceived(operator, from, to, amount, userData, operatorData);
    }

    function tokensToSend(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) external {
      require(msg.sender == address(_token), "StandardTokenRecipientSender: Invalid token sent");

      emit TokensSent(operator, from, to, amount, userData, operatorData);

    }
}
