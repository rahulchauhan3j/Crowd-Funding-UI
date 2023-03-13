import { Web3Button } from "@thirdweb-dev/react";
import config from "../configFile.json";
import { ethers } from "ethers";
function CheckBalance(props) {
  return (
    <Web3Button
      className="buttonCSS"
      contractAddress={config.contractAddress}
      contractAbi={config.abi}
      action={async (contract) => {
        if (ethers.utils.isAddress(props.userAddress)) {
          let call;
          try {
            call = await contract.contractWrapper.readContract.balanceOf(
              props.userAddress
            );
          } catch (error) {
            console.log(error);
            return false;
          }
          return call;
        } else {
          throw "Invalid Address";
        }
      }}
      onSuccess={(result) => {
        if (result != false) {
          props.handleERC20Message(`ERC 20 Token Balance is ${result}`);
        } else {
          props.handleERC20Message(
            "ERC20 Token Balance couldnot be fetched due to an error"
          );
        }
      }}
      onError={(error) => {
        props.handleERC20Message(error);
      }}
    >
      Check Balance
    </Web3Button>
  );
}

export default CheckBalance;
