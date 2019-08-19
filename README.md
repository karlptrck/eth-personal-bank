# eth-personal-bank

Enables anyone to have their own bank on the Ethereum blockchain where they can make a signed digital cheque 
to be shared to a specific individual whom they wished to send money which they can disrburse at any time they wanted.

## Basic Flow Diagram

![](https://user-images.githubusercontent.com/47552061/63292374-80e54180-c293-11e9-9748-781e627cd61c.png)

## Smart Contract

The simple smart contract has the below functionalities:

| Name  | Description | Parameters  |   Return
| ------------- | ------------- | ------------- | ------------- |
| fallback  | payable function that accepts ether to fund the contract | n/a | n/a
| cashCheque  | called by the fund receiver to encash cheque | to (address payable) <br/> amount (uint256)<br/> chequeId (bytes32) <br/> r (bytes32) <br/> s (bytes32) <br/> v (uint8) | n/a



