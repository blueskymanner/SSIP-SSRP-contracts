// Defining bytecode and abi from original contract on mainnet to ensure bytecode matches and it produces the same pair code hash

module.exports = async function ({ ethers, getNamedAccounts, deployments, getChainId }) {
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()
  const owner = deployer
  const claimAssessor = deployer

  await deploy("SingleSidedReinsurancePool", {
    from: deployer,
    args: [owner, claimAssessor],
    log: true,
    deterministicDeployment: false,
  })
}

module.exports.tags = ["SingleSidedReinsurancePool", "UnoRe"]
