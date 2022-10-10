import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-chai-matchers'
import '@nomiclabs/hardhat-ethers'
import dotenv from 'dotenv'
import * as env from 'env-var'

dotenv.config()

const GOERLI_RPC_URL: string = env.get('GOERLI_RPC_URL').required().asString()
const GOERLI_PRIVATE_KEY: string = env
  .get('GOERLI_PRIVATE_KEY')
  .required()
  .asString()

const config: HardhatUserConfig = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY], // TODO: fill the private key
    },
  },
}

export default config
