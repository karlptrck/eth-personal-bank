const ethers = require('ethers')

const PersonalBank = artifacts.require('PersonalBank')

const initialFund = 10000000000000000000
contract('PersonalBank', ([ owner, receiver ]) => {
    beforeEach(async () => {
        this.personalBank = await PersonalBank.new({value : initialFund}) // 10 eth
    })

    it('should have initial value of 10 ether', async () => {
        let balance = await web3.eth.getBalance(this.personalBank.address)
        assert.equal(initialFund, balance)
    })

    it('should be able to sign cheque', async () => {

    })

    it('should be able to encash cheque', async () => {

    })

    it('not be able to encash cheque that was already encashed', async () =>{

    })

    it('not be able to encash cheque on other contract bank address', async () => {

    })
})