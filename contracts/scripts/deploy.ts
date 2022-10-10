import { ethers } from 'hardhat'
import { exit } from 'process'

async function main() {
  const whitelistContract = await ethers.getContractFactory('Whitelist')
  const deployedWhitelistContract = await whitelistContract.deploy(10)

  await deployedWhitelistContract.deployed()

  console.log(
    `Whitelist contract deployed to ${deployedWhitelistContract.address}`,
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => exit(0))
  .catch((error) => {
    console.error(error)
    exit(1)
  })
