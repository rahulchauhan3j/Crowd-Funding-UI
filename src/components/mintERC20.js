import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function MintERC20(props) {
  return (
    <Web3Button
      className="buttonCSS"
      contractAddress={config.contractAddress}
      contractAbi={config.abi}
      action={async (contract) => {
        props.handleERC20Message("");
        if (ethers.utils.isAddress(props.userAddress)) {
          let add;

          try {
            const call = await contract.contractWrapper.writeContract.mint(
              props.userAddress,
              props.amount
            );
            add = await call.wait();
          } catch (error) {
            console.log(error);
            return false;
          }
          return true;
        } else {
          throw "Invalid Address";
        }
      }}
      onSuccess={(result) => {
        if (result == true) {
          props.handleERC20Message(
            `${props.amount} tokens minted for account ${props.userAddress}`
          );
        } else {
          props.handleERC20Message(
            "Tokens Could Not Be Minted due to an error"
          );
        }
      }}
      onError={(error) => {
        props.handleERC20Message(error);
      }}
    >
      Mint
    </Web3Button>
  );
}

export default MintERC20;
