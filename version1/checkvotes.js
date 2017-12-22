Web3 = require('web3')
fs = require('fs');
solc = require('solc')

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.defaultAccount = web3.eth.accounts[0];
web3.eth.accounts

code = fs.readFileSync('Voting.sol').toString()
compiledCode = solc.compile(code)

abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)

VotingContract = web3.eth.contract(abiDefinition)

console.log("Loading contract at-" + process.argv[2])
contractInstance = VotingContract.at(process.argv[2]);

console.log("Total votes for Shreyansh-" + contractInstance.totalVotesFor.call('Shreyansh').toLocaleString())
console.log("Total votes for Shivam-" + contractInstance.totalVotesFor.call('Shivam').toLocaleString())
console.log("Total votes for Rishabh-" + contractInstance.totalVotesFor.call('Rishabh').toLocaleString())
console.log("Total votes for Sumit-" + contractInstance.totalVotesFor.call('Sumit').toLocaleString())
