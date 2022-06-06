const fs = require("fs");
const path = require("path");
const Web3 = require("web3");
const { promisify } = require("util");

const usdt_contract_address = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const usdc_contract_address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48";

const usdt_abi_file_path = path.resolve(__dirname, "./usdt-abi.json");
const usdc_abi_file_path = path.resolve(__dirname, "./usdc-abi.json");

const account = "0xc6b845234F22C0751B62857C31927F3b763636Ed";

(async () => {
  const web3 = new Web3("https://rpc.ankr.com/eth");
  const usdt_abi = JSON.parse(await promisify(fs.readFile)(usdt_abi_file_path, "utf-8"));
  const usdc_abi = JSON.parse(await promisify(fs.readFile)(usdc_abi_file_path, "utf-8"));
  const tokenContract = new web3.eth.Contract(usdc_abi, usdc_contract_address);
  // await promisify(tokenContract.methods.balanceOf)("0xc6b845234F22C0751B62857C31927F3b763636Ed");
  console.log(tokenContract);
})();