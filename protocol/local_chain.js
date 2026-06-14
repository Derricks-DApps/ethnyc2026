const { ethers } = require("ethers");

async function main() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  const accounts = await provider.listAccounts();

  console.log("Ganache Accounts:");
  accounts.forEach((account, index) => {
    console.log(`${index + 1}: ${account.address}`);
  });
}

main().catch(console.error);
