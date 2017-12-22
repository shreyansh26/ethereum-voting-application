var Voting = artifacts.require('./Voting.sol')

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Shreyansh', 'Shivam', 'Rishabh', 'Sumit'], {gas: 6700000});
};
