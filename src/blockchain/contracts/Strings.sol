pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

library Strings {

  function compare(string memory _a, string memory _b) public pure returns (bool) {
    require ( bytes(_a).length > 0 && bytes(_b).length > 0 );

    bytes memory a = bytes(_a);
    bytes memory b = bytes(_b);
    if(bytes(a).length != bytes(b).length) {
        return false;
    } else {
        return keccak256(a) == keccak256(b);
    }
  }

  function compare(bytes32 _a, bytes32 _b) public pure returns (bool) {
    require (_a[0] != 0 && _b[0] != 0);

    return _a == _b;
  }

  function bytes32ToStr(bytes32 _x) public pure returns (string memory) {

    bytes memory bytesArray = new bytes(32);
    for (uint256 i; i < 32; i++) {
      bytesArray[i] = _x[i];
    }
    return string(bytesArray);
  }

  // S.Huckle - extra hack to find the index of a string in a string storage array
  function getIndex(string memory _a, string[] memory _xs) public pure returns (uint256) {
    require ( bytes(_a).length > 0 && _xs.length > 0 );

    uint256 index = _xs.length;
    for (uint256 i = 0; i < _xs.length; i++)
    {
      string memory _b = _xs[i];
      if (compare(_a, _b)) {
        index = i;
        break;
      }
    }
    return index;
  }

  function getIndex(bytes32 _x, bytes32[] memory _xs) public pure returns (uint256) {
    require (_x[0] != 0 && _xs.length > 0 );

    uint256 index = _xs.length;
    for (uint256 i = 0; i < _xs.length; i++)
    {
      if (compare(_x, _xs[i])) {
        index = i;
        break;
      }
    }
    return index;
  }

  function getExists(bytes32 _x, bytes32[] memory _xs) public pure returns (bool) {
    require (_x[0] != 0);

    bool exists = false;
    if ( !(_xs.length == 0) ) {
      uint256 index = getIndex(_x, _xs);
      exists = (index != _xs.length);
    }
    return exists;
  }
}
