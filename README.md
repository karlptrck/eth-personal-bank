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

## Steps to test

1. Clone or download this repository
2. Create ```.env``` file with entry of ```PRIVATE_KEY=ENTER_YOUR_PRIVATE_KEY_HERE```
3. Run ```npm install```
4. Deploy the contract using Remix and MetaMask
5. Modify chequeSigner.js line 6 with the deployed contract address
6. Modify the parameters accordingly like the to address at line 9
7. Run ```node chequeSigner.js``` and check the signature output

Sample output:

![](https://user-images.githubusercontent.com/47552061/63294649-da03a400-c298-11e9-911c-030fda70625b.png)

8. Call the cashCheque function using the receiver account and pass the parameters generated above.
9. Wait for the transaction to be confirmed and check the balance of both accounts to verify.
10. Done
