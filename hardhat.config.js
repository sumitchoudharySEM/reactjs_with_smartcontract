import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
solidity = "0.8.19";
networks = {
  goerli: {
    url: process.env.PROVIDER_URL,
    accounts: [`0x${process.env.PRIVATE_KEY}`]
  }
};
