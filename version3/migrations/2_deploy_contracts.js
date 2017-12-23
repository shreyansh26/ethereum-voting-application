var Voting = artifacts.require('./Voting.sol')

module.exports = function(deployer) {
  deployer.deploy(Voting, 1000, web3.toWei('0.1', 'ether'), ['Shreyansh', 'Shivam', 'Rishabh', 'Sumit'], {gas: 6700000});
};
