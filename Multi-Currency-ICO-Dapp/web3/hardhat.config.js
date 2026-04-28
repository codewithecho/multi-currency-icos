import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "dotenv/config";

export default {
  solidity: "0.8.19",
  networks: {
    polygon: {
      url: process.env.NETWORK_RPC_URL,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 137,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};