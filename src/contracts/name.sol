// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Name {
    string public name;
    
    function set(string memory newValue) public {
        name = newValue;
    }
    
    function get() external view returns (string memory) {
        return name;
    }
}
