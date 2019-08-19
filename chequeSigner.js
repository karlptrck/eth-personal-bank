const ethers = require('ethers');
const crypto = require('crypto');
require('dotenv').config()

let privateKey = process.env.PRIVATE_KEY;
let contractAddress = '0x822816d30e3cCcE1a0e266bE79253d9a779e33Bf';

// Cheque parameters
let to = '0x0fBCE7Da7F6247b01DCF5ba5f7e61c2504E081C5';
let amount = '0.01';


async function signPayment() {
    let wallet = new ethers.Wallet(privateKey);
    let amountWei = ethers.utils.parseEther(amount);
    let chequeUid = '0x' + crypto.randomBytes(32).toString('hex')
    
    let message = ethers.utils.concat([
                      ethers.utils.hexZeroPad(to, 20),
                      ethers.utils.hexZeroPad(ethers.utils.hexlify(amountWei), 32),
                      ethers.utils.hexZeroPad(chequeUid, 32),
                      ethers.utils.hexZeroPad(contractAddress, 20)
                  ]);

    let messageHash = ethers.utils.keccak256(message);

    let sig = await wallet.signMessage(ethers.utils.arrayify(messageHash));
    let splitSig = ethers.utils.splitSignature(sig);

    console.log(`to: ${to}`);
    console.log(`amount: ${amountWei}`);
    console.log(`chequeUid: ${chequeUid}`)
    console.log()
    console.log(`=== Signature Parts ===`);
    console.log(`r: ${splitSig.r}`);
    console.log(`s: ${splitSig.s}`);
    console.log(`v: ${splitSig.v}`);
}

signPayment();