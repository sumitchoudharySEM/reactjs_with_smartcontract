// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
const hre = require("hardhat");

async function main() {

  const Maths = await hre.ethers.getContractFactory("Maths");
  const maths = await Maths.deploy();

  await maths.deployed();

  console.log(
    `Maths with ${ethers.utils.formatEther(
      lockedAmount
    )}ETH and unlock timestamp ${unlockTime} deployed to ${maths.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
