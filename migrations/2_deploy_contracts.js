const BilgiToken = artifacts.require("BilgiToken.sol");

module.exports = function (deployer) {
  deployer.deploy(BilgiToken);
};
