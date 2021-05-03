var Tx=require('ethereumjs-tx').Transaction
const Web3 =require('web3')
const web3= new Web3('https://rinkeby.infura.io/v3/6244fc96facd47f5b2cf9bb1c4286723')
const account1 ='0x2E99c6B03534C496a500B53C433CbAa9a70fCb9f'
const account2 ='0x4d8386D66465380a8684Dd522666E448ccE2cc52'
const privatekey1Buffer=Buffer.from(process.env.PRIVATE_KEY_1,'hex')
const privatekey2Buffer=Buffer.from(process.env.PRIVATE_KEY_2,'hex')
web3.eth.getBalance(account1,(err,bal)=>{
console.log('account 1 balance:',web3.utils.fromWei(bal,'ether'))
})
web3.eth.getBalance(account2,(err,bal)=>{
console.log('account 2 balance:',web3.utils.fromWei(bal,'ether'))
})

web3.eth.getTransactionCount(account1,(err,txCount)=>{
const txObject={
nance:web3.utils.toHex(txCount),
to:account2,
value:web3.utils.toHex(web3.utils.toWei('1','ether')),
gaslimit:web3.utils.toHex(21000),
gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei'))
}

const tx=new Tx(txObject)
tx.sign(privatekey1Buffer)
const serializedTransaction=tx.serialize()
const raw='0x'+serializedTransaction.toString('hex')
web3.eth.sendSignedTransaction(raw,(err,txHash)=>{
console.log('txHash',txhash)
})
 })
