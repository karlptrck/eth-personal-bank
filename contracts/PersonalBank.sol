pragma solidity ^0.5.0;

contract PersonalBank {

    address owner; // Contract or Bank owner
    mapping (bytes32 => bool) private encashed;

    /**
        @dev Optional payable constructor to fund this contract
     */
    constructor() public payable {
        owner = msg.sender;
    }

    /**
        @dev Fallback function to fund this contract
     */
    function() external payable { }

    /**
        @dev Encashes the signed cheque
        @param to receiver of the funds
        @param amount cheque amount that was signed
        @param chequeId unique identifier to avoid multiple encashment
        @param r signature part
        @param s siganture part
        @param v signature part
     */
    function cashCheque
    (
        address payable to,
        uint256 amount,
        bytes32 chequeId,
        bytes32 r,
        bytes32 s,
        uint8 v
    )
    external
    {
        require(!encashed[chequeId], "Cheque was already used.");

        bytes32 messageHash = keccak256(abi.encodePacked(to, amount, chequeId, address(this)));

        bytes32 messageHash2 = keccak256(abi.encodePacked(
            "\x19Ethereum Signed Message:\n32", messageHash
        ));

        // Checks if the signature of the cheque was signed by the owner
        require(ecrecover(messageHash2, v, r, s) == owner, "bad signature");

        // transfers the fund
        to.transfer(amount);

        encashed[chequeId] = true;
    }
}